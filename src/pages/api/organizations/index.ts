import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import {
  authorizationValidationMiddleware,
  errorHandlerMiddleware,
  notificationHandlerMiddleware,
} from 'server/middlewares';
import { organizationValidationSchema } from 'validationSchema/organizations';
import { convertQueryToPrismaUtil, getOrderByOptions, parseQueryParams } from 'server/utils';
import { getServerSession } from '@roq/nextjs';
import { GetManyQueryOptions } from 'interfaces';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getOrganizations();
    case 'POST':
      return createOrganization();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getOrganizations() {
    const {
      limit: _limit,
      offset: _offset,
      order,
      ...query
    } = parseQueryParams(req.query) as Partial<GetManyQueryOptions>;
    const limit = parseInt(_limit as string, 10) || 20;
    const offset = parseInt(_offset as string, 10) || 0;
    const response = await prisma.organization
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findManyPaginated({
        ...convertQueryToPrismaUtil(query, 'organization'),
        take: limit,
        skip: offset,
        ...(order?.length && {
          orderBy: getOrderByOptions(order),
        }),
      });
    return res.status(200).json(response);
  }

  async function createOrganization() {
    await organizationValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.astronomy_expert?.length > 0) {
      const create_astronomy_expert = body.astronomy_expert;
      body.astronomy_expert = {
        create: create_astronomy_expert,
      };
    } else {
      delete body.astronomy_expert;
    }
    if (body?.data_analyst?.length > 0) {
      const create_data_analyst = body.data_analyst;
      body.data_analyst = {
        create: create_data_analyst,
      };
    } else {
      delete body.data_analyst;
    }
    if (body?.data_model?.length > 0) {
      const create_data_model = body.data_model;
      body.data_model = {
        create: create_data_model,
      };
    } else {
      delete body.data_model;
    }
    if (body?.moon_movement?.length > 0) {
      const create_moon_movement = body.moon_movement;
      body.moon_movement = {
        create: create_moon_movement,
      };
    } else {
      delete body.moon_movement;
    }
    const data = await prisma.organization.create({
      data: body,
    });
    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}

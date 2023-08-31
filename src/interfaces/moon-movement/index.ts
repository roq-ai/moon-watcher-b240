import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface MoonMovementInterface {
  id?: string;
  date: any;
  phase: string;
  transit: string;
  user_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface MoonMovementGetQueryInterface extends GetQueryInterface {
  id?: string;
  phase?: string;
  transit?: string;
  user_id?: string;
  organization_id?: string;
}

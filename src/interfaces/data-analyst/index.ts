import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface DataAnalystInterface {
  id?: string;
  user_id: string;
  organization_id: string;
  specialization?: string;
  years_of_experience?: number;
  date_joined: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface DataAnalystGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  organization_id?: string;
  specialization?: string;
}

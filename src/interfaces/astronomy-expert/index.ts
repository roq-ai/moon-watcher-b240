import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface AstronomyExpertInterface {
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

export interface AstronomyExpertGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  organization_id?: string;
  specialization?: string;
}

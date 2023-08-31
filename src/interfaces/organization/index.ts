import { AstronomyExpertInterface } from 'interfaces/astronomy-expert';
import { DataAnalystInterface } from 'interfaces/data-analyst';
import { DataModelInterface } from 'interfaces/data-model';
import { MoonMovementInterface } from 'interfaces/moon-movement';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  astronomy_expert?: AstronomyExpertInterface[];
  data_analyst?: DataAnalystInterface[];
  data_model?: DataModelInterface[];
  moon_movement?: MoonMovementInterface[];
  user?: UserInterface;
  _count?: {
    astronomy_expert?: number;
    data_analyst?: number;
    data_model?: number;
    moon_movement?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}

export interface User {
  id: string;
  email: string;
  user_name: null;
  role: string;
  salutation: string;
  first_name: string;
  last_name: string;
  country_code: string;
  contact_number: string;
  school_name: string;
  other_school_name: string;
  school_level: string;
  team_category: null;
  block_building_name: string;
  street_name: string;
  organization: null;
  designation: null;
  availability_slot: null;
  city: string;
  unit_level_or_floor: string;
  zip_code: string;
  terms_and_conditions: boolean;
  status: boolean;
  on_boarding: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: null;
  team_category_id: number;
  competition: UserCompetition[];
}

export interface UserCompetition {
  id: number;
  competition_name: string;
  competition_category: string;
  total_no_of_teams_registered: number;
  max_no_of_teams: number;
}

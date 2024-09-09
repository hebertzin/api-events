import { Activity } from "./Activity";

export type Users = {
  name: string;
  email: string;
  password: string;
  activities: Activity[];
};

import { Users } from "../Users";

export interface IUsersRepository {
  create(data: Users): Promise<Users>;
  findByEmail(email: string): Promise<Users | null>;
}

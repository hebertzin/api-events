import { Users } from "../entity/user-entity";

export interface IUsersRepository {
  create(data: Users): Promise<Users>;
  findByEmail(email: string): Promise<Users | null>;
}

import { User } from "../entity/Users";

export interface UserRepository {
  create(data: User): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}

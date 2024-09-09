import { User } from "../application/users/CreateUserService";

export interface ICreateUserService {
  invoke(data: User): Promise<User>;
}

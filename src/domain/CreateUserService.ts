import { User } from "../application/usecases/users/create-user-use-case";

export interface ICreateUserService {
  invoke(data: User): Promise<User>;
}

import { Service } from "../../domain/service";
import { UsersRepositoryImpl } from "../../infraestructure/db/repository/users/UsersRepositoryImpl";

type CreateUserRequest = {
  email: string;
  name: string;
  password: string;
};

type CreateUserResponse = {
  user: CreateUserRequest;
};

export class CreateUserService
  implements Service<CreateUserRequest, CreateUserResponse>
{
  constructor(private readonly usersRepository: UsersRepositoryImpl) {}

  async invoke({
    name,
    email,
    password,
  }: CreateUserRequest): Promise<CreateUserResponse> {
    try {
      const user = await this.usersRepository.create({ email, name, password });
      return { user };
    } catch (error) {
      throw new Error("Some error has been ocurred...");
    }
  }
}

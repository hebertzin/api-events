import { Service } from "../../domain/Service";
import { UserAlreadyExist } from "../../errors/errors";
import { BcryptHashService } from "../../infraestructure/bcrypt/BcryptHashService";
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
  constructor(
    private readonly usersRepository: UsersRepositoryImpl,
    private readonly bcrypt: BcryptHashService,
  ) {}

  async invoke({
    name,
    email,
    password,
  }: CreateUserRequest): Promise<CreateUserResponse> {
    const existentUser = await this.usersRepository.findByEmail(email);

    if (existentUser) {
      throw new UserAlreadyExist("Usuário já existe", 209);
    }

    try {
      const passwordHashed = await this.bcrypt.hash(password);

      const user = await this.usersRepository.create({
        email,
        name,
        password: passwordHashed,
      });
      return { user };
    } catch (error) {
      throw new Error("Erro interno do servidor");
    }
  }
}

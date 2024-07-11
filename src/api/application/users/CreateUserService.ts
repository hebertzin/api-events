import { Service } from "../../domain/Service";
import { AppError, UserAlreadyExist } from "../../errors/errors";
import { BcryptHashService } from "../../infraestructure/bcrypt/BcryptHashService";
import { UsersRepositoryImpl } from "../../infraestructure/db/repository/users/UsersRepositoryImpl";
import { HttpStatusCode } from "../../infraestructure/utils/HttpStatusCode";

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
    private readonly bcrypt: BcryptHashService
  ) {}

  async invoke({
    name,
    email,
    password,
  }: CreateUserRequest): Promise<CreateUserResponse> {
    const existentUser = await this.usersRepository.findByEmail(email);

    if (existentUser) {
      throw new UserAlreadyExist("Usuário já existe", HttpStatusCode.Created);
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
      throw new AppError(
        "Erro interno do servidor",
        HttpStatusCode.InternalServerError
      );
    }
  }
}

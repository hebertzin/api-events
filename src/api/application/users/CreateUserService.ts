import { UsersRepositoryImpl } from "../../infraestructure/db/repository/users/UsersRepositoryImpl";

export class CreateUserService {
  constructor(private usersRepository: UsersRepositoryImpl) {}

  async invoke({ name, email, password }) {
    await this.usersRepository.create({ email, name, password });
  }
}

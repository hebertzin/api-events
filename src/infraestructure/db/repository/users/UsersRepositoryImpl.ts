import { prisma } from "../../client/PrismaClient";
import { UserRepository } from "../../../../domain/users/UsersRepository";
import { User } from "../../../../domain/entity/user-entity";

export class UsersRepositoryImpl implements UserRepository {
  async create(data: User): Promise<User> {
    const user = await prisma.user.create({
      data: {
        ...data,
      },
    });
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    return user;
  }
}

import { prisma } from "../../client/PrismaClient";
import { IUsersRepository } from "../../../../domain/users/UsersRepository";
import { Users } from "../../../../domain/entity/user-entity";

export class UsersRepositoryImpl implements IUsersRepository {
  async create(data: Users): Promise<Users> {
    const user = await prisma.user.create({
      data: {
        ...data,
      },
    });
    return user;
  }

  async findByEmail(email: string): Promise<Users | null> {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    return user;
  }
}

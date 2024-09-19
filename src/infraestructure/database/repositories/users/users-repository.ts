import { prisma } from "../../orm/prisma-client";
import { UserRepository } from "../../../../domain/users/users-repository";
import { User } from "../../../../domain/entities/user-entity";

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

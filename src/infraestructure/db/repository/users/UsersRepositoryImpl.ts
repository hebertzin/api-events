import { Prisma, User } from "@prisma/client";
import { IUsersRepository } from "../../../../../domain/users/UsersRepository";
import { prisma } from "../../client/PrismaClient";

export class UsersRepositoryImpl implements IUsersRepository {
  async create(data: Prisma.UserUncheckedCreateInput): Promise<User> {
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

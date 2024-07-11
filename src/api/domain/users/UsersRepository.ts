import { User, Prisma } from "@prisma/client";

export interface IUsersRepository {
  create(data: Prisma.UserUncheckedCreateInput): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}

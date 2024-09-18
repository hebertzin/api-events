export type User = {
  name: string;
  email: string;
  password: string;
};

export interface ICreateUserService {
  invoke(data: User): Promise<User>;
}

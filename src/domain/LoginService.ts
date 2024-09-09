export type Login = {
  email: string;
  password: string;
};

export type Token = {
  token: string;
};

export interface LoginService {
  invoke(data: Login): Promise<Token>;
}

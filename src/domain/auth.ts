export type LoginParams = {
  email: string;
  password: string;
};

export type Token = {
  token: string;
};

export interface Login {
  invoke(data: LoginParams): Promise<Token>;
}

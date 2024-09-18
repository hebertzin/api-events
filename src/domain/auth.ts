export type Authentication = {
  email: string;
  password: string;
};

export type Token = {
  token: string;
};

export interface Login {
  invoke(data: Authentication): Promise<Token>;
}

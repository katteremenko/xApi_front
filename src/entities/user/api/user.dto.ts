export interface ILoginParams {
  login: string;
  password: string;
}

export interface IGetUser {
  token: string;
  clientInfo: {
    api: {
      basic_key: string;
      basic_secret: string;
    };
  };
}


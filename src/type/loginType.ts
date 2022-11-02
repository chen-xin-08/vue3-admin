type LoginType = {
  userName: string;
  password: string;
};

type ErrorResponse = {
  code: number;
  message: string;
};

type AppState = {
  token: string;
};

export type { LoginType, ErrorResponse, AppState };

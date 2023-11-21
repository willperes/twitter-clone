export interface SignInDto {
  username: string;
  password: string;
}

export interface SignInResponse {
  accessToken: string;
}

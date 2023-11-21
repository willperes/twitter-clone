export interface SignUpDto {
  name: string;
  email: string;
  password: string;
  username: string;
}

export interface SignUpResponse {
  accessToken: string;
}

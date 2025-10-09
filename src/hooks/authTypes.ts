export interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const CREDENTIALS = {
  username: "rkpackagings",
  password: "rk@admin123",
};

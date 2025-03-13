import { AuthProvider } from "react-admin";

export const authProvider: AuthProvider = {
  // Runs when user attempts to login
  login: ({ username, password }) => {
    if (username === "Admin" && password === "password") {
      localStorage.setItem("username", username);
      return Promise.resolve();
    } else {
      return Promise.reject();
    }
  },
  // Runs when user log out
  logout: () => {
    localStorage.removeItem("username");
    return Promise.resolve();
  },
  //Runs when api returns an error
  checkError: ({ status }: { status: number }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  //Runs when the user navigates to a new location to check for auth
  checkAuth: () => {
    return localStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject();
  },
  //Runs when the user navigates to a new location to check for permission or rules
  getPermissions: () => {
    return Promise.resolve();
  },
};

import { UserSession } from "@/types/user";
import { storage, STORAGE_TOKEN_KEY, STORAGE_USER } from "@/utils/constants";

export default {
  async saveSession(token: any) {
    storage.setItem(STORAGE_TOKEN_KEY, token);
    storage.setItem("authenticated", token ? "true" : "false");
  },

  async quitSession() {
    window.localStorage.clear();
  },

  async saveUserSession(user: UserSession) {
    const UserConnected = {
      email: user.email,
      fullName: user.firstName + " " + user.lastName,
    };
    storage.setItem(STORAGE_USER, JSON.stringify(UserConnected));
  },
};

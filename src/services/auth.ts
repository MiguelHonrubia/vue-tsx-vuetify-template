import Api from "./api";
import userSession from "../modules/user-session";

const requestOptions = {
  baseUrl: process.env.VUE_APP_API_URL,
  defaultOptions: {},
};

const api = new Api(requestOptions);

export const login = (body: any) => api.post("/Auth/SignIn", { body });
export const singUp = (body: any) => api.post("/Auth/SignUp", { body });
export const getUser = () => api.get("/Auth/User/Info");

export const loginUser = async (body: any) => {
  const response = await login(body);

  if (response) {
    userSession.saveSession(response);

    const user = await getUser();

    if (user) {
      userSession.saveUserSession(user);
      return user;
    }
  }
};

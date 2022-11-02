import type { LoginType } from "@/type/loginType";
import request from "@/api/request";

const createToken = (loginType: LoginType): Promise<string> => {
  return request.post("/token", loginType);
};

export default {
  createToken,
};

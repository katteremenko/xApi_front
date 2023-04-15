import XAPI from "@xapi/xapi";
import { $user } from "../entities/user/model/user.store";

// const endpoint = "http://localhost/data/xAPI/";
// const username = User.username;
// const password = User.password;
// const auth = XAPI.toBasicAuth(username, password);
// const xapi: XAPI = new XAPI({
//     endpoint: endpoint,
//     auth: auth
// });

export const CreateLRSConnection = () => {
  const clientString = localStorage.getItem("client") || "";
  console.log(clientString)
  const client = JSON.parse(clientString);
  const endpoint = "http://localhost/data/xAPI/";
  const username = client.username;
  const password = client.password;
  const auth = XAPI.toBasicAuth(username, password);
  return new XAPI({
    endpoint: endpoint,
    auth: auth,
  });
};

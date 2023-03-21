import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Shikhar Bansal",
    email: "shikharbansal007@gmail.com",
  },
});

export default UserContext;

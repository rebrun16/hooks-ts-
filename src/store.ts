import { createContext } from "react";

const initialState = {
  first: "Jack",
  last: "Her"
};

const context = createContext<typeof initialState>(initialState);

export default context;
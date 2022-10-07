import { useContext } from "react";
import Context from "./Context";

export function useStore() {
  return useContext(Context);
}
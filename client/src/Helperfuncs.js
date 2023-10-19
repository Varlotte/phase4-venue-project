import { createContext } from "react";

export function getCurrUser() {
  return window.sessionStorage.getItem("currentUser");
}

export const CurrentUserContext = createContext(
  window.sessionStorage.getItem("currentUser")
);

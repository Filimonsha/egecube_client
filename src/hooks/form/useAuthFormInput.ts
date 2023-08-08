import { useState } from "react";
import { UserCredentials } from "@/types/backend/user";

type AuthFormSetters = {
  setUserMail: (userMail: string) => void;
  setPassword: (password: string) => void;
};

const useAuthFormInput = (): {
  userCreds: UserCredentials;
  setters: AuthFormSetters;
} => {
  const [userMail, setUserMail] = useState("");
  const [password, setPassword] = useState("");

  const setters = {
    setUserMail,
    setPassword,
  };

  return { userCreds: { userMail, password }, setters };
};

export default useAuthFormInput;

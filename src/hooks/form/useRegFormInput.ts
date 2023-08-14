import { useState } from "react";
import { UserBase } from "@/types/backend/user";

type RegFormSetters = {
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setUserPhone: (userPhone: string) => void;
  setUserMail: (userMail: string) => void;
  setPassword: (password: string) => void;
};

const useRegFormInput = (): { userInfo: UserBase; setters: RegFormSetters } => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userMail, setUserMail] = useState("");
  const [password, setPassword] = useState("");

  const setters = {
    setFirstName,
    setLastName,
    setUserPhone,
    setUserMail,
    setPassword,
  };

  return {
    userInfo: { firstName, lastName, userPhone, userMail, password },
    setters,
  };
};

export default useRegFormInput;

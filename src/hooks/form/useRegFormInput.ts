import { useState } from "react";
import { UserBase } from "@/types/backend/user";

type RegFormSetters = {
  setFirstName: (string) => void;
  setLastName: (string) => void;
  setUserPhone: (string) => void;
  setUserMail: (string) => void;
  setPassword: (string) => void;
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

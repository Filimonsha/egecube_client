"use client";

import FormElementInput from "@/components/form/util/FormElementInput";
import styles from "../form.module.css";
import FormElementButton from "@/components/form/util/FormElementButton";
import FormElementLink from "@/components/form/util/FormElementLink";
import { FormEventHandler, SyntheticEvent, useEffect } from "react";
import useAuthFormInput from "@/hooks/form/useAuthFormInput";
import { PROFILE_ROUTE, REGISTER_ROUTE } from "@/const/routes";
import { useAuthorizeUserMutation } from "@/redux/api/user/userAuthApi";
import { useRouter } from "next/navigation";
import { createUser } from "@/redux/slice/userCredentialsSlice";
import { useAppDispatch } from "@/hooks/hooks";

const LoginForm = () => {
  const { userCreds, setters } = useAuthFormInput();
  const [authorizeUser, { isSuccess }] = useAuthorizeUserMutation();

  const dispatch = useAppDispatch();

  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      router.push(PROFILE_ROUTE);
      dispatch(createUser(userCreds));
    }
  }, [isSuccess]);

  const submitHandler: FormEventHandler<HTMLFormElement> = async (
    event: SyntheticEvent,
  ) => {
    event.preventDefault();

    await authorizeUser(userCreds).unwrap();
  };

  const inputElements = [
    {
      title: "Электронная почта",
      type: "text",
      valueGetter: setters.setUserMail,
    },
    { title: "Пароль", type: "password", valueGetter: setters.setPassword },
  ];

  return (
    <div className={styles.formContainer}>
      <form className={styles.formContent} onSubmit={submitHandler}>
        {inputElements.map((element) => (
          <FormElementInput
            key={element.title}
            title={element.title}
            type={element.type}
            valueGetter={element.valueGetter}
          />
        ))}
        <FormElementButton title={"Войти"} />
        <FormElementLink
          title={"Зарегистрироваться"}
          url={REGISTER_ROUTE}
          id={styles["reg"]}
        />
      </form>
    </div>
  );
};

export default LoginForm;

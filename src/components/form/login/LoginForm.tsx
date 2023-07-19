"use client";

import FormElementInput from "@/components/form/util/FormElementInput";
import styles from "../form.module.css";
import FormElementButton from "@/components/form/util/FormElementButton";
import FormElementLink from "@/components/form/util/FormElementLink";
import { FormEventHandler, SyntheticEvent } from "react";
import useAuthFormInput from "@/hooks/form/useAuthFormInput";

const LoginForm = () => {
  const { userCreds, setters } = useAuthFormInput();

  const submitHandler: FormEventHandler<HTMLFormElement> = (
    event: SyntheticEvent,
  ) => {
    event.preventDefault();
    console.log(userCreds);
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.formContent} onSubmit={submitHandler}>
        <FormElementInput
          title={"Электронная почта"}
          type={"text"}
          valueGetter={setters.setUserMail}
        />
        <FormElementInput
          title={"Пароль"}
          type={"password"}
          valueGetter={setters.setPassword}
        />
        <FormElementButton title={"Войти"} />
        <FormElementLink
          title={"Зарегистрироваться"}
          url={"/register"}
          id={styles["reg"]}
        />
      </form>
    </div>
  );
};

export default LoginForm;

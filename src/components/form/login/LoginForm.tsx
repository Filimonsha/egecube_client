"use client";

import FormElementInput from "@/components/form/util/FormElementInput";
import styles from "../form.module.css";
import FormElementButton from "@/components/form/util/FormElementButton";
import FormElementLink from "@/components/form/util/FormElementLink";
import { FormEventHandler, SyntheticEvent } from "react";
import useAuthFormInput from "@/hooks/form/useAuthFormInput";
import { REGISTER_ROUTE } from "@/const/routes";

const LoginForm = () => {
  const { userCreds, setters } = useAuthFormInput();

  const submitHandler: FormEventHandler<HTMLFormElement> = (
    event: SyntheticEvent,
  ) => {
    event.preventDefault();
    console.log(userCreds);
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

"use client"

import FormElementInput from "@/components/form/login/util/FormElementInput";
import styles from "../form.module.css";
import FormElementButton from "@/components/form/login/util/FormElementButton";
import FormElementLink from "@/components/form/login/util/FormElementLink";
import {FormEventHandler, SyntheticEvent} from "react";

const LoginForm = () => {

    const submitHandler: FormEventHandler<HTMLFormElement> = (event: SyntheticEvent) => {
        event.preventDefault()
    }

  return (
    <div className={styles.formContainer}>
      <form className={styles.formContent} onSubmit={submitHandler}>
        <FormElementInput title={"Логин"} type={"text"} />
        <FormElementInput title={"Пароль"} type={"password"} />
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

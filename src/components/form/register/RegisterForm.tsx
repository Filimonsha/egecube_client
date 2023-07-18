"use client";

import styles from "@/components/form/form.module.css";
import FormElementInput from "@/components/form/login/util/FormElementInput";
import FormElementButton from "@/components/form/login/util/FormElementButton";
import { FormEventHandler, SyntheticEvent } from "react";

const RegisterForm = () => {
  const submitHandler: FormEventHandler<HTMLFormElement> = (
    event: SyntheticEvent,
  ) => {
    event.preventDefault();
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.formContent} onSubmit={submitHandler}>
        <FormElementInput title={"Имя"} type={"text"} />
        <FormElementInput title={"Фамилия"} type={"text"} />
        <FormElementInput title={"Телефон"} type={"text"} />
        <FormElementInput title={"Электронная почта"} type={"text"} />
        <FormElementInput title={"Пароль"} type={"password"} />
        <FormElementButton title={"Зарегистрироваться"} id={styles["reg"]} />
      </form>
    </div>
  );
};

export default RegisterForm;

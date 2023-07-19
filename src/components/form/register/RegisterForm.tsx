"use client";

import styles from "@/components/form/form.module.css";
import FormElementInput from "@/components/form/util/FormElementInput";
import FormElementButton from "@/components/form/util/FormElementButton";
import {SyntheticEvent, useEffect} from "react";
import {useCreateUserMutation} from "@/redux/api/user/userApi";
import useRegFormInput from "@/hooks/form/useRegFormInput";

const RegisterForm = () => {
  const [createUser, {data}] = useCreateUserMutation()
  const { userInfo, setters } = useRegFormInput();

  useEffect(() => {
    console.log(data)
  }, [data])

  const submitHandler = async (
    event: SyntheticEvent,
  ) => {
    event.preventDefault();

    await createUser(userInfo).unwrap();
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.formContent} onSubmit={submitHandler}>
        <FormElementInput
          title={"Имя"}
          type={"text"}
          valueGetter={setters.setFirstName}
        />
        <FormElementInput
          title={"Фамилия"}
          type={"text"}
          valueGetter={setters.setLastName}
        />
        <FormElementInput
          title={"Телефон"}
          type={"text"}
          valueGetter={setters.setUserPhone}
        />
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
        <FormElementButton title={"Зарегистрироваться"} id={styles["reg"]} />
      </form>
    </div>
  );
};

export default RegisterForm;

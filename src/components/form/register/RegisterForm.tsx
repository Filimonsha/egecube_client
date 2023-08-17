"use client";

import styles from "@/components/form/form.module.css";
import FormElementInput from "@/components/form/util/FormElementInput";
import FormElementButton from "@/components/form/util/FormElementButton";
import { SyntheticEvent, useEffect } from "react";
import { useCreateUserMutation } from "@/redux/api/user/userAccountApi";
import useRegFormInput from "@/hooks/form/useRegFormInput";
import { LOGIN_ROUTE } from "@/const/routes";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [createUser, { data, isSuccess }] = useCreateUserMutation();
  const { userInfo, setters } = useRegFormInput();
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) router.push(LOGIN_ROUTE);
  }, [data]);

  const submitHandler = async (event: SyntheticEvent) => {
    event.preventDefault();
    await createUser(userInfo).unwrap();
  };

  const inputElements = [
    {
      title: "Имя",
      type: "text",
      valueGetter: setters.setFirstName,
    },
    { title: "Фамилия", type: "text", valueGetter: setters.setLastName },
    { title: "Телефон", type: "text", valueGetter: setters.setUserPhone },
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
        {inputElements.map(element => (
          <FormElementInput
            key={element.title}
            title={element.title}
            type={element.type}
            valueGetter={element.valueGetter}
          />
        ))}
        <FormElementButton title={"Зарегистрироваться"} id={styles["reg"]} />
      </form>
    </div>
  );
};

export default RegisterForm;

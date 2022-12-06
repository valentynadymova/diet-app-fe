import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/authorization';
import { useNavigate } from 'react-router';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Section,
  H2,
  Input,
  InputError,
  BoxButtons,
  LoginBtn,
  RegisterBtn,
} from './LoginForm.styled';

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegisterClick = () => {
    navigate('/registration');
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, //eslint-disable-line
        'Неналежна назва ел. пошти',
      )
      .min(3, 'Має містити мінімум 3 символи!')
      .max(254, 'Не може містити більше 254 символів!')
      .required(`Це поле є обов'язковим!`),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[0-9])(?!.*[^a-zA-Z0-9])/,
        'Має містити мінімум одну латинську літеру, одну цифру, без спеціальних символів',
      )
      .min(8, 'Має містити мінімум 8 символів!')
      .max(100, 'Не може містити більше 100 символів!')
      .required(`Це поле є обов'язковим!`),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: values => {
      dispatch(authOperations.logIn(values));
      formik.resetForm({ name: '', email: '' });
    },
  });

  return (
    <Section>
      <H2>Ввійти</H2>
      <form onSubmit={formik.handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Ел. пошта *"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur('email')}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email && (
          <InputError>{formik.errors.email}</InputError>
        )}
        <Input
          type="password"
          name="password"
          placeholder="Пароль *"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur('password')}
          value={formik.values.password}
        />
        {formik.errors.password && formik.touched.password && (
          <InputError>{formik.errors.password}</InputError>
        )}
        <BoxButtons>
          <LoginBtn type="submit">Ввійти</LoginBtn>
          <RegisterBtn type="button" onClick={onRegisterClick}>
            Реєстрація
          </RegisterBtn>
        </BoxButtons>
      </form>
    </Section>
  );
};

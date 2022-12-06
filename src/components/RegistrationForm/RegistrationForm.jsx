import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Section } from './RegistrationForm.Styled';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/authorization';

export const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLoginClick = () => {
    navigate('/signin');
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Має містити мінімум 3 символи!')
      .max(254, 'Не може містити більше 254 символів!')
      .required("Це поле обов'язкове!"),
    email: Yup.string()
      .matches(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, //eslint-disable-line
        'Неналежна назва ел. пошти',
      )
      .min(3, 'Має містити мінімум 3 символи!')
      .max(254, 'Не може містити більше 254 символів!')
      .required("Це поле обов'язкове!"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[0-9])(?!.*[^a-zA-Z0-9])/,
        'Має містити мінімум одну латинську літеру, одну цифру, без спеціальних символів',
      )
      .min(8, 'Має містити мінімум 8 символів!')
      .max(100, 'Не може містити більше 100 символів!')
      .required("Це поле обов'язкове!"),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async values => {
      await dispatch(authOperations.register(values));
    },
  });

  return (
    <Section>
      <h2 className="form-title">Реєстрація</h2>

      <form onSubmit={formik.handleSubmit} className="form">
        <input
          name="name"
          className="form-input"
          placeholder="Ім'я *"
          type="text"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur('name')}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <p className="form-input-error">{formik.errors.name}</p>
        ) : null}

        <input
          name="email"
          className="form-input"
          placeholder="Ел. пошта *"
          type="email"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur('email')}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <p className="form-input-error">{formik.errors.email}</p>
        ) : null}

        <input
          name="password"
          className="form-input"
          placeholder="Пароль *"
          type="password"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur('password')}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <p className="form-input-error">{formik.errors.password}</p>
        ) : null}

        <div className="buttons">
          <button className="login-button" type="button" onClick={onLoginClick}>
            Ввійти
          </button>
          <button className="register-button" type="submit">
            Реєстрація
          </button>
        </div>
      </form>
    </Section>
  );
};

import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { Section } from './DailyCaloriesForm.Styled';
import { DailyButton } from './DailyButton.Styled';
import { useState } from 'react';
import * as Yup from 'yup';

export const DailyCaloriesForm = ({ onFormSubmit }) => {
  const [isLabelCheked, setIsLabelCheked] = useState({
    one: true,
    two: false,
    three: false,
    four: false,
  });

  const onRadioClick = button => {
    setIsLabelCheked({
      one: false,
      two: false,
      three: false,
      four: false,
    });
    setIsLabelCheked(prevState => {
      return {
        ...prevState,
        [button]: true,
      };
    });
  };

  const validationSchema = Yup.object({
    height: Yup.number()
      .typeError('Має бути число!')
      .min(100, 'Мінімальний зріст 100 см!')
      .max(250, 'Максимальний зріст 250 см!')
      .required("Це поле обов'язкове!"),
    age: Yup.number()
      .typeError('Має бути число!')
      .min(18, 'Мінімальний вік 18 років!')
      .max(100, 'Максимальний вік 100 років')
      .required("Це поле обов'язкове!"),
    currentWeight: Yup.number()
      .typeError('Має бути число!')
      .min(20, 'Мінімальна вага 20 кг!')
      .max(500, 'Максимальна вага 500 кг!')
      .required("Це поле обов'язкове!"),
    desiredWeight: Yup.number()
      .typeError('Має бути число!')
      .min(20, 'Мінімальна вага 20 кг!')
      .max(500, 'Максимальна вага 500 кг!')
      .required("Це поле обов'язкове!")
      .when('currentWeight', (currentWeight, validationSchema) => {
        return validationSchema.test({
          test: desiredWeight => currentWeight && desiredWeight < currentWeight,
          message: 'Очікувана вага має бути меншою за поточну!',
        });
      }),
    bloodType: Yup.number()
      .typeError('Має бути число!')
      .oneOf([1, 2, 3, 4])
      .required("Це поле обов'язкове!"),
  });

  const formik = useFormik({
    initialValues: {
      height: '',
      age: '',
      currentWeight: '',
      desiredWeight: '',
      bloodType: '1',
    },
    validationSchema,
    onSubmit: values => {
      onFormSubmit(values);
    },
  });

  return (
    <Section>
      <h3 className="form-label">Розрахуйте свою денну норму калорій</h3>

      <form onSubmit={formik.handleSubmit}>
        <div className="form">
          <div className="form-part">
            <input
              name="height"
              className="form-input"
              placeholder="Зріст, см *"
              type="text"
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur('height')}
              value={formik.values.height}
            />
            {formik.touched.height && formik.errors.height ? (
              <p className="form-input-error">{formik.errors.height}</p>
            ) : null}

            <input
              name="age"
              className="form-input"
              placeholder="Вік, років *"
              type="text"
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur('age')}
              value={formik.values.age}
            />
            {formik.touched.age && formik.errors.age ? (
              <p className="form-input-error">{formik.errors.age}</p>
            ) : null}

            <input
              name="currentWeight"
              className="form-input"
              placeholder="Поточна вага, кг *"
              type="text"
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur('currentWeight')}
              value={formik.values.currentWeight}
            />
            {formik.touched.currentWeight && formik.errors.currentWeight ? (
              <p className="form-input-error">{formik.errors.currentWeight}</p>
            ) : null}
          </div>

          <div className="form-part">
            <input
              name="desiredWeight"
              className="form-input"
              placeholder="Очікувана вага, кг * "
              type="text"
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur('desiredWeight')}
              value={formik.values.desiredWeight}
            />
            {formik.touched.desiredWeight && formik.errors.desiredWeight ? (
              <p className="form-input-error">{formik.errors.desiredWeight}</p>
            ) : null}

            <div>
              <p className="radio-buttons-title">Група крові *</p>
              <div className="radio-buttons">
                <label
                  className="radio-buttons-label"
                  style={{
                    color: `${isLabelCheked.one ? '#FC842D' : '#9B9FAA'}`,
                    fontWeight: `${isLabelCheked.one ? '700' : '400'}`,
                  }}
                  onClick={() => onRadioClick('one')}
                >
                  <input
                    type="radio"
                    name="bloodType"
                    className="radio-buttons-input"
                    value="1"
                    checked={formik.values.bloodType === '1'}
                    onChange={formik.handleChange}
                  />
                  1
                </label>
                <label
                  className="radio-buttons-label"
                  style={{
                    color: `${isLabelCheked.two ? '#FC842D' : '#9B9FAA'}`,
                    fontWeight: `${isLabelCheked.two ? '700' : '400'}`,
                  }}
                  onClick={() => onRadioClick('two')}
                >
                  <input
                    type="radio"
                    name="bloodType"
                    className="radio-buttons-input"
                    value="2"
                    checked={formik.values.bloodType === '2'}
                    onChange={formik.handleChange}
                  />
                  2
                </label>
                <label
                  className="radio-buttons-label"
                  style={{
                    color: `${isLabelCheked.three ? '#FC842D' : '#9B9FAA'}`,
                    fontWeight: `${isLabelCheked.three ? '700' : '400'}`,
                  }}
                  onClick={() => onRadioClick('three')}
                >
                  <input
                    type="radio"
                    name="bloodType"
                    className="radio-buttons-input"
                    value="3"
                    checked={formik.values.bloodType === '3'}
                    onChange={formik.handleChange}
                  />
                  3
                </label>
                <label
                  className="radio-buttons-label"
                  style={{
                    color: `${isLabelCheked.four ? '#FC842D' : '#9B9FAA'}`,
                    fontWeight: `${isLabelCheked.four ? '700' : '400'}`,
                  }}
                  onClick={() => onRadioClick('four')}
                >
                  <input
                    type="radio"
                    name="bloodType"
                    className="radio-buttons-input"
                    value="4"
                    checked={formik.values.bloodType === '4'}
                    onChange={formik.handleChange}
                  />
                  4
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="button">
          <DailyButton type="submit">Почати худнути</DailyButton>
        </div>
      </form>
    </Section>
  );
};

DailyCaloriesForm.propTypes = {
  onFormSubmit: PropTypes.func,
};

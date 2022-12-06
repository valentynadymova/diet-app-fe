import PropTypes from 'prop-types';
import { Section } from './DailyCalorieIntake.Styled';
import { DailyButton } from '../DailyCaloriesForm/DailyButton.Styled';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/authorization/auth-selectors';

export const DailyCalorieIntake = ({ data, onClose }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const navigate = useNavigate();

  const onClick = () => {
    onClose();
    if (isLoggedIn) {
      navigate('/diary');
    } else {
      navigate('/registration');
    }
  };

  return (
    <Section>
      <h3 className="daily-calorie-title">
        Ваша рекомендована добова норма споживання калорій становить
      </h3>

      <div className="daily-calorie-box">
        <p>
          {data.calories}
          <span>ккал</span>
        </p>
      </div>

      <p className="daily-calorie-text">Продукти, які вам краще не їсти</p>

      <ul className="daily-calorie-list">
        {data.notAllowedProducts.map((product, index) => {
          if (index > 3) {
            return null;
          } else {
            return (
              <li key={product._id}>
                <span>{index + 1}.</span>
                <span>{product.title.ua}</span>
              </li>
            );
          }
        })}
      </ul>

      <div className="daily-calorie-button">
        <DailyButton onClick={onClick}>Почати худнути</DailyButton>
      </div>
    </Section>
  );
};

DailyCalorieIntake.propTypes = {
  data: PropTypes.object,
  onClose: PropTypes.func,
};

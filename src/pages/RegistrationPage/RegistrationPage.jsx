import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';
import { ImageStyled } from '../LoginPage/LoginPage.styled';
import { Container } from '../../components/container';

export const RegistrationPage = () => {
  return (
    <main>
      <ImageStyled />
      <Container>
        <RegistrationForm />
      </Container>
    </main>
  );
};

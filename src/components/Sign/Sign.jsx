import { Link, useLocation } from 'react-router-dom';
import './Sign.css'
import Logo from '../Logo/Logo';
import Form from '../Form/Form';

function Sign({children, title, buttonText, name, isFormValid, onSubmit}) {

  const {pathname} = useLocation();

  return (
    <main className="main">
      <section className="sign">
        <Logo />
        <h1 className="sign__title">
          {title}
        </h1>
        <Form buttonText={buttonText} name={name} isFormValid={isFormValid} onSubmit={onSubmit}>
          {children}
        </Form>
        {pathname === '/signup' ? 
          <>
          <p className="sign__text">
            Уже зарегистрированы?&nbsp;
            <Link to="/signin" className='sign__link'>
              Войти
            </Link>
          </p>
          </>
        :
        <>
          <p className="sign__text">
            Ещё не зарегистрированы?&nbsp;
            <Link to="/signup" className='sign__link'>
              Регистрация
            </Link>
          </p>
        </>
        }
      </section>
    </main>
  )
}

export default Sign;
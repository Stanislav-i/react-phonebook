import css from './HomePage.module.css';

export const HomePage = () => {
  return (
    <div className={css.homeContainer}>
      <h1>PHONEBOOK</h1>
      <h2>Welcome to your personal phonebook!</h2>
      <p>
        In order to use your phonebook please create your account ("Register"
        link) or log in ("Login" link) if you already have one.
      </p>
    </div>
  );
};

export default HomePage;

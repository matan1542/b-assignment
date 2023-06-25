import Navigation from '../Navigation';

import style from './style.module.scss';

const Header = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.btnContainer}>
          <button
            type='button'
          >
            <a title='Company logo' className={style.logo}>
              <img
                src='static/images/logos/logo.svg'
                alt='Company logo'
              />
            </a>
          </button>
        </div>
        <Navigation />
      </header>
    </>
  );
};

export default Header;

import Header from '../../section/Header';

import style from './style.module.scss';

const AppShell = ({ children }) => {
  return (
    <div className={style.appShellSection}>
      <Header />
      <section className={style.appSkelatonPageContainer}>
        <div className={style.pageShellContainer}>{children}</div>
      </section>
    </div>
  );
};

export const getLayout = (page) => <AppShell>{page}</AppShell>;

export default AppShell;
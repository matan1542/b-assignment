import { useRouter } from 'next/router';

import style from './style.module.scss';
import Link from 'next/link';

let navigation = [{ name: 'Home', href: '/' }];

function Navigation() {
  const router = useRouter();

  return (
    <>
      <nav className={style.navigation} aria-label='navbar navigation'>
        <div className={style.btnsContainer}>
          {navigation.map((item) => (
            <Link
              key={item.href}
              type='button'
              href={item.href}
              className={`${style.navBtn} ${
                item.href === router.pathname ? style.active : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navigation;

import { getLayout } from '@/components/layout/AppShell';
import BlueMailForm from '@/components/section/BlueMailForm';
import style from './style.module.scss';
import { useState } from 'react';
import ModalAlert from '@/components/section/ModalAlert';
import syntaxHighlight from '@/utils/syntexHiglight';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [payload, setPayload] = useState(null);

  const setAlert = (payload) => {
    console.log(payload);
    setIsOpen(true);
    setPayload(payload);
  };

  const onCloseOutSideClick = (ev) => {
   if (ev?.target.classList.contains('modal-overlay')) {
      setIsOpen(false);
    }
  };

  const onClose = ()=>{
    setIsOpen(false);
  }

  return (
    <>
      <main className={style['page-form-container']}>
        <BlueMailForm setAlert={setAlert} />
        {isOpen && (
          <div
            className={`${style['modal-page-container']} modal-overlay`}
            onClick={onCloseOutSideClick}
          >
            <ModalAlert onClose={onClose}>
              <div className={style['json-res-container']}>
                {syntaxHighlight(JSON.stringify(payload, null, '\t'))}
              </div>
            </ModalAlert>
          </div>
        )}
      </main>
    </>
  );
};

Home.getLayout = getLayout;

export default Home;

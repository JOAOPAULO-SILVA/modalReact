import style from "./Modal.module.css";

interface ModalProps {
  open: boolean;
  closeModal: () => void;
}

function Modal({ open, closeModal }: ModalProps) {
  return (
    <section className={open ? style.modalContainer : style.modalHidden}>
      <p className={style.title}>você tem certeza que deseja redefinir a senha?</p>
      <p className={style.subtitle}>Alerta: Essa ação é irreversivel</p>
      <section className={style.btnContainer}>
          <button onClick={closeModal} className={style.btnDeny}>
            Voltar
          </button>
          <button onClick={closeModal} className={style.btnConfirm}>
            Confirmar
          </button>
      </section>
    </section>
  );
}
export default Modal;

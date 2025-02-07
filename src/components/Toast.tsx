import style from "./Toast.module.css";
interface ToastProps {
  mensagem: string;
  show: boolean;
  closeToaster: () => void;
}

function Message({ mensagem, show, closeToaster }: ToastProps) {
  if (show) {
    setTimeout(closeToaster, 2500);
    return (
      <section className={style.toasterContainer}>
        <p>{mensagem}</p>
        <button onClick={()  => closeToaster()} className={style.toasterButton}>
          X
        </button>
      </section>
    );
  }
}
export default Message;

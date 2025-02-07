import style from "./Toast.module.css";
interface ToastProps {
  mensagem: string;
  show: boolean;
  closeToaster: () => void;
  toastMode: "success" | "error" | "alert";
}

function Message({
  mensagem,
  show,
  closeToaster,
  toastMode,
}: ToastProps) {
  if (show) {
    setTimeout(closeToaster, 2500);

    const mode =
      toastMode == "error"
        ? style.errorToast
        : toastMode == "alert"
        ? style.alertToast
        : style.succesToast;
    return (
      <section className={style.succesToast}>
        <p>{mensagem}</p>
        <button onClick={() => closeToaster()} className={style.toasterButton}>
          X
        </button>
      </section>
    );
  }
}
export default Message;

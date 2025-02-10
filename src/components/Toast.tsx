// import { useEffect, useRef } from "react";
import style from "./Toast.module.css";
interface ToastProps {
  mensagem: string;
  closeToaster: () => void;
  toastMode: "success" | "error" | "alert";
}

function Message({ mensagem, closeToaster, toastMode }: ToastProps) {
  const mode =
    toastMode == "error"
      ? style.errorToast
      : toastMode == "alert"
      ? style.alertToast
      : style.successToast;
  return (
    <section className={`${mode} ${style.toasterContainer}`}>
      <p>{mensagem}</p>
      <button onClick={() => closeToaster()} className={style.toastButton}>
        X
      </button>
    </section>
  );
}
export default Message;

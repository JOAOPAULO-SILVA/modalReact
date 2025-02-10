import { useState, useRef } from "react";
import style from "./App.module.css";
import Modal from "./components/Modal.tsx";
import Toast from "./components/Toast.tsx";
function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [showToaster, setShowToaster] = useState<boolean>(false);
  const [mensagem, setMensagem] = useState<string>("")
  const [toastMode, setToastMode] = useState<"success" | "error" | "alert">("alert")
  const timeoutRef = useRef<number | null>(null);
  function closeModal() {
    setOpen(false);
  }
  function closeToaster() {
    setShowToaster(false);
  }
  function openToast(modoToast:"success" | "error" | "alert", mensagem:string) {
    if (timeoutRef.current !== null) {
          clearTimeout(timeoutRef.current);
        }
    
    if (showToaster){
      setShowToaster(false)
    }
    setShowToaster(true)
    setMensagem(mensagem)
    setToastMode(modoToast)
    setTimeout(closeToaster, 2500);
    timeoutRef.current = setTimeout(closeToaster, 2500);
  }
  return (
    <>
      <div className={style.container}>
        <button className={style.btnActivate} onClick={() => openToast("error","aahh xibiuzão grandão")}>
          Open modal
        </button>
        <Modal open={open} closeModal={closeModal} />
        {showToaster && <Toast mensagem={mensagem} toastMode={toastMode} closeToaster={closeToaster}/>}
      </div>
    </>
  );
}

export default App;

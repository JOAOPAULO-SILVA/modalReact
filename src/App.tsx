import { useState, useRef } from "react";
import style from "./App.module.css";
import Modal from "./components/Modal.tsx";
import Toast from "./components/Toast.tsx";
type Toast = {
  id: number; // Identificador único para cada toast
  mensagem: string;
  modo: "success" | "error" | "alert";
};

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [showToaster, setShowToaster] = useState<boolean>(false);
  const [mensagem, setMensagem] = useState<string>("");
  const [toastMode, setToastMode] = useState<"success" | "error" | "alert">(
    "alert"
  );
  const timeoutRef = useRef<number | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);
  function closeModal() {
    setOpen(false);
  }
  function closeToaster() {
    setShowToaster(false);
  }
  function openToast(
    modoToast: "success" | "error" | "alert",
    mensagem: string
  ) {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    const openToast = (
      modo: "success" | "error" | "alert",
      mensagem: string
    ) => {
      // Cria um novo toast com um ID único
      const novoToast: Toast = {
        id: Date.now(), // Usa o timestamp como ID único
        mensagem,
        modo,
      };
      // Adiciona o novo toast ao início da lista (para que ele apareça por cima)
      setToasts((prevToasts) => [novoToast, ...prevToasts]);
    };

    const closeToast = (id: number) => {
      // Remove o toast com o ID especificado
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    };

    if (showToaster) {
      setShowToaster(false);
    }
    setShowToaster(true);
    setMensagem(mensagem);
    setToastMode(modoToast);
    setTimeout(closeToaster, 5000);
    timeoutRef.current = setTimeout(closeToaster, 5000);
  }
  return (
    <>
      <div className={style.container}>
        <button
          className={style.btnActivate}
          onClick={() => openToast("alert", "CEGA ELES, VOVÓ")}
        >
          Alert
        </button>
        <button
          className={style.btnActivate}
          onClick={() => openToast("success", "CEGA ELES, VOVÓ")}
        >
          Success
        </button>
        <button
          className={style.btnActivate}
          onClick={() => openToast("error", "CEGA ELES, VOVÓ")}
        >
          Error
        </button>
        <Modal open={open} closeModal={closeModal} />
        {showToaster && (
          <Toast
            mensagem={mensagem}
            toastMode={toastMode}
            closeToaster={closeToaster}
          />
        )}
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import style from "./App.module.css";
import Modal from "./components/Modal.tsx";
import Toast from "./components/Toast.tsx";
function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [showToaster, setShowToaster] = useState<boolean>(false);
  function closeModal() {
    setOpen(false);
  }
  function closeToaster() {
    setShowToaster(false);
  }
  return (
    <>
      <div className={style.container}>
        <button
          className={style.btnActivate}
          onClick={() => setShowToaster(true)}
        >
          Open modal
        </button>
        <Modal open={open} closeModal={closeModal} />
        <Toast
          mensagem="ola"
          closeToaster={closeToaster}
          show={showToaster}
        />
      </div>
    </>
  );
}

export default App;

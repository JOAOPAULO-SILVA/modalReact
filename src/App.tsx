import { useState } from "react";
import style from"./App.module.css"
import Modal from "./components/Modal.tsx";
function App() {
  const [open, setOpen] = useState<boolean>(false);
  function closeModal() {
    setOpen(false);
  }
  return (
    <>
      <div className={style.container}>
        <button className={ style.btnActivate} onClick={() => setOpen(true)}>Open modal</button>
        <Modal open={open} closeModal={closeModal} />
      
      </div>
    </>
  );
}

export default App;

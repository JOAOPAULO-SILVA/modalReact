import { useState } from "react";
import "./App.css";
import { Modal } from "@mui/material";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <button onClick={() => setOpen(true)}>Open modal</button>
        <Modal className="flex justify-center items-center"
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <section className="bg-slate-50 text-black p-6 text-center rounded-md space-y-4">
            <p className="text-3xl">
              você tem certeza que deseja redefinir a senha?
            </p>
            <p id="modal-modal-description">
              Essa ação é irreversivel
            </p>
            <button className="bg-green-300" onClick={() => setOpen(false)}>sim</button>
            
          </section>
        </Modal>
      </div>
    </>
  );
}

export default App;

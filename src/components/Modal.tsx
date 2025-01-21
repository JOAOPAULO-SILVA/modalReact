interface ModalProps {
  open: boolean;
  closeModal: () => void;
}

function Modal({ open, closeModal }: ModalProps) {
  return (
    <section
      className={`bg-blue-50 absolute p-6 shadow-sm m-2 ${
        open ? "block" : "hidden"
      } transform-transition duration-700 ease-in-out ${
        open ? "translate-y-0" : "translate-y-2"
      }  rounded-md text-black`}
    >
      <p className="text-3xl">você tem certeza que deseja redefinir a senha?</p>
      <p className="text-slate-500">Alerta: Essa ação é irreversivel</p>
      <section className="flex justify-between">
        <button
          onClick={closeModal}
          className="bg-transparent border-hidden focus:outline-none "
        >
          Voltar
        </button>
        <button onClick={closeModal} className="bg-slate-500 text-white">
          Confirmar
        </button>
      </section>
    </section>
  );
}
export default Modal;

import { ModalType } from "@/types/modal.type";

const Modal = ({ isOpen, onClose, children }: ModalType) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-10 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex min-h-screen items-start justify-center px-4 pb-20 pt-4 text-center md:block md:items-end md:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all md:my-8 md:w-full md:max-w-lg md:align-middle">
          <div className="bg-white px-4 pb-4 pt-5 md:p-6">{children}</div>
          <div className="bg-gray-50 px-4 py-3 md:flex md:flex-row-reverse md:px-6">
            <button
              onClick={onClose}
              className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 md:ml-3 md:w-auto md:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

// "use client";

// import { useEffect } from "react";
// import { createPortal } from "react-dom";
// import type { ReactNode } from "react";

// interface ModalProps {
//   onClose: () => void;
//   children: ReactNode;
// }

// export default function Modal({ onClose, children }: ModalProps) {
//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, []);

//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") onClose();
//     };
//     document.addEventListener("keydown", handleKeyDown);
//     return () => document.removeEventListener("keydown", handleKeyDown);
//   }, [onClose]);

//   const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (e.target === e.currentTarget) onClose();
//   };

//   return createPortal(
//     <div
//       className={css.backdrop}
//       role="dialog"
//       aria-modal="true"
//       onClick={handleBackdropClick}
//     >
//       <div className={css.modal}>{children}</div>
//     </div>,
//     document.body,
//   );
// }
"use client";
import css from "./Modal.module.css";
import { useRouter } from "next/router";
type Props = {
  children: React.ReactNode;
  onClose?: () => void;
};
const Modal = ({ children }: Props) => {
  const router = useRouter();
  const handleClose = () => {
    router.back();
  };
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        {children}
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};
export default Modal;

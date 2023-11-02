import React from "react";

import "./style/modal.scss";

type WrapperProps = {
  children: React.ReactNode;
};

const Modal = ({ children }: WrapperProps) => {
  const temp = [];

  return (
    <div className="modal-backgound">
      <div className="modal-box">{children}</div>
    </div>
  );
};

export default Modal;

import React from "react";

import { useModalContext } from "../../providers/modal.provider";

import InnerModal from "../inner-modal/inner-modal";
import Modal from "../modal/modal";

const ModalContainer = () => {
  const {
    state: { showModal }
  } = useModalContext();

  return (
    <div>
      {showModal && (
        <Modal>
          <InnerModal />
        </Modal>
      )}
    </div>
  );
};

export default ModalContainer;

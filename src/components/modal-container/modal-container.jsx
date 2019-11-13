import React from "react";

import { useAppContext } from "../../providers/app.provider";

import InnerModal from "../inner-modal/inner-modal";
import Modal from "../modal/modal";

const ModalContainer = () => {
  const {
    state: { showModal }
  } = useAppContext();

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

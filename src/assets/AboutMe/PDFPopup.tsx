import React from "react";
import Modal from "react-modal";
import pdfUrl from "../pdf/Jaspal-Singh-cv-2.pdf";
interface PDFPopupProps {
  isOpen: boolean;
  closeModal: () => void;
  pdfUrl: string;
}

const PDFPopup: React.FC<PDFPopupProps> = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="PDF Viewer"
    >
      <button onClick={closeModal}>Close PDF</button>
      <iframe title="PDF Viewer" src={pdfUrl} width="100%" height="100%" />
    </Modal>
  );
};

export default PDFPopup;

import { useState } from "react";

const useModal = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(prev => !prev);
    };

    return{showModal, openModal, setShowModal}
}

export default useModal;
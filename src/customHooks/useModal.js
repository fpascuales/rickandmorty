import { useState } from 'react'

export const useModal = () => {
  
    const [isOpen, setIsOpen] = useState(false);
    const [residentData, setResidentData] = useState(null);

    const onOpen = (resident) => {
        console.log(resident);
        setIsOpen(true);
        setResidentData(resident);
    }
  
    const onClose = () => {
        setIsOpen(false);
        setResidentData(null);
    }

    return {
        isOpen,
        residentData,
        onOpen,
        onClose
    }
}

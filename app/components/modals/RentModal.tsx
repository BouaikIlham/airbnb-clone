'use client'

import Modal from "./Modal";
import UseRentalModal from "@/app/hooks/useRentModal";
const RentModal = () => {
    const rentModal = UseRentalModal()
    return ( 
        <Modal 
            isOpen={rentModal.isOpen}
            onClose={rentModal.onClose}
            onSubmit={rentModal.onClose}
            actionLabel="Submit"
            title="Airbnb your home!"

        />
     );
}
 
export default RentModal;
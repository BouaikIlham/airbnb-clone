'use client'

import { useState } from "react";

interface ModalProps {
   isOpen?: boolean;
   onClose: () => void;
   onSubmit: () => void;
   title?: string;
   body?: React.ReactElement;
   footer?: React.ReactElement;
   actionLabel: string;
   disabled?: boolean;
   secondaryAction?: () => void;
   secondaryLabel?: string;

}
const Modal: React.FC<ModalProps> = ({
   isOpen,
   onClose,
   onSubmit,
   title,
   body,
   footer,
   actionLabel,
   disabled,
   secondaryAction,
   secondaryLabel, 
}) => {
   const [showModal, setShowModal] = useState(false)
    return ( 
        <>
        <div className="flex 
                        justify-center
                        items-center
                        overflow-x-hidden
                        overflow-y-auto
                        fixed
                        inset-0
                        z-20
                        outline-none
                        focus:outline-none
                        bg-neutral-800/70">
            <div className="relative
                            w-full
                            md:w-4/6
                            lg:w-3/6
                            xl:w-2/5
                            my-6
                            mx-auto
                            h-full
                            lg:h-auto
                            md:h-auto">
                {/* Content                */}
                <div className={`translate duration-300 h-full`}>

                </div>
             </div>
        </div>
        </>
     );
}
 
export default Modal
;
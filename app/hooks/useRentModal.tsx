import {create} from 'zustand'

interface UseRentalStore {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

const UseRentalModal = create<UseRentalStore>((set) =>  ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))

export default UseRentalModal;
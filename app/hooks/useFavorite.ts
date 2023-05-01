import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { Toast, toast } from "react-hot-toast";

import { User } from "@prisma/client";
import useLoginModal from "./UseLoginModals";
import { NumericLiteral } from "typescript";
import { useAmp } from "next/amp";

interface IUseFavorite {
  listingId: string;
  currentUser?: User | null;
}

const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId])

  const togglefavorite = useCallback(async (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.stopPropagation();

    if(!currentUser ) {
        return loginModal.onOpen()
    }

    try {
        let request;

        if (hasFavorited) {
            request = () => axios.delete(`/api/favorites/${listingId}`)
        } else {
            request = () => axios.post(`/api/favorites/${listingId}`)
        }
        await request();
        router.refresh();
        toast.success('Success');
    } catch (error) {
        toast.error('Somethinf went wrong')
    }
  }, [currentUser,hasFavorited,listingId, loginModal,router])

  return {
        hasFavorited,
        togglefavorite
    }
};


export default useFavorite
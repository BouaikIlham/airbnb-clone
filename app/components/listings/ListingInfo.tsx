'use client'

import { SafeUser } from "@/app/types";
import { IconType } from "react-icons";

interface ListingInfoProps {
    user: SafeUser
    description: string
    roomCount: number
    guestCount: number
    bathroomCount: number
    category:  {
        icon: IconType,
        label: string,
        description: string
    } | undefined
    locationValue: string
}

const ListingInfo: React.FC<ListingInfoProps> = ({
    user,
    description,
    roomCount,
    guestCount,
    bathroomCount,
    category,
    locationValue
}) => {
    return (
        <div>
            hello
        </div>
    );
}
 
export default ListingInfo;
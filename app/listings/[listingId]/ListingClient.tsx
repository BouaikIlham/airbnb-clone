'use client'

import {Reservation } from "@prisma/client";
import {SafeListing, SafeUser} from "@/app/types"
import { categories } from "@/app/components/navbar/Categories";
import { useMemo } from "react";
import Container from "@/app/components/Container";
interface ListingClientProps {
  reservation?: Reservation[];
  listing: SafeListing & {
    user: SafeUser
  };
  currentUser?: SafeUser | null
}

const ListingClient: React.FC<ListingClientProps> = ({
    listing,
    currentUser
}) => {
  const category = useMemo(() => {
    return categories.find((item) => 
    item.label === listing.category)
  }, [listing.category])

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          {listing.title}
        </div>
      </div>
    </Container>
  )
};

export default ListingClient;

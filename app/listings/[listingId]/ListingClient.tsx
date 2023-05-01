import {Reservation } from "@prisma/client";
import {SafeListing, SafeUser} from "@/app/types"
interface ListingClientProps {
  reservation?: Reservation;
  listing: SafeListing & {
    user: SafeUser
  };
  currentUser?: SafeUser | null
}

const ListingClient: React.FC<ListingClientProps> = ({
    listing,
    currentUser
}) => {
  return <div>hello</div>;
};

export default ListingClient;

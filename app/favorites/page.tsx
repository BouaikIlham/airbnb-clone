import getCurrentUser from "../actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import getFavoritesListings from "../actions/getFavoriteListings";
import FavoritesClient from "./FavoritesClient";
const ListingPage = async () => {
    const currentUser = await getCurrentUser();
    const listings = await getFavoritesListings()
  
    if(!currentUser) {
        return (
            <ClientOnly>
                <EmptyState
                 title="Unauthorized"
                 subtitle="Please Login"
                />
            </ClientOnly>
        )
    }
    if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                 title="No favorite found"
                 subtitle="Looks like you have no favorites on your properties"
                />
            </ClientOnly>
        )
    }
    
    return (
        <ClientOnly>
            <FavoritesClient
                listings={listings}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default ListingPage;
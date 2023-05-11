import getCurrentUser from "../actions/getCurrentUser";
import getReservation from "../actions/getReservations";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import ReservationClient from "./ReservationClient";

const ReservationPage = async () => {
    const currentUser = await getCurrentUser();

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

    const reservations = await getReservation({
        authorId: currentUser.id
    })

    if (reservations.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                 title="No reservation found"
                 subtitle="Looks like you have no reservation on your properties"
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <ReservationClient
              reservations={reservations}
              currentUser={currentUser}
             />
        </ClientOnly>
    )
}

export default ReservationPage;
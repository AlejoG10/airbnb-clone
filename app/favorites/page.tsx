import getCurrentUser from "@/actions/getCurrentUser";
import getFavoriteListings from "@/actions/getFavoriteListings";
import EmptyState from "@/components/shared/EmptyState";
import FavoriteClient from "./FavoriteClient";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const currentUser = await getCurrentUser();
  const favorites = await getFavoriteListings();

  if (!favorites) {
    return (
      <EmptyState
        title="No favorites found"
        subtitle="Looks like you have no favorite listings."
      />
    );
  }

  return <FavoriteClient currentUser={currentUser} favorites={favorites} />;
};

export default ListingPage;

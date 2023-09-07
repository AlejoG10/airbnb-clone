"use client";

import { Listing, User } from "@prisma/client";
import Container from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import ListingCard from "@/components/Listings/ListingCard";

interface FavoriteClientProps {
  favorites: Listing[];
  currentUser?: User | null;
}

const FavoriteClient: React.FC<FavoriteClientProps> = ({
  favorites,
  currentUser,
}) => {
  return (
    <Container>
      <Heading
        title="Favorites"
        subtitle="List of places you have favorited!"
      />
      <div
        className="
            mt-10
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8"
      >
        {favorites.map((fav) => (
          <ListingCard
            key={fav.id}
            data={fav}
            currentUser={currentUser || null}
          />
        ))}
      </div>
    </Container>
  );
};

export default FavoriteClient;

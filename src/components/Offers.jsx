import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Offer from "./Offer";

export const Offers = () => {
  const [offersData, setOffersData] = useState([
    {
      id: 1,
      title: "Modern Luxury Villa",
      price: "1,200,000",
      image: "https://via.placeholder.com/500",
      description: "A beautiful villa located in the heart of downtown.",
      offers: [
        {
          id: 1,
          offerAmount: 1_100_000,
          offerMessage: "I love this villa, I can afford this amount.",
        },
        {
          id: 2,
          offerAmount: 1_150_000,
          offerMessage: "This is my final offer.",
        },
      ],
    },
    {
      id: 2,
      title: "Modern Apartment with Sea View",
      price: "850,000",
      image: "https://via.placeholder.com/500",
      description: "Enjoy stunning sea views from this modern apartment.",
      offers: [
        {
          id: 3,
          offerAmount: 800_000,
          offerMessage: "Can you consider this price?",
        },
      ],
    },
  ]);

  const handleAcceptOffer = (offerId, propertyId) => {
    setOffersData((prevOffers) =>
      prevOffers.map((property) =>
        property.id === propertyId
          ? {
              ...property,
              offers: property.offers.map((offer) =>
                offer.id === offerId
                  ? { ...offer, status: "accepted" }
                  : offer
              ),
            }
          : property
      )
    );
  };

  const handleRejectOffer = (offerId, propertyId) => {
    setOffersData((prevOffers) =>
      prevOffers.map((property) =>
        property.id === propertyId
          ? {
              ...property,
              offers: property.offers.map((offer) =>
                offer.id === offerId
                  ? { ...offer, status: "rejected" }
                  : offer
              ),
            }
          : property
      )
    );
  };

  return (
    <div className="mb-8">
      <div className="flex gap-5">
        <Sidebar />
        <div className="w-full md:w-3/4">
          <h2 className="text-2xl font-semibold mb-6">My Offers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {offersData.map((property) => (
              <Offer
                key={property.id}
                property={property}
                offers={property.offers.filter(
                  (offer) => offer.status !== "accepted" && offer.status !== "rejected"
                )}
                onAcceptOffer={handleAcceptOffer}
                onRejectOffer={handleRejectOffer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

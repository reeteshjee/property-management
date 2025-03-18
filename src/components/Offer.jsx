import React from 'react';

const Offer = ({ property, offers, onAcceptOffer, onRejectOffer }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src="https://photos.zillowstatic.com/fp/e1ad17b30ff057a60f24e1b45b718401-p_e.webp" alt="Modern Villa"/>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{property.title}</h3>
        <p className="text-gray-500 text-sm mb-4">{property.description}</p>
        <div className="text-lg font-bold text-gray-900">{`$${property.price}`}</div>

        <h4 className="text-xl font-semibold mt-4">Offers</h4>

        {offers.length > 0 ? (
          <div className="mt-4">
            {offers.map((offer, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
                <p><strong>Offer Amount:</strong> ${offer.offerAmount}</p>
                <p><strong>Message:</strong> {offer.offerMessage}</p>

                {/* Accept or Reject Offer */}
                <div className="mt-4 flex gap-4">
                  <button
                    onClick={() => onAcceptOffer(offer.id, property.id)}
                    className="bg-green-500 text-white py-2 px-4 rounded-lg"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => onRejectOffer(offer.id, property.id)}
                    className="bg-red-500 text-white py-2 px-4 rounded-lg"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No offers yet.</p>
        )}
      </div>
    </div>
  );
};

export default Offer;

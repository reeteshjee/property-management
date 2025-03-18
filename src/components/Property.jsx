import Status from "./Status";

export default function Property() {
  return (
    <>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative">
          <img
            src="https://photos.zillowstatic.com/fp/e1ad17b30ff057a60f24e1b45b718401-p_e.webp"
            alt="Modern Villa"
            className="property-image w-full h-48 object-cover"
          />
          <button
            title="Save"
            className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow hover:bg-gray-100"
          >
            <i className="fa-regular fa-heart text-gray-600"></i>
          </button>
        </div>
        <div className="p-4">
          <div className="mb-2">
            <Status status={"Available"} />
          </div>

          <div className="flex justify-between mb-1">
            <span className="text-blue-600 font-bold text-xl">$1,250,000</span>
          </div>
          <h3 className="font-semibold text-lg mb-1">Modern Luxury Villa</h3>
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <i className="fa-solid fa-location-dot mr-1"></i>
            <span>Beverly Hills, CA 90210</span>
          </div>
          <div className="flex justify-between mb-4 text-sm">
            <div className="flex items-center">
              <i className="fa-solid fa-bed mr-1 text-gray-500"></i>
              <span>5 beds</span>
            </div>
            <div className="flex items-center">
              <i className="fa-solid fa-bath mr-1 text-gray-500"></i>
              <span>4 baths</span>
            </div>
            <div className="flex items-center">
              <i className="fa-solid fa-ruler-combined mr-1 text-gray-500"></i>
              <span>3,200 sq ft</span>
            </div>
          </div>
          <div className="border-t pt-3 flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-sm font-medium">Ritesh Ghimire</span>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

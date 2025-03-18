// AddPropertyForm.js

import { useEffect, useState } from "react";

export default function AddPropertyForm({ onAddProperty, onClose }) {
  const [newProperty, setNewProperty] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    price: "",
    description: "",
    bedrooms: 0,
    bathrooms: 0,
    totalArea: "",
    features: "",
    parking: "no", 
    parkingCars: 0, 
    fixes: "",
    yearBuilt: "",
    photos: [],
  });
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProperty((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    setNewProperty((prev) => ({
      ...prev,
      photos: Array.from(files),
    }));
  };

  const handleSubmit = () => {
    if (
      newProperty.name &&
      newProperty.street &&
      newProperty.city &&
      newProperty.state &&
      newProperty.zipcode &&
      newProperty.price
    ) {
      onAddProperty(newProperty);
      onClose(); 
      setNewProperty({
        name: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        price: "",
        description: "",
        bedrooms: 0,
        bathrooms: 0,
        totalArea: "",
        features: "",
        parking: "no",
        parkingCars: 0,
        fixes: "",
        yearBuilt: "",
        photos: [],
      });
    }
  };
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-hidden"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-6 rounded-lg w-11/12 md:w-3/4 lg:w-2/3 max-w-screen-lg max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center mb-6">
            <div></div>
            <h2 className="text-2xl text-center">Add Property</h2>
            <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
                ×
            </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
           
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Property Name 
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter property name"
                value={newProperty.name}
                onChange={handleChange}
                className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="street"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Street Address 
              </label>
              <input
                type="text"
                id="street"
                name="street"
                placeholder="Enter street address"
                value={newProperty.street}
                onChange={handleChange}
                className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                value={newProperty.city}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label
                htmlFor="state"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="State"
                value={newProperty.state}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label
                htmlFor="zipcode"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Zipcode
              </label>
              <input
                type="number"
                id="zipcode"
                name="zipcode"
                placeholder="Zipcode"
                value={newProperty.zipcode}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                placeholder="Price"
                value={newProperty.price}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label
                htmlFor="bedrooms"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Bedrooms
              </label>
              <input
                type="number"
                id="bedrooms"
                name="bedrooms"
                placeholder="Bedrooms"
                value={newProperty.bedrooms}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label
                htmlFor="bathrooms"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Bathrooms
              </label>
              <input
                type="number"
                id="bathrooms"
                name="bathrooms"
                placeholder="Bathrooms"
                value={newProperty.bathrooms}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label
                htmlFor="totalArea"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Total Area (sqft)
              </label>
              <input
                type="number"
                id="totalArea"
                name="totalArea"
                placeholder="Total Area (sqft)"
                value={newProperty.totalArea}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label
                htmlFor="yearBuilt"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Year Built
              </label>
              <input
                type="number"
                id="yearBuilt"
                name="yearBuilt"
                placeholder="Year Built"
                value={newProperty.yearBuilt}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label
                htmlFor="features"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Features (e.g., Dining Area, etc.)
              </label>
              <input
                type="text"
                id="features"
                name="features"
                placeholder="Features"
                value={newProperty.features}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label
                htmlFor="fixes"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Fixes/Repairs
              </label>
              <input
                type="text"
                id="fixes"
                name="fixes"
                placeholder="Fixes/Repairs"
                value={newProperty.fixes}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          <div className="flex gap-4 mb-4">
            <div className="w-full">
              <label
                htmlFor="parking"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Parking
              </label>
              <select
                id="parking"
                name="parking"
                value={newProperty.parking}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="no">No Parking</option>
                <option value="yes">Yes, with parking</option>
              </select>
            </div>

            {newProperty.parking === "yes" && (
              <div className="w-full">
                <label
                  htmlFor="parkingCars"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Number of Cars
                </label>
                <input
                  type="number"
                  id="parkingCars"
                  name="parkingCars"
                  placeholder="Number of Cars"
                  value={newProperty.parkingCars}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="photos"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Photos
            </label>
            <input
              type="file"
              id="photos"
              name="photos"
              multiple
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded"
          >
            Close
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-6 py-2 rounded"
          >
            Add Property
          </button>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import Property from "./Property";
import AddPropertyForm from "./AddPropertyForm";
import Sidebar from "./Sidebar";

export default function Profile() {
  const [showAddForm, setShowAddForm] = useState(false);
  var userActive = true;
  const toggleAddForm = () => {
    setShowAddForm((prev) => !prev);
  };
  const addProperty = (property) => {
    //Add property here
    console.log(property);
  };
  return (
    <div className="mb-8">
      <div className="flex gap-5">
        {/* <div className="w-full md:w-1/4">
                    <div className="p-4 pb-0">
                        <div className="flex align-center justify-start pb-4">
                            <div class="mr-4 flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white text-xl font-bold">
                                RG
                            </div>
                            <div className="">
                                <div className="text-xl">Ritesh Ghimire</div>
                                <small>ritesh@ritesh.com</small>
                            </div>
                        </div>
                    </div>
                    <ul className="p-0 border-t border-gray-400">
                        <li className="cursor-pointer p-4 hover:bg-gray-200">
                            <Link to="/profile">My Properties</Link>
                        </li>
                        <li className="cursor-pointer p-4 hover:bg-gray-200">
                            <Link to="/profile">Saved Properties</Link>
                        </li>
                        <li className="cursor-pointer p-4 hover:bg-gray-200">
                            <Link to="/profile">My Offers</Link>
                        </li>
                        <li className="cursor-pointer p-4 hover:bg-gray-200">
                            <Link to="/profile">Logout</Link>
                        </li>
                    </ul>


                </div> */}
        <Sidebar />
        <div className="w-full md:w-3/4">
          {userActive ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
              {[...Array(10)].map((_, index) => (
                <Property key={index} />
              ))}
            </div>
          ) : (
            <div className="bg-red-100 border border-red-500 text-red-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Error</h3>
              <p>Your account has been deactivated. Please contact admin.</p>
            </div>
          )}
        </div>
      </div>
      {userActive && (
        <button
          onClick={toggleAddForm}
          className="fixed bottom-20 right-5 bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg"
        >
          + Add Property
        </button>
      )}

      {showAddForm && (
        <AddPropertyForm onAddProperty={addProperty} onClose={toggleAddForm} />
      )}
    </div>
  );
}

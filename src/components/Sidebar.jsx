import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-full md:w-1/4">
      <div className="p-4 pb-0">
        <div className="flex align-center justify-start pb-4">
          <div className="mr-4 flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white text-xl font-bold">
            RG
          </div>
          <div>
            <div className="text-xl">Ritesh Ghimire</div>
            <small>ritesh@ritesh.com</small>
          </div>
        </div>
      </div>
      <ul className="p-0 border-t border-gray-400">
        <Link to="/profile">
          <li className="cursor-pointer p-4 hover:bg-gray-200">
            My Properties
          </li>
        </Link>
        {/* <Link to="/saved-properties"> */}
        <Link to="/profile">
          <li className="cursor-pointer p-4 hover:bg-gray-200">
            Saved Properties
          </li>
        </Link>
        <Link to="/offers">
          <li className="cursor-pointer p-4 hover:bg-gray-200">My Offers</li>
        </Link>
        <Link to="/logout">
          <li className="cursor-pointer p-4 hover:bg-gray-200">Logout</li>
        </Link>
      </ul>
    </div>
  );
}

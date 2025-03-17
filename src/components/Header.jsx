import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <nav className="bg-gray-800 border-b border-gray-200 fixed w-full z-30">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3">
                        <span className="text-2xl font-bold text-blue-600">
                            Premier
                            <span className="text-white">Property</span>
                        </span>
                    </Link>
                    <div className="flex md:order-2">
                        <Link to="/profile"
                            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3">

                            Profile</Link>
                        <Link
                            to="/login" className="text-white border border-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign
                            In</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
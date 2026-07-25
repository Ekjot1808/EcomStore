import { Link } from "react-router";
import { useAuth } from "../context/auth";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {

    const { currUser, setCurrUser } = useAuth();

    function logout() {
        localStorage.removeItem('currUser');
        setCurrUser("")
    }

    return (
        <div className="bg-white">
            <div className="h-8 bg-purple-950 text-white px-4">
                <div className=" max-w-6xl mx-auto px-4">
                    {
                        currUser ? (
                            <div className="flex justify-between items-center">
                                <p className="flex gap-2 items-center">{currUser.email} <FaUserCircle /></p>
                                <button className="underline" onClick={logout}>Logout</button>
                            </div>
                        ) : (
                            <div className="flex justify-end items-center">
                                <Link to="/auth" className="text-sm underline">
                                    Login
                                </Link>
                            </div>
                        )
                    }
                </div>

            </div>
            <div className="shadow-sm">
                <div className="flex justify-between items-center h-16 px-4 max-w-6xl mx-auto">
                    <div>
                        <Link to="/" className="text-lg font-semibold text-purple-950 flex items-center"><img width={50} src="/favicon.svg" alt="logo" />EcomStore</Link>
                    </div>
                    <div className="flex gap-4">
                        <Link to="/" className="text-gray-500 hover:text-black transition-all">Home</Link>
                        <Link to="/checkout" className="text-gray-500 hover:text-black transition-all">Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
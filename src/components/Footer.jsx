import { Link } from "react-router";


function Footer() {
    return (
        <div className="bg-purple-950">
            <div className="max-w-6xl px-4 mx-auto md:flex md:flex-row md:justify-between md:items-center h-20 flex flex-col justify-center items-center">
                <div className="">
                    <p className="text-gray-200">All &copy; Copyrights are Resevered by Ekjot Singh | <span className="font-bold">EcomStore</span></p>
                </div>
                <div>
                    <Link to="/" className="text-gray-300 underline">View code on GitHub</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;
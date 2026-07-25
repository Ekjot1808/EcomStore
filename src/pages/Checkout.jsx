import { useCart } from "../context/cart";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";

function Checkout() {

    const { cart, AddToCart, SubToCart, RemoveFromCart } = useCart();

    let sum = 0;

    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div>
            <div className="md:flex md:justify-between md:gap-4 max-w-6xl mx-auto p-4 py-2">
                <div className="grid grid-col-1 flex-2 bg-white px-4 rounded-md">
                    <h1 className="px-2 font-semibold text-xl my-4">Order Summary</h1>
                    {
                        cart?.map((item) => (
                            <div key={item.id} className="flex p-2 gap-2 justify-between border-b border-gray-300 my-2">
                                <div className="flex gap-2">
                                    <div>
                                        <div><img width={100} src={item.image} alt={item.name} /></div>
                                    </div>
                                    <div>
                                        <div className="font-semibold">{item.name}</div>
                                        <div className="text-gray-600 text-sm">${item.price} each</div>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-gray-700">
                                        <div className="flex items-center gap-2">
                                            <button onClick={() => SubToCart(item)}><CiSquareMinus className="text-3xl" /></button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => AddToCart(item)}><CiSquarePlus className="text-3xl" /></button>
                                        </div>
                                        <div className="font-bold flex justify-end">${(item.quantity * item.price).toFixed(2)}</div>
                                        <div 
                                        className="flex justify-end"><button className="bg-gray-600 text-white p-1 px-2 text-sm font-bold rounded-md cursor-pointer"
                                        onClick={() => RemoveFromCart(item)}>Remove</button></div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="flex-1 shadow-sm bg-white space-y-4 p-4 h-52 rounded-md mt-4 md:mt-0">
                    <div className="text-lg font-semibold">Checkout</div>
                    <div className="text-lg font-bold">Total Bill: <span className="font-bold text-blue-600">${totalPrice.toFixed(2)}</span></div>
                    <div>
                        <button className="bg-purple-700 text-white p-4 font-bold rounded-lg hover:bg-purple-700/90 cursor-pointer">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;
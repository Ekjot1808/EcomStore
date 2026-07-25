import { Link } from "react-router";
import { useCart } from "../context/cart";
import { products } from "../data/products";

function Card(props) {

    const {AddToCart} = useCart();

    const product = products.find((product) => product.id === props.id);

    return (
        <div className="shadow-sm max-w-80 pb-2 rounded-2xl overflow-hidden">
            <div>
                <div className="overflow-hidden w-full h-48">
                    <Link to={`/products/${props.id}`}><img className="object-contain" src={props.image} alt={props.name} /></Link>
                </div>
                <div className="space-y-4 p-2">
                    <div className="space-y-1">
                        <div className="text-lg font-semibold">{props.name}</div>
                        <p className="text-blue-600 font-bold">${props.price}</p>
                    </div>
                    <div className="space-x-2">
                        <button 
                        className="bg-purple-700 text-white font-semibold px-4 p-2 rounded-lg cursor-pointer w-full"
                        onClick={() => AddToCart(product)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card; 
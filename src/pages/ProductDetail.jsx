import { useParams } from "react-router";
import { products } from "../data/products";
import { useCart } from "../context/cart";


function ProductDetail() {

    const { id } = useParams();
    
    const product = products.find((product) => (
        product.id == id
    ));
    
    if (!product) {
        return <h1>Product Not Found!</h1>
    }
    
    const {AddToCart} = useCart();

    return (
        <div className="m-2 my-4 bg-white p-2 rounded-md max-w-6xl mx-auto shadow-sm">
            <div className="max-w-6xl mx-auto p-4 md:flex md:justify-between md:gap-4">
                <div>
                    <div><img src={product.image} alt={product.name} /></div>
                </div>
                <div className="flex flex-col gap-2 my-2">
                    <div className="text-2xl font-semibold">{product.name}</div>
                    <div className="text-lg text-blue-600">${product.price}</div>
                    <p className="text-gray-700">{product.description}</p>
                    <button 
                    className="bg-purple-700 w-fit text-white font-semibold px-4 p-2 rounded-lg cursor-pointer my-4"
                    onClick={() => AddToCart(product)}
                    >Add to Cart</button>
                </div>
            </div>
        </div>
    );
}


export default ProductDetail;
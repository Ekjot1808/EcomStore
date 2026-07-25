import Card from "../components/Card";
import { products } from "../data/products";


function Home() {
    return (
        <div>
            {/* Hero Section  */}
            <div className="p-4 text-center space-y-2 py-20">
                <div className="text-3xl text-purple-950 font-semibold">Welcome to EcomStore</div>
                <p className="text-gray-600">Discover best products at reasonable prices</p>
            </div>

            {/* Order Products  */}
            <div className="px-2 max-w-6xl mx-auto">
                <div className="text-lg font-semibold text-purple-950 text-center mb-5">Order Products</div>

                <div className="flex flex-wrap gap-6 justify-center">
                    {products.map((product) => (
                        <Card
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
import ProductCard from "@/components/ProductCard";
import { ProductCardModel } from "@/model/product-card.model";

const Home = () => {
  const products = ProductCardModel.data;
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl font-bold md:text-left">
        Product Card
      </h1>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
        {products.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default Home;

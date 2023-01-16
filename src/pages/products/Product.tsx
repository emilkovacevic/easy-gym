import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import CallToActionBtn from "../../components/CallToAction";

const PRODUCTS_URL = "/api/products";

type Props = {};

interface Product {
  _id: string;
  name: string;
  category: string;
  quantity: number;
  price: number;
  description: string;
  image: string;
}

function Product({}: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get<Product[]>(PRODUCTS_URL)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="py-14 w-5/6 m-auto">
      <h1 className="text-center text-xl sm:text-2xl">Products</h1>
      <div className="flex flex-wrap">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-light-middle dark:bg-dark-middle rounded-lg overflow-hidden shadow-md m-4 mx-auto w-[300px]"
          >
            <img
              src={product.image}
              width="250"
              height="250"
              alt={product.name}
              className="w-full object-contain h-64 my-4"
            />
            <div className="px-6 py-4">
              <div className="font-medium text-lg mb-2">
                <h3 className="capitalize text-center">{product.name}</h3>
              </div>
              <p className="dark:text-dark-text text-sm">
                Category: {product.category}
              </p>
              <p className="dark:text-dark-text text-sm">
                Quantity: {product.quantity}
              </p>
              <p className="dark:text-dark-text text-sm">
                Price: ${product.price}
              </p>
              <p className="dark:text-dark-text text-sm">
                {product.description}
              </p>
              <button
                 className="w-full mt-8"
                onClick={() => dispatch(
                  addToCart({
                    id: product._id,
                    quantity: 1
                  })
                  )
                }
              >
               <CallToActionBtn text={"Add to Cart"} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Product;

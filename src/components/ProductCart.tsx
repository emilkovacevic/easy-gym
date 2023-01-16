import { useSelector } from "react-redux";

type Props = {
    isProductCartOpen: (prev: any) => any;
};

function ProductCart({isProductCartOpen}: Props) {

    const products = useSelector(state => state.cart.products)

  return (
    <div className="text-gray-800 dark:text-white absolute z-30 top-0 left-3/4 dark:bg-dark-surface bg-light-middle border-blue-500 border-2 rounded-md p-4">
      <div className="m-2 flex justify-between">
      <h2>In Chart</h2>
      <button className="hover:text-[rgba(0,0,0,0.6)]" onClick={() => isProductCartOpen((prev: any) => !prev)}>x</button>
      </div>
      <div className="dark:bg-dark-middle bg-light-background rounded-md p-4">
        <h3>Items</h3>
        <ul>
          <li>
            <img src="" alt="" />
            <div>
              <h4>Product name {products.name}</h4>
              <p>Amount: {products.quantity} </p>
            </div>
          </li>
        </ul>
        <p className="pt-4">Total: $150</p>
      </div>
      <button className="mt-4 text-center w-full rounded-md p-2 dark:bg-blue-500" >Purchase</button>
    </div>
  );
}

export default ProductCart;

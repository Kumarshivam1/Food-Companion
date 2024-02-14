import {useSelector} from "react-redux"
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import {useDispatch} from "react-redux";
const Cart = ()=>{

    const cartItems = useSelector((store)=> store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart());
    }
    return(
        <div className="text-center mx-auto  m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <button className="text-sm bg-orange-500 p-1 rounded-md m-1 font bold "
            onClick={handleClearCart}
            >Clear Cart</button>
            {cartItems.length===0 && <h1 className="mx-auto m-4 p-2 bg-red-400 ">Your Cart Is Empty</h1>}
            <div className="mx-auto w-6/12">
            <ItemList items={cartItems}/>
            </div>
        </div>
    )
};

export default Cart;
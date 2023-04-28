import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Header () {
    const {cartProducts} = useContext(CartContext)
    return (
        <header>
            <Link href={'/'}>Appple</Link>
            <nav>
                <Link  href={'/'}>Home</Link>
                <Link  href={'/products'}>All Products</Link>
                <Link  href={'/categories'}>Categories</Link>
                <Link  href={'/account'}>Account</Link>
                <Link  href={'/cart'}>Cart ({cartProducts.length})</Link>
            </nav>
        </header>
    )
}
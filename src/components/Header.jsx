import { Link } from "react-router-dom";
import { ShoppingCart, Store } from "lucide-react";

export default function Header() {
  const cartCount = 0; 

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
          <Store size={26} /> ShopEase
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/" className="hover:text-primary transition">Home</Link>
          <Link to="/cart" className="hover:text-primary transition">Cart</Link>
        </nav>

        <Link to="/cart" className="relative p-2 rounded-full hover:bg-gray-100 transition">
          <ShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
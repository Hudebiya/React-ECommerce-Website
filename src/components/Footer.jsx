export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">ShopEase</h3>
          <p className="text-sm">Your one-stop shop for everything you love.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li>Home</li>
            <li>Cart</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Newsletter</h4>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 rounded-lg bg-gray-800 text-sm outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
      <p className="text-center text-xs py-4 border-t border-gray-800">
        © 2026 ShopEase. All rights reserved.
      </p>
    </footer>
  );
}
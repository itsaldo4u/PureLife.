import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-cream text-gray-700 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Logo & Tagline */}
        <div>
          <h3 className="text-xl font-semibold">
            <span className="text-green-600">Pure</span>Life
          </h3>
          <p className="text-sm mt-2">Embrace a healthier lifestyle</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-start md:justify-end gap-4 md:gap-6">
          {[
            { label: "Home", path: "/" },
            { label: "Nutrition", path: "/nutrition" },
            { label: "Exercise", path: "/exercise" },
            { label: "Mindfulness", path: "/mindfulness" },
            { label: "Contact", path: "/contact" },
          ].map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className="text-sm hover:text-green-600 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-500 mt-8 border-t pt-4">
        © 2025 PureLife. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

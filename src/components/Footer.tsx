const Footer = () => {
  return (
    <footer className="bg-cream text-gray-700 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-xl font-semibold">
            <span className="text-green-600">Pure</span>Life
          </h3>
          <p className="text-sm mt-2">Embrace a healthier lifestyle</p>
        </div>
        <div className="flex justify-start md:justify-end gap-6">
          {["Home", "About", "Services", "Blog", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm hover:text-green-600 transition"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-8 border-t pt-4">
        © 2025 PureLife. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

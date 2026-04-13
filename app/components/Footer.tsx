export default function Footer() {
  return (
    <footer className="bg-black border-t-2 border-orange-500 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <p className="text-gray-300 text-sm mb-2">
            © Copyright Street Wear Co. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs max-w-4xl mx-auto">
            Street Wear Co. is committed to providing quality urban fashion and excellent customer service.
          </p>
        </div>
        <div className="flex flex-wrap justify-center space-x-6 text-sm">
          <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
            Street Wear Co.
          </a>
          <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
            Privacy
          </a>
          <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
            Dresses Glossary
          </a>
          <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
            Sneakers Glossary
          </a>
          <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
            Shop Glossary
          </a>
          <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
            Furniture Glossary
          </a>
          <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
            Access to information
          </a>
        </div>
      </div>
    </footer>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-gray-400">
            <h3 className="text-lg font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/visual" className="text-gray-300 hover:text-white">Visual</Link></li>
              <li><Link to="/login" className="text-gray-300 hover:text-white">Login</Link></li>
              <li><Link to="/register" className="text-gray-300 hover:text-white">Register</Link></li>
            </ul>
          </div>
          <div className="text-gray-400">
            <h3 className="text-lg font-medium mb-4">Social Media</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Facebook</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Twitter</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Instagram</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">YouTube</a></li>
            </ul>
          </div>
          <div className="text-gray-400">
            <h3 className="text-lg font-medium mb-4">About Us</h3>
            <p className="text-gray-300 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod hendrerit elit, at semper velit pharetra id.</p>
            <p className="text-gray-300">Suspendisse bibendum vestibulum enim, non malesuada turpis consectetur eu.</p>
          </div>
          <div className="text-gray-400">
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-2">123 Main Street</p>
            <p className="text-gray-300 mb-2">Anytown, USA 12345</p>
            <p className="text-gray-300 mb-2">Phone: (123) 456-7890</p>
            <p className="text-gray-300">Email: info@adidasale.com</p>
          </div>
        </div>
        <p className="mt-8 text-center text-gray-400">&copy; 2023 Adidasale. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

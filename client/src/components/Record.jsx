import React from "react";
const RetailerCard = ({ retailer }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-wrap items-center justify-between">
      <div className="flex-grow font-bold mr-4">{retailer.Retailer}</div>
      <div className="flex-grow-0 text-sm text-gray-700 mr-4">{retailer.Invoice}</div>
      <div className="flex-grow-0 text-sm text-gray-700 mr-4">{retailer.Region}, {retailer.State}, {retailer.City}</div>
      <div className="flex-grow-0 text-sm text-gray-700 mr-4">{retailer.Product} - {retailer.Price_per_Unit}</div>
      <div className="flex-grow-0 text-sm text-gray-700 mr-4">Units Sold: {retailer.Units_Sold}</div>
      <div className="flex-grow-0 text-sm text-gray-700 mr-4">Total Sales: {retailer.Total_Sales}</div>
      <div className="flex-grow-0 text-sm text-gray-700 mr-4">Operating Profit: {retailer.Operating_Profit}</div>
      <div className="flex-grow-0 text-sm text-gray-700 mr-4">Operating Margin: {retailer.Operating_Margin}</div>
      <div className="flex-grow-0 text-sm text-gray-700 mr-4">Sales Method: {retailer.Sales_Method}</div>
      <div className="flex justify-between mt-4">
      <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mr-4">
        Edit
      </button>
      <button class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
        Delete
      </button>
      </div>
    </div>
  );
};

export default RetailerCard
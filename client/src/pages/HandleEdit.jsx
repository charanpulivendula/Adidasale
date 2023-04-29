import { useState } from 'react';
import { Navigate, useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const HandleEdit = () => {
  const location = useLocation();
  const retailer_obj = location.state.retailer;
  const [retailer, setRetailer] = useState(retailer_obj.Retailer);
  const [invoice, setInvoice] = useState(retailer_obj.Invoice);
  const [region, setRegion] = useState(retailer_obj.Region);
  const [state, setState] = useState(retailer_obj.State);
  const [city, setCity] = useState(retailer_obj.City);
  const [product, setProduct] = useState(retailer_obj.Product);
  const [price, setPrice] = useState(retailer_obj.Price_per_Unit);
  const [unitsSold, setUnitsSold] = useState(retailer_obj.Units_Sold);
  const [totalSales, setTotalSales] = useState(retailer_obj.Total_Sales);
  const [operatingProfit, setOperatingProfit] = useState(retailer_obj.Operating_Profit);
  const [operatingMargin, setOperatingMargin] = useState(retailer_obj.Operating_Margin);
  const [salesMethod, setSalesMethod] = useState(retailer_obj.Sales_Method);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
      const formData = {
        Retailer: retailer,
        Invoice: invoice,
        Region: region,
        State: state,
        City: city,
        Product: product,
        Price_per_Unit: price,
        Units_Sold: unitsSold,
        Total_Sales: totalSales,
        Operating_Profit: operatingProfit,
        Operating_Margin: operatingMargin,
        Sales_Method: salesMethod
      };
    
      // Send the form data as a POST request
      fetch(`/update/${location.state.ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        if (response) {
          alert('Retailer details successfully updated');
          // Clear the form fields
          setRetailer('');
          setInvoice('');
          setRegion('');
          setState('');
          setCity('');
          setProduct('');
          setPrice('');
          setUnitsSold('');
          setTotalSales('');
          setOperatingProfit('');
          setOperatingMargin('');
          setSalesMethod('');
          navigate('/dashboard')
        } else {
          console.log('Error updating retailer details.');
        }
      })
      .catch(error => console.error(error));
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="retailer">
            Retailer:
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="retailer"
            type="text"
            value={retailer}
            onChange={(event) => setRetailer(event.target.value)}
            placeholder="Enter retailer name"
            />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="invoice">
            Invoice:
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="invoice"
            type="text"
            value={invoice}
            onChange={(event) => setInvoice(event.target.value)}
            placeholder="Enter invoice number"
            />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="region">
            Region:
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="region"
            type="text"
            value={region}
            onChange={(event) => setRegion(event.target.value)}
            placeholder="Enter region name"
            />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="state">
            State:
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="state"
            type="text"
            value={state}
            onChange={(event) => setState(event.target.value)}
            placeholder="Enter state name"
            />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="city">
            City:
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="city"
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            placeholder="Enter city name"
            />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="product">
            Product:
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="product"
            type="text"
            value={product}
            onChange={(event) => setProduct(event.target.value)}
            placeholder="Enter product name"
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="product">
            Price_per_Unit:
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="product"
            type="text"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            placeholder="Enter product name"
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="product">
            Units_Sold:
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="product"
            type="text"
            value={unitsSold}
            onChange={(event) => setUnitsSold(event.target.value)}
            placeholder="Enter product name"
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="product">
            Total_Sales:
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="product"
            type="text"
            value={totalSales}
            onChange={(event) => setTotalSales(event.target.value)}
            placeholder="Enter product name"
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="product">
            Operating_Profit:
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="product"
            type="text"
            value={operatingProfit}
            onChange={(event) => setOperatingProfit(event.target.value)}
            placeholder="Enter product name"
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="product">
            Operating_Margin:
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="product"
            type="text"
            value={operatingMargin}
            onChange={(event) => setOperatingMargin(event.target.value)}
            placeholder="Enter product name"
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="product">
            Sales_Method:
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="product"
            type="text"
            value={salesMethod}
            onChange={(event) => setSalesMethod(event.target.value)}
            placeholder="Enter product name"
            />
        </div>
        <button 
            type="submit" 
            onClick={handleSubmit} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
        </button>

    </form>
    
    
  );
};

export default HandleEdit;
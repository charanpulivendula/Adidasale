import React from 'react'
import RetailerCard from '../components/Record';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const RetailerList = ({ retailers,handleDelete,handleEdit }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate()

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const toVisual = ()=>{
        navigate('/visual',{state:{data:retailers}});
    };

    const filteredRetailers = retailers.filter((retailer) => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      return Object.values(retailer).some((value) =>
        value.toString().toLowerCase().includes(lowerCaseSearchTerm)
      );
    });

    return (

    <div>
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={toVisual}
    >
      Visualize
    </button>
    <input
      type="text"
      placeholder="Search by retailer "
      value={searchTerm}
      onChange={handleSearch}
    />
    <Link to="/add" className="add-button" state = {{admin:1}}>
        <FaPlus className="add-icon" />
    </Link>
    <table className='retailer-table'>
      <thead>
        <tr>
          <th>Retailer</th>
          <th>Invoice</th>
          <th>Region</th>
          <th>State</th>
          <th>City</th>
          <th>Product</th>
          <th>Price per Unit</th>
          <th>Units Sold</th>
          <th>Total Sales</th>
          <th>Operating Profit</th>
          <th>Operating Margin</th>
          <th>Sales Method</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {filteredRetailers.slice().reverse().map((retailer,index) => (
          <tr key={index}>
            <td>{retailer.Retailer}</td>
            <td>{retailer.Invoice}</td>
            <td>{retailer.Region}</td>
            <td>{retailer.State}</td>
            <td>{retailer.City}</td>
            <td>{retailer.Product}</td>
            <td>{retailer.Price_per_Unit}</td>
            <td>{retailer.Units_Sold}</td>
            <td>{retailer.Total_Sales}</td>
            <td>{retailer.Operating_Profit}</td>
            <td>{retailer.Operating_Margin}</td>
            <td>{retailer.Sales_Method}</td>
            <td>
              <button onClick={() => {navigate('/update',{state:{retailer:retailer,ID:retailer.ID}})}}><FaEdit/></button>
              <button onClick={() => {handleDelete(retailer.ID);console.log(retailer.ID);}}><FaTrash/></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

    );
  };
const Dashboard = () => {
    const [retailers, setRetailers] = useState([]);

    const handleEdit = async(id)=>{
      
    }
    const handleDelete = async(id)=>{
      try {
        console.log(id);
        const response = await fetch(`/delete/${id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
        });
        console.log(response);
        if (response.ok) {
            alert('Retailer row deleted successfully.');
            setRetailers(retailers.filter((retailer) => retailer.ID !== id))
        } else {
            console.log('Error deleting retailer row.');
        }
    } catch (error) {
        console.error(error);
    }
    } 

    useEffect(() => {
    const fetchRetailers = async () => {
      const response = await fetch('/dashboard');
      const data = await response.json();
      setRetailers(data[0]);
    };
    fetchRetailers();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Retailer Sales Data</h1>
        <RetailerList retailers={retailers} handleDelete= {handleDelete} handleEdit = {handleEdit}/>
    </div>
  )
}

export default Dashboard
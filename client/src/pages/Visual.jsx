import React from 'react'

import { Bar,Line,Pie } from 'react-chartjs-2';
import { useEffect,useState } from 'react';
import Chart from 'chart.js/auto';
import { useLocation } from 'react-router-dom';

import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

const Visual = () => {
  const location = useLocation();
  const [retailers, setRetailers] = useState([]);
  useEffect(() => {
    if (location.state) {
      setRetailers(location.state.data);
    }
  }, [location]);

  const SalesByRegionBarChart = ({ retailers }) => {
    // get the unique regions
    const regionList = Array.from(new Set(retailers.map((r) => r.Region)));
    
    // get the total sales per region
    const salesByRegion = regionList.map((region) => {
      const regionRetailers = retailers.filter((r) => r.Region === region);
      
      const totalSales = retailers
        .filter((r) => r.Region === region)
        .reduce((acc, cur) => acc + parseFloat(cur.Total_Sales.replace(/[^\d.-]/g, '')), 0);
      
      return totalSales;
    });
    // get the data for the sales by region chart
    const salesByRegionData = {
      labels: regionList,
      datasets: [
        {
          label: "Total Sales",
          data: salesByRegion,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    };

    return (
      <div style={{ height: '600px', width: '800px' }}>
        <Bar
          data={salesByRegionData}
          options={{
            scales: {
              y: {
                beginAtZero: true,
              },
            },
            plugins: {
              title: {
                display: true,
                text: 'Total Sales by Region',
                font: {
                  size: 20,
                  weight: 'bold',
                },
              },
            },
          }}
        />
      </div>
    );
  };


  const SalesMethodPieChart = ({ retailers }) => {
    const salesMethodCounts = retailers.reduce((counts, r) => {
      counts[r.Sales_Method] = (counts[r.Sales_Method] || 0) + 1;
      return counts;
    }, {});

    const data = {
      labels: Object.keys(salesMethodCounts),
      datasets: [
        {
          data: Object.values(salesMethodCounts),
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#9CCC65',
            '#E57373',
            '#7986CB'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#9CCC65',
            '#E57373',
            '#7986CB'
          ]
        }
      ]
    };

    return (
      <div style={{ height: '600px', width: '800px' }}>
                <Pie data={data} />
      </div>
    );
  };

  return (
    <div>
      <h1 className="title">Visualization</h1>
      <div style={{ height: '600px', width: '800px' }}>
          <SalesMethodPieChart retailers={retailers}/>
      </div>
      <div>
      <h1>Visualization</h1>
          <SalesByRegionBarChart retailers={retailers} />
      </div>
    </div>
  );
};


export default Visual
import React from 'react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, CartesianGrid, XAxis, YAxis,
  Tooltip, Legend, Cell, RadialBarChart, RadialBar
} from 'recharts';
import "./About.css";

// Example data related to supermarket metrics
const salesLineData = [
  { name: 'Jan', sales: 1200, profits: 800 },
  { name: 'Feb', sales: 1500, profits: 900 },
  { name: 'Mar', sales: 1800, profits: 1000 },
  { name: 'Apr', sales: 2000, profits: 1200 },
  { name: 'May', sales: 1700, profits: 1100 },
  { name: 'Jun', sales: 1900, profits: 1300 },
  { name: 'Jul', sales: 2200, profits: 1500 },
];

const salesBarData = [
  { name: 'Jan', sales: 1200, expenses: 700 },
  { name: 'Feb', sales: 1500, expenses: 800 },
  { name: 'Mar', sales: 1800, expenses: 900 },
  { name: 'Apr', sales: 2000, expenses: 1000 },
  { name: 'May', sales: 1700, expenses: 800 },
  { name: 'Jun', sales: 1900, expenses: 900 },
];

const productPieData = [
  { name: 'Fruits', value: 500 },
  { name: 'Vegetables', value: 300 },
  { name: 'Dairy', value: 200 },
  { name: 'Snacks', value: 100 },
];

const COLORS = ['#FF6347', '#3CB371', '#FFD700', '#1E90FF'];

// Extra graph data for RadialBarChart
const radialBarData = [
  { name: 'Quality', value: 85 },
  { name: 'Customer Service', value: 90 },
  { name: 'Stock Management', value: 80 },
  { name: 'Sales Performance', value: 95 },
];

// Determine if the user is an admin (replace this logic with your actual admin check)
const isAdmin = true; // This should come from user context or state

const About = () => {
  return (
    <div className="dashboard">
      <h2>About</h2>
      <div className="chart-container">
        <div className="chart-item">
          <h3>Sales and Profits (Line Chart)</h3>
          <LineChart width={600} height={300} data={salesLineData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
            <Line type="monotone" dataKey="profits" stroke="#82ca9d" />
          </LineChart>
        </div>
        <div className="chart-item">
          <h3>Sales and Expenses (Bar Chart)</h3>
          <BarChart width={600} height={300} data={salesBarData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" />
            <Bar dataKey="expenses" fill="#82ca9d" />
          </BarChart>
        </div>
        <div className="chart-item">
          <h3>Product Distribution (Pie Chart)</h3>
          <PieChart width={600} height={300}>
            <Pie
              data={productPieData}
              cx={300}
              cy={150}
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {productPieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
        {isAdmin && (
          <div className="chart-item">
            <h3>Performance Metrics (Radial Bar Chart)</h3>
            <RadialBarChart width={600} height={300} innerRadius="10%" outerRadius="80%" data={radialBarData}>
              <RadialBar
                minAngle={15}
                label={{ fill: '#666', position: 'insideStart' }}
                background
                clockWise
                dataKey="value"
              >
                {radialBarData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </RadialBar>
              <Tooltip />
              <Legend />
            </RadialBarChart>
          </div>
        )}
      </div>
    </div>
  );
}

export default About;

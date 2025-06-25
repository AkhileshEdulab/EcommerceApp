import React, { useState, useEffect, useRef, useContext } from 'react';
import Button from '@mui/material/Button';
import { IoAdd } from 'react-icons/io5';
import DashboardBoxes from '../DashboardBoxes';
import RecentOrders from '../RecentOrders';
import Product from '../Products/product';
import { LineChart } from '@mui/x-charts/LineChart';
import { MyContext } from '../../../App';

// Custom hook to get the container's width dynamically
function useContainerWidth() {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (!ref.current) return;

    setWidth(ref.current.offsetWidth);

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        if (entry.contentRect) {
          setWidth(entry.contentRect.width);
        }
      }
    });

    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, []);

  return [ref, width];
}

const Dashboard = () => {
  // Sample data
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'];

  // Use custom hook for responsive width
  const [containerRef, containerWidth] = useContainerWidth();
  const chartWidth = Math.max(containerWidth, 300); // minimum width for chart
  const { setProductDrawer } = useContext(MyContext);
  

  return (
    <>
      <section className="flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row lg:max-w-[1400px] w-full mx-auto rounded-lg justify-between items-center bg-white shadow-md gap-6">
          <div className="flex flex-col gap-2 p-8 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl font-semibold">Good Morning,</h1>
            <b className="text-2xl sm:text-3xl font-semibold"> Cameron 👏</b>
            <p className="text-sm sm:text-base text-gray-600">
              Here’s what’s happening on your store today. See the statistics at once.
            </p>
            <Button variant="contained" className="gap-2 self-center lg:self-start" onClick={()=>setProductDrawer({
            open:true,
            model:'AddProduct',
          })}>
              <IoAdd />
              Add Product
            </Button>
          </div>
          <div className="p-4">
            <img
              src="./online-png.webp"
              alt="shopping img"
              className="w-60 sm:w-72 md:w-96 h-auto object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <DashboardBoxes />
          <Product />
          <RecentOrders />
        </div>

        <div
          ref={containerRef}
          className="bg-white rounded-lg p-6 shadow-lg w-full  mx-auto overflow-x-auto"
        >
          <h2 className="font-extrabold text-2xl text-gray-800 mb-6 text-center">
            Total Users & Total Sales Overview
          </h2>

          {/* Render chart only after width is measured */}
          {containerWidth > 0 && (
            <LineChart
              height={450}
              width={chartWidth}
              series={[
                {
                  data: pData,
                  label: 'Total Users',
                  color: '#3b82f6', // Tailwind blue-500
                  lineStyle: { strokeWidth: 3, strokeLinecap: 'round' },
                  pointStyle: { fill: '#3b82f6', r: 6, strokeWidth: 2, stroke: '#1e40af' },
                },
                {
                  data: uData,
                  label: 'Total Sales',
                  color: '#10b981', // Tailwind green-500
                  lineStyle: { strokeWidth: 3, strokeDasharray: '6 4' },
                  pointStyle: { fill: '#10b981', r: 6, strokeWidth: 2, stroke: '#047857' },
                },
              ]}
              xAxis={[
                {
                  scaleType: 'point',
                  data: xLabels,
                  label: 'Months',
                  labelStyle: { fontSize: 16, fontWeight: 'bold', fill: '#374151' },
                  tickLabelStyle: { fontSize: 14, fill: '#4b5563' },
                },
              ]}
              yAxis={[
                {
                  label: 'Count',
                  labelStyle: { fontSize: 16, fontWeight: 'bold', fill: '#374151' },
                  tickLabelStyle: { fontSize: 14, fill: '#4b5563' },
                  min: 0,
                  max: Math.max(...pData.concat(uData)) + 1000,
                },
              ]}
              sx={{
                '& .MuiChartsLegend-root': {
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: 20,
                  justifyContent: 'center',
                },
                '& .MuiChartsAxis-root': {
                  fontFamily: "'Poppins', sans-serif",
                },
              }}
              animate
            />
          )}
        </div>
      </section>
    </>
  );
};

export default Dashboard;

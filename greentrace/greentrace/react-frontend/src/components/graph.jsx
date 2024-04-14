// import React, { useState, useEffect } from 'react';
// import { Bar } from 'react-chartjs-2';

// const GraphComponent = () => {
//   const [chartData, setChartData] = useState({
//     labels: Array.from({ length: 30 }, (_, i) => i + 1),
//     datasets: [
//       {
//         label: 'Data Value',
//         data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 100)),
//         backgroundColor: 'blue',
//       },
//     ],
//   });

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       // Update chart data every 5 seconds with random values
//       setChartData((prevChartData) => ({
//         ...prevChartData,
//         datasets: [
//           {
//             ...prevChartData.datasets[0],
//             data: prevChartData.datasets[0].data.map(() => Math.floor(Math.random() * 100)),
//           },
//         ],
//       }));
//     }, 5000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div>
//       <Bar
//         data={chartData}
//         options={{
//           responsive: true,
//           maintainAspectRatio: false,
//           plugins: {
//             title: {
//               display: true,
//               text: 'Data for the Month',
//             },
//           },
//           scales: {
//             x: {
//               title: {
//                 display: true,
//                 text: 'Day of the Month',
//               },
//               ticks: {
//                 stepSize: 1,
//                 autoSkip: false,
//               },
//             },
//             y: {
//               type: 'linear', // Change scale type to 'linear'
//               title: {
//                 display: true,
//                 text: 'Data Value',
//               },
//             },
//           },
//         }}
//       />
//     </div>
//   );
// };

// export default GraphComponent;

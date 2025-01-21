'use client';

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function DonatChart() {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    // Destroy existing chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Get the canvas context
    const ctx = chartRef.current.getContext('2d');

    // Create new chart instance
    chartInstanceRef.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Penyerangan Berhasil', 'Penyerangan Gagal', 'Dalam Proses'],
        datasets: [{
          label: 'Status Penyerangan',
          data: [45, 30, 25],
          backgroundColor: [
            'rgb(255, 99, 132)',   // Merah untuk Berhasil
            'rgb(54, 162, 235)',   // Biru untuk Gagal
            'rgb(255, 205, 86)'    // Kuning untuk Dalam Proses
          ],
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Status Penyerangan'
          },
          legend: {
            display: true,
            position: 'bottom'
          }
        },
        cutout: '60%', // This creates the donut effect
        animation: {
          animateRotate: true,
          animateScale: true
        }
      }
    });

    // Cleanup function
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full bg-gray-50 p-4 rounded-lg border flex items-center justify-center">
      <canvas ref={chartRef} className="w-full h-64"></canvas>
    </div>
  );
}

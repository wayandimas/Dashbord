import React from "react";

export default function stat() {
  return (
    <div className="w-full">
      <div className="stats stats-vertical bg-gray-50 lg:stats-horizontal border w-full">
        <div className="stat w-full">
          <div className="stat-title">Jumlah Penyerangan</div>
          <div className="stat-value">20</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat w-full">
          <div className="stat-title">Jumlah Kunjungan</div>
          <div className="stat-value">133</div>
          <div className="stat-desc"> Jan 1st - Feb 1st  </div>
        </div>

        <div className="stat w-full space-y-3">
          <div className="stat-title">Persentase Penyerangan</div>
          <div className="stat-value">47%</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>
      </div>
    </div>
  );
}

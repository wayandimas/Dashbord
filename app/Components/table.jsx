import React from "react";

// Separate component for status badge
const StatusBadge = ({ status }) => {
  const statusConfig = {
    'Berhasil Ditangani': 'bg-green-100 text-green-800',
    'Sedang Diproses': 'bg-yellow-100 text-yellow-800',
    'Gagal Ditangani': 'bg-red-100 text-red-800'
  };

  return (
    <span className={`badge ${statusConfig[status] || 'bg-gray-100 text-gray-800'}`}>
      {status}
    </span>
  );
};

// Separate component for table row
const TableRow = ({ no, date, location, attackType, status }) => (
  <tr className="hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
    <th className="text-center">{no}</th>
    <td>{date}</td>
    <td>{location}</td>
    <td>{attackType}</td>
    <td>
      <StatusBadge status={status} />
    </td>
    <td>
      <button className="btn btn-xs btn-outline btn-primary">Detail</button>
    </td>
  </tr>
);

// Main table component
export default function Table() {
  const tableData = [
    {
      no: 1,
      date: '12 Jan 2024',
      location: 'Jakarta Selatan',
      attackType: 'Cyber Attack',
      status: 'Berhasil Ditangani'
    },
    {
      no: 2,
      date: '15 Jan 2024',
      location: 'Bandung',
      attackType: 'Phishing',
      status: 'Sedang Diproses'
    },
    {
      no: 3,
      date: '18 Jan 2024',
      location: 'Surabaya',
      attackType: 'Malware',
      status: 'Gagal Ditangani'
    },
    {
      no: 4,
      date: '20 Jan 2024',
      location: 'Medan',
      attackType: 'DDoS',
      status: 'Berhasil Ditangani'
    },
    
  ];

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="text-center">No</th>
              <th>Tanggal</th>
              <th>Lokasi</th>
              <th>Jenis Penyerangan</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <TableRow key={row.no} {...row} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

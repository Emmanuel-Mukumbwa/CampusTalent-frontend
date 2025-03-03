// src/pages/admin/AdminDashboard.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

const AdminDashboard = () => {
  return (
    <div className="d-flex">
      <AdminSidebar />
      <div className="flex-grow-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;

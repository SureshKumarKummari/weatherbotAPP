import React, { useState } from 'react';
import UserTable from './UserTable';
import CreateAdminForm from './CreateAdminForm';

function AdminPanel() {
  // Sample users data
  const [users, setUsers] = useState([
    { id: 1, username: 'john_doe', email: 'john@example.com', isBlocked: false },
    { id: 2, username: 'jane_doe', email: 'jane@example.com', isBlocked: false },
    { id: 3, username: 'admin_user', email: 'admin@example.com', isBlocked: false },
  ]);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleDelete = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const handleBlock = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, isBlocked: !user.isBlocked } : user
      )
    );
  };

  const handleCreateAdmin = (newAdmin) => {
    // Here, you would usually send a request to the backend to create a new admin
    setUsers([
      ...users,
      { id: users.length + 1, ...newAdmin, isBlocked: false },
    ]);
    setShowCreateForm(false); // Close form after submit
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Admin Panel</h2>

      {/* Show button to toggle create admin form */}
      <button
        onClick={() => setShowCreateForm(!showCreateForm)}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        {showCreateForm ? 'Cancel' : 'Create New Admin'}
      </button>

      {showCreateForm && <CreateAdminForm onSubmit={handleCreateAdmin} />}

      {/* Show the user table */}
      <UserTable users={users} onDelete={handleDelete} onBlock={handleBlock} />
    </div>
  );
}

export default AdminPanel;

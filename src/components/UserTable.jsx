import React from 'react';

function UserTable({ users, onDelete, onBlock }) {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">User List</h3>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="border-b bg-gray-100">
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Username</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Email</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-800">{user.username}</td>
              <td className="px-6 py-4 text-sm text-gray-800">{user.email}</td>
              <td className="px-6 py-4 text-sm text-gray-800">
                <button
                  onClick={() => onBlock(user.id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600"
                >
                  {user.isBlocked ? 'Unblock' : 'Block'}
                </button>
                <button
                  onClick={() => onDelete(user.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;

// ManageMembers.js
import React, { useState } from 'react';
import MemberForm from '../components/MemberForm';
import MemberList from '../components/MemberList';

const ManageMembers = () => {
  const [editingMember, setEditingMember] = useState(null);

  const handleEdit = (member) => {
    setEditingMember(member);
  };

  return (
    <div>
      <h1>Manage Gym Members</h1>
      <MemberList onEdit={handleEdit} />
      <h2>{editingMember ? 'Edit Member' : 'Add Member'}</h2>
      <MemberForm editingMember={editingMember} />
    </div>
  );
};

export default ManageMembers;

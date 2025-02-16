// MemberList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MemberList = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get('/api/members')
      .then(response => setMembers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Gym Members</h2>
      <ul>
        {members.map(member => (
          <li key={member.id}>
            {member.name} - {member.email}
            <button>Edit</button>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemberList;

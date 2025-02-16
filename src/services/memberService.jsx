// services/memberService.js
import axios from 'axios';

const API_URL = '/api/members';

export const getMembers = () => axios.get(API_URL);
export const addMember = (memberData) => axios.post(API_URL, memberData);
export const updateMember = (id, memberData) => axios.put(`${API_URL}/${id}`, memberData);
export const deleteMember = (id) => axios.delete(`${API_URL}/${id}`);

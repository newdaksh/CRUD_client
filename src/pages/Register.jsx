import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerUserWithFormData } from '../services/api';


const Register = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobile: '',
    gender: '',
    languages: '',
    country: '',
    resume: '' // You might want to handle file uploads separately
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle file input for resume
  const handleFileChange = (e) => {
    setForm({ ...form, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Use FormData for file upload
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });
      const res = await registerUserWithFormData(formData);
      toast.success(res.message || 'Registration successful!', { position: 'top-center' });
      setForm({
        firstName: '', lastName: '', email: '', password: '', mobile: '', gender: '', languages: '', country: '', resume: ''
      });
    } catch (err) {
      toast.error(err.error || 'Registration failed', { position: 'top-center' });
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-100 to-indigo-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange}  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange}  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          </div>
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange}  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange}  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <input name="mobile" placeholder="Mobile" value={form.mobile} onChange={handleChange}  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
        <div>
          <label className="font-medium">Gender:</label><br />
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={form.gender === 'male'}
              onChange={handleChange}
              
            /> Male
          </label>
          {' '}
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={form.gender === 'female'}
              onChange={handleChange}
              
            /> Female
          </label>
          {' '}
          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              checked={form.gender === 'other'}
              onChange={handleChange}
              
            /> Other
          </label>
        </div>
        <select name="languages" value={form.languages} onChange={handleChange}  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400">
          <option value="">Select Language</option>
          <option value="c">C</option>
          <option value="laravel">Laravel</option>
          <option value="node">Node</option>
          <option value="express">Express</option>
        </select>
        <select name="country" value={form.country} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400">
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
          <option value="Germany">Germany</option>
          <option value="Japan">Japan</option>
          <option value="Other">Other</option>
        </select>
        
        <div>
          <label className="font-medium">Resume:</label><br />
          <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="w-full mt-1" />
        </div>

        <button type="submit" disabled={loading} className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          {loading ? 'Registering...' : 'Register'}
        </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
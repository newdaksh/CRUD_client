import React, { useState } from 'react';
import { forgotPassword } from '../services/api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await forgotPassword(email);
      toast.success('Reset link sent! Check your email.', { position: 'top-center' });
    } catch (err) {
      toast.error(err.message || err.error || 'Failed to send reset link', { position: 'top-center' });
    }
    setLoading(false);
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-100 to-cyan-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-cyan-700 mb-6">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition"
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default ForgotPassword
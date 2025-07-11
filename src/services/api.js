import axios from "axios";

const api = axios.create({
    baseURL: "https://crud-server-ilsg.onrender.com/api", // Replace with your actual API base URL
});

// Interceptor to attach token automatically
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

// Register user API call
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/register', userData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      throw { error: error.response.data.error };
    }
    throw { error: error.message || 'Registration failed' };
  }
};

// Login user API call
export const loginUser = async (loginData) => {
  try {
    const response = await api.post('/login', loginData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      throw { error: error.response.data.error };
    }
    throw { error: error.message || 'Login failed' };
  }
};

// Fetch all users (for UserList)
export const getUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Failed to fetch users' };
  }
};


export const login = async (email, password) => {
  const res = await api.post('/login', { email, password });
  return res.data;
};

// Forgot password
export const forgotPassword = async (email) => {
  try {
    const res = await api.post('/forgot-password', { email });
    return res.data;
  } catch (error) {
    throw error.response?.data || { error: 'Failed to send reset email' };
  }
};

// Reset password
export const resetPassword = async (token, password) => {
  try {
    const res = await api.post(`/reset-password/${token}`, { password });
    return res.data;
  } catch (error) {
    throw error.response?.data || { error: 'Failed to reset password' };
  }
};

// Change password
export const changePassword = async (data) => {
  try {
    const res = await api.post('/change-password', data);
    return res.data;
  } catch (error) {
    throw error.response?.data || { error: 'Failed to change password' };
  }
};

export default api;

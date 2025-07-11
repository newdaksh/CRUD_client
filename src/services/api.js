import axios from "axios";

const api = axios.create({
  baseURL: "https://crud-server-ilsq.onrender.com", // ✅ Your backend URL
});

// ✅ Attach token to all requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ✅ Register user (with FormData)
export const registerUserWithFormData = async (formInput) => {
  try {
    const formData = new FormData();
    for (const key in formInput) {
      formData.append(key, formInput[key]);
    }

    const response = await api.post('/register', formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Registration error:", error); // optional
    if (error.response?.data?.error) {
      throw { error: error.response.data.error };
    }
    throw { error: error.message || "Registration failed" };
  }
};

// ✅ Login user
export const loginUser = async (loginData) => {
  try {
    const response = await api.post('/login', loginData);
    return response.data;
  } catch (error) {
    console.error("Login error:", error); // optional
    if (error.response?.data?.error) {
      throw { error: error.response.data.error };
    }
    throw { error: error.message || 'Login failed' };
  }
};

// ✅ Fetch all users
export const getUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    console.error("Get users error:", error); // optional
    throw error.response?.data || { error: 'Failed to fetch users' };
  }
};

// ❌ REMOVE DUPLICATE LOGIN FUNCTION
// export const login = async (email, password) => { ... }

// ✅ Forgot password
export const forgotPassword = async (email) => {
  try {
    const res = await api.post('/forgot-password', { email });
    return res.data;
  } catch (error) {
    console.error("Forgot password error:", error); // optional
    throw error.response?.data || { error: 'Failed to send reset email' };
  }
};

// ✅ Reset password
export const resetPassword = async (token, password) => {
  try {
    const res = await api.post(`/reset-password/${token}`, { password });
    return res.data;
  } catch (error) {
    console.error("Reset password error:", error); // optional
    throw error.response?.data || { error: 'Failed to reset password' };
  }
};

// ✅ Change password
export const changePassword = async (data) => {
  try {
    const res = await api.post('/change-password', data);
    return res.data;
  } catch (error) {
    console.error("Change password error:", error); // optional
    throw error.response?.data || { error: 'Failed to change password' };
  }
};

export default api;
// ✅ Logout user
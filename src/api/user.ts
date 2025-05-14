import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export interface User {
    _id: String;
    email: String;
    username: String;
    password: String;
    role: "admin" | "speaker" | "public";
    
}


export const Login = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    const userData = response.data;
    localStorage.setItem('user', JSON.stringify(userData));
    return userData;
};

export const Register = async (username: string, email: string, password: string) => {
    const response = await axios.post(`${API_URL}/auth/register`, { username, email, password });
    return response.data;
}

export const updateUserById = async (id: string, updatedUser: Partial<User>) => {
    const response = await axios.put(`${API_URL}/auth/${id}`, updatedUser);
    return response.data;
}

export const deleteUserById = async (id: string) => {
    const response = await axios.delete(`${API_URL}/auth/${id}`);
    return response.data;
}

export const getUserFromSession = (): User | null => {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
};

export const Logout = () => {
    localStorage.removeItem('user');
};

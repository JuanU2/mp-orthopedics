import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import axios from "axios";

const guest = {
  id: -1,
  username: "Guest",
  email: "none",
  phone: "none",
  userRole: "USER",
  password: "none",
  reservation: null,
  sessions: []
}
type userUpdate = {
  username?: string;
  email?: string;
  phone?: string;
  userRole?: string;
  password?: string;
}

type user = {
  id: number;
  username: string;
  email: string;
  phone: string;
  userRole: string;
  password: string;
}

async function getUsernameById(id: string) {
  if (id === "none") {
    return "none";
  }
  try {
    const response = await axios.get(
      `http://localhost:3000/users/username/${id}`,
      { withCredentials: true }
    );
    const data = response.data;

    if (response.status === 200) {
      return data.username;
    } else if (response.status === 404) {
      return "none";
    } else {
      return "none";
    }
  } catch (error) {
    console.error("Error:", error);
    return "none";
  }
}

export async function getUser(id: number) {
  if (id === -1) {
    return guest
  }
  const response = await axios.get(`http://localhost:3000/users/${id}`, {withCredentials: true});
  if (response.status !== 200) {
    return guest
  }
  return response.data;
}

export async function getUsers(): Promise<user[]> {
  try {
    const response = await axios.get(`http://localhost:3000/users`, {withCredentials: true});
    if (response.status === 200) {
      const data = response.data;
      console.log(data);
      return data;
    }
    return [];
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

export async function updateUser(userId: number, data: userUpdate) {
  try {
    const response = await axios.put(
      `http://localhost:3000/users/${userId}`,
      data,
      { withCredentials: true }
    );
    if (response.status === 200) {
      const data = response.data;
      return data;
    }
    return null;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function isLoggedIn(): Promise<boolean> {
  const userId = localStorage.getItem("auth");
  if (userId === "none" || !userId) {
    localStorage.setItem("auth", "none");
    return false;
  }
  const res = await getUsernameById(userId);
  if (res === "none") {
    console.log(userId);
    localStorage.setItem("auth", "none");
    return false;
  }
  return true;
}

const Layout = () => {
  isLoggedIn();
  return (
    <div className="layout">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

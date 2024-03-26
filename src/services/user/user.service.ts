import { ILogin, IRegister, IUser } from "@/interfaces/user/login.interface";
import Swal from 'sweetalert2'


export const login = async (loginForm: ILogin) => {
  try {
    const res = await fetch(`https://presentation-day-1-kalaeksi-phloeng-rachan.vercel.app/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginForm),
    });

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    const data = await res.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getUserProfile = async (token: string) => {
  try {
    const res = await fetch(`https://presentation-day-1-kalaeksi-phloeng-rachan.vercel.app/api/auth/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const register = async (registerForm: IRegister) => {
  try {
    const res = await fetch(`https://presentation-day-1-kalaeksi-phloeng-rachan.vercel.app/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerForm),
    });

    if(res.status === 400){
      Swal.fire({
        icon: "error",
        title: "This email already registered",
      });
      return;
    }

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    Swal.fire({
      title: "Register success",
      icon: "success"
    })

    const data = await res.json();
    return data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "This email already registered",
    });
    console.log(error);
    throw error;
  }
};

export const updateUserProfile = async (token: string, body: IUser) => {
  console.log("body" + JSON.stringify(body));
  try {
    const res = await fetch(`https://presentation-day-1-kalaeksi-phloeng-rachan.vercel.app/api/auth/me`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
 
    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

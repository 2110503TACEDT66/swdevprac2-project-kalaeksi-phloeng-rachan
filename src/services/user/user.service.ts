import { ILogin, IRegister, IUser } from "@/interfaces/user/login.interface";


export const login = async (loginForm: ILogin) => {
  try {
    const res = await fetch(`https://presentation-day-1-kalaeksi-phloeng-rachan.vercel.app/auth/login`, {
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
    const res = await fetch(`https://presentation-day-1-kalaeksi-phloeng-rachan.vercel.app/auth/me`, {
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
    const res = await fetch(`https://presentation-day-1-kalaeksi-phloeng-rachan.vercel.app/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerForm),
    });
    console.log(registerForm);
    alert("look");
    if (!res.ok) {
      console.log()
      throw new Error("Something went wrong");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateUserProfile = async (token: string, body: IUser) => {
  console.log("body" + JSON.stringify(body));
  try {
    const res = await fetch(`https://presentation-day-1-kalaeksi-phloeng-rachan.vercel.app/auth/me`, {
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

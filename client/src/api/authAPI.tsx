import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  const postData = { username: userInfo.username, password: userInfo.password };

  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error desconocido');
    }

    const data = await response.json();
    return data;

  } catch (error : any) {
    throw new Error(`Error en la solicitud: ${error.message}`);
  }
};

export { login };
export const deleteMe = async (path, idmail) => {
  try {
    const response = await fetch(
<<<<<<< HEAD
      `https://arcadian-server.vercel.app/${path}?idmail=${idmail}`,
=======
      `http://localhost:5000/${path}?idmail=${idmail}`,
>>>>>>> 65407b04e6a09f1700d04719394131d24a758880
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

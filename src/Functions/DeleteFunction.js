export const deleteMe = async (path, idmail) => {
  try {
    const response = await fetch(
      `https://arcadian-server.vercel.app/${path}?idmail=${idmail}`,
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

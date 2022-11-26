export const deleteMe = async (path, idmail) => {
  try {
    const response = await fetch(
      `http://localhost:5000/${path}?idmail=${idmail}`,
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

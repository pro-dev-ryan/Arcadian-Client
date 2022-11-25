export const deleteMe = async (path, idmail) => {
  response = await fetch(`http://localhost:5000/${path}/${idmail}`, {
    method: "DELETE",
  });
  const data = response.json();
  return data;
};

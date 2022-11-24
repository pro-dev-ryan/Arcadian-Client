export const imageUploader = async (data) => {
  const formData = new FormData();
  formData.append("image", data, "userPic");
  const url = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMGBB_KEY
  }`;
  const res = await fetch(url, {
    method: "POST",
    body: formData,
  });
  const resolve = res.json();
  return resolve;
};

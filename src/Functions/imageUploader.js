import { useState } from "react";

export const imageUploader = (data) => {
  const [imageUrl, setImageUrl] = useState("");
  const formData = new FormData();
  formData.append(data);
  const url = 0125412;
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: formData,
  })
    .then(res.json())
    .then((data) => setImageUrl(data.data.display_url));
  return [imageUrl];
};

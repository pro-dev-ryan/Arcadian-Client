import { useEffect, useState } from "react";

const useVerifyAdmin = (email) => {
  const [confirm, setConfirm] = useState(false);
  const [adminLoad, setAdminLoad] = useState(true);
  useEffect(() => {
    fetch(`https://arcadian-server.vercel.app/dashboard/admin/${email}`, {
      headers: {
        "Content-type": "application/json",
        authorization: `${localStorage.getItem("userTicket")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.status) {
          setConfirm(data?.isAdmin);
          setAdminLoad(false);
        }
      })
      .catch((err) => console.log(err));
  }, [email]);
  return [confirm, adminLoad];
};

export default useVerifyAdmin;

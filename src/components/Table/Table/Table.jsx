import React from "react";
<<<<<<< HEAD
import UserRow from "./Row/UserRow";

const Table = ({ data, handleDelete, handleVerify }) => {
=======
import Row from "./Row/Row";

const Table = ({ data }) => {
>>>>>>> 65407b04e6a09f1700d04719394131d24a758880
  const users = data?.result;
  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-compact w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Avatar</th>
            <th>User/Product Name</th>
            <th>Email/Location</th>
            <th>Status/Price</th>
            <th>Role/Type</th>
            <th colSpan={4}>actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((info, i) => (
<<<<<<< HEAD
            <UserRow
              key={i}
              info={info}
              handleDelete={handleDelete}
              handleVerify={handleVerify}
            />
=======
            <Row key={i} info={info} />
>>>>>>> 65407b04e6a09f1700d04719394131d24a758880
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

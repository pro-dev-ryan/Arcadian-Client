import React from "react";
import UserRow from "./Row/UserRow";

const Table = ({ data, handleDelete, handleVerify }) => {
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
            <UserRow
              key={i}
              info={info}
              handleDelete={handleDelete}
              handleVerify={handleVerify}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

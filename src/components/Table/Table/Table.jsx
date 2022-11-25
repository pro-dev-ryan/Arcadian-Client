import React from "react";
import Row from "./Row/Row";

const Table = () => {
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
            <th>Contact/Price</th>
            <th>Role/Type</th>
            <th colSpan={4}>actions</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map((info, i) => (
            <Row key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

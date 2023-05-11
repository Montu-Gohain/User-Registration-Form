import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";
const BASE_URL = "http://localhost:6060/api/users";

const UserTable = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((res) => setUserData(res.data.data))
      .catch((error) => console.log(error.message));
  }, []);
  // userData && console.log(userData);

  return (
    <>
      <table>
        <caption>
          List of saved users
          <Link to={"/"} className="route-home">
            Add new User
          </Link>
        </caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age/Sex</th>
            <th>Mobile no</th>
            <th>Address</th>
            <th>Govt ID</th>
            <th>ID Type</th>
            <th>Guardian Details</th>
            <th>Nationality</th>
            <th>Marital Status</th>
            <th>Blood Group</th>
            <th>Religion</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((cur_user) => {
            const {
              _id,
              name,
              dobOrAge,
              sex,
              mobile_no,
              issued_id,
              id_type,
              nationality,
              gurdian_name,
              gurdian_relation,
              address,
              city,
              country,
              state,
              pincode,
              marital_status,
              blood_group,
              religion,
            } = cur_user;
            const address_details = pincode
              ? [address, city, state, country, ` (${pincode})`]
              : [address, city, state, country];
            const valid_address = address_details
              .filter((value) => value !== null && value.length > 0)
              .join(",");
            // console.log(valid_address);
            return (
              <tr key={_id}>
                <td>{name}</td>
                <td>
                  {dobOrAge}y / {sex[0]}
                </td>
                <td>{mobile_no}</td>
                <td>{valid_address}</td>
                <td>{issued_id}</td>
                <td>{id_type}</td>
                {gurdian_name ? (
                  <td>
                    {gurdian_name} ({gurdian_relation})
                  </td>
                ) : (
                  <td></td>
                )}

                <td>{nationality}</td>
                <td>{marital_status}</td>
                <td>{blood_group}</td>
                <td>{religion}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;

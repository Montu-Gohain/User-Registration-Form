import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:6060/api/users";

const UserTable = () => {
  const [userData, setUserData] = useState([]);

  userData && console.log(userData);
  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((res) => setUserData(res.data.data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div>
      {userData?.map((user) => {
        return <p key={user._id}>{user.name}</p>;
      })}
    </div>
  );
};

export default UserTable;

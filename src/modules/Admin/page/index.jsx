import axiosInstance from "../../../utils/axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminIndexPage = () => {
  const [admins, setAdmins] = useState([]);
  const navigate = useNavigate();

  const getAdminsCall = async () => {
    return axiosInstance.get("/admins");
  };

  const fetchData = async () => {
    try {
      const response = await getAdminsCall();
      // console.log(response.data.data);
      setAdmins(response.data.data);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>hajsdhjadhashd</h1>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
        {admins.map((admin, index) => (
          <tr key={index}>
            <td>{admin.id}</td>
            <td>{admin.name}</td>
            <td>{admin.email}</td>
            <td>
              <button
                onClick={() => navigate("/admin/" + admin.id + "/update")}
              >
                edit
              </button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};
export default AdminIndexPage;

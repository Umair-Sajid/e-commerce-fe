import { ErrorMessage, Field, FormikProvider, useFormik } from "formik";
import { object, string } from "yup";
import axiosInstance from "../../../utils/axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

let adminSchema = object({
  name: string().required(),
  email: string().email().required(),
  password: string().required().min(8).max(25),
});

const AdminUpdatePage = () => {
  let { admin_id } = useParams();
  const getAdminCall = async (id) => {
    return axiosInstance.get("/admin/" + id);
  };
  const fetchData = async () => {
    try {
      const response = await getAdminCall(admin_id);
      console.log(response.data.data);
      delete response.data.data.password;
      formik.setValues(response.data.data);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  const updateAdminCall = async (data) => {
    return axiosInstance.post("/admin", data);
  };

  const handleAdminUpdate = async (data) => {
    try {
      const response = await updateAdminCall(data);
      toast.success(response.data.message);
      formik.resetForm();
    } catch (error) {
      toast.error(
        error.response?.data?.message
        // error.response && error.response.data && error.response.data.message
      );
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: adminSchema,
    onSubmit: (values) => handleAdminUpdate(values),
  });

  useEffect(() => {
    fetchData();
  }, [admin_id]);
  return (
    <FormikProvider value={formik}>
      <form>
        <label>Name</label>
        <Field name="name" />
        <ErrorMessage name="name" />
        <br />

        <label>Email</label>
        <Field name="email" />
        <ErrorMessage name="email" />
        <br />

        <label>Password</label>
        <Field name="password" />
        <ErrorMessage name="password" />
        <br />
        <button onClick={formik.handleSubmit}>Create</button>
      </form>
    </FormikProvider>
  );
};
export default AdminUpdatePage;

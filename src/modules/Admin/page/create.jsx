import { ErrorMessage, Field, FormikProvider, useFormik } from "formik";
import { object, string } from "yup";
import axiosInstance from "../../../utils/axios";
import { toast } from "react-toastify";

let adminSchema = object({
  name: string().required(),
  email: string().email().required(),
  password: string().required().min(8).max(25),
});

const AdminCreatePage = () => {
  const createAdminCall = async (data) => {
    return axiosInstance.post("/admin", data);
  };

  const handleAdminCreate = async (data) => {
    try {
      const response = await createAdminCall(data);
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
    onSubmit: (values) => handleAdminCreate(values),
  });

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
export default AdminCreatePage;

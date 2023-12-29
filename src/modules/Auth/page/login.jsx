import { object, string } from "yup";
import { ErrorMessage, Field, FormikProvider, useFormik } from "formik";
import { useEffect } from "react";

const LoginPage = () => {
  const loginSchema = object({
    email: string()
      .email("Invalid email address")
      .required("Email is required"),
    password: string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => console.log("This is login values", values),
  });

  const { values } = formik;

  useEffect(() => console.log("values", values), [values]);

  return (
    <FormikProvider value={formik}>
      <div className="bg-gradient-to-br from-blue-500 via-orange-400 to-yellow-300 h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-md shadow-md w-full md:w-96">
          <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <Field
                type="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-indigo-300"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <Field
                type="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-indigo-300"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="button"
              onClick={formik.handleSubmit}
              className="bg-gradient-to-br from-blue-500 via-orange-400 to-yellow-300 text-white p-3 rounded-md hover:shadow-md focus:outline-none focus:ring focus:border-indigo-300 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </FormikProvider>
  );
};

export default LoginPage;

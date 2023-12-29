import { Routes, Route } from "react-router-dom";
import AdminLayout from "./layout/adminLayout";
import LoginPage from "./modules/Auth/page/login";
import ProductIndexPage from "./modules/Product/page";
import ProductCreatePage from "./modules/Product/page/create";
import NotFoundPage from "./page/notFound";
import IntroductionPage from "./page/introPage";
import SignUpPage from "./modules/Auth/page/signup";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/product/index" element={<ProductIndexPage />} />
      <Route path="/product/create" element={<ProductCreatePage />} />
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<IntroductionPage />} />
        {/* Add more nested routes within AdminLayout if needed */}
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;

import { HashRouter, Routes, Route } from "react-router";
// Layout
import DefaultLayout from "@/layouts/DefaultLayout";
// Page
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import ModalDemo from "@/pages/ModalDemo";
import ScrollDemo from "@/pages/ScrollDemo";
import GoToTop from "@/components/GoToTop";

// import Header from "@/layouts/DefaultLayout/components/Header";
function AppRouter() {
  return (
    <HashRouter>
      <GoToTop />
      <Routes>
        {/* DefaultLayout layout */}
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/modal-demo" element={<ModalDemo />} />
          <Route path="/scroll-demo" element={<ScrollDemo />} />
          <Route />
        </Route>
      </Routes>
    </HashRouter>
  );
}
export default AppRouter;

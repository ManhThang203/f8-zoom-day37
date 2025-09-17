import { HashRouter, Routes, Route } from "react-router";
// Layout
import DefaultLayout from "@/layouts/DefaultLayout";
// Page
import Home from "@/page/Home";
import Profile from "@/page/Profile";
import ModalDemo from "@/page/ModalDemo";
import ScrollDemo from "@/page/ScrollDemo";

// import Header from "@/layouts/DefaultLayout/components/Header";
function AppRouter() {
  return (
    <HashRouter>
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

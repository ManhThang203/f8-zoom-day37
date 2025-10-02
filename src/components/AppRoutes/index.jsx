// React
import { HashRouter, Routes, Route } from "react-router";
// Layout
import DefaultLayout from "@/layouts/DefaultLayout";
// Page
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import ModalDemo from "@/pages/ModalDemo";
import ScrollDemo from "@/pages/ScrollDemo";
import GoToTop from "@/components/GoToTop";
import PerformanceDemo from "@/pages/PerformanceDemo";
import FocusDemo from "@/pages/FocusDemo";
import HOCDemo from "@/pages/HOCDemo";
import RenderPropsDemo from "@/pages/RenderPropsDemo";
import CustomHooksDemo from "@/pages/CustomHooksDemo";

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
          <Route path="/performance-demo" element={<PerformanceDemo />} />
          <Route path="/focus-demo" element={<FocusDemo />} />
          <Route path="/hoc-demo" element={<HOCDemo />} />
          <Route path="/render-props-demo" element={<RenderPropsDemo />} />
          <Route path="/custom-hooks-demo" element={<CustomHooksDemo />} />
          <Route />
        </Route>
      </Routes>
    </HashRouter>
  );
}
export default AppRouter;

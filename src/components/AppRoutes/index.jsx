import { HashRouter, Routes, Route } from "react-router";
// Layout
import DefaultLayout from "@/layouts/DefaultLayout";

import Header from "@/layouts/DefaultLayout/components/Header";
function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        {/* DefaultLayout layout */}
        <Route element={<DefaultLayout />}>
          <Route index element={<Header />} />
          <Route />
        </Route>
      </Routes>
    </HashRouter>
  );
}
export default AppRouter;

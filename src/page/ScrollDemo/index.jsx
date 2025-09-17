// Component
import Header from "@/layouts/DefaultLayout/components/Header";
import Navigation from "@/layouts/DefaultLayout/components/Navigation";
function scrollDemo() {
  return (
    <>
      <Header />
      <Navigation />
      <h1
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.7rem",
          fontWeight: 550,
        }}
      >
        scrollDemo
      </h1>
    </>
  );
}
export default scrollDemo;

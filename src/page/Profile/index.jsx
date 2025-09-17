// Component
import Header from "@/layouts/DefaultLayout/components/Header";
import Navigation from "@/layouts/DefaultLayout/components/Navigation";
function Profile() {
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
        Profile
      </h1>
    </>
  );
}
export default Profile;

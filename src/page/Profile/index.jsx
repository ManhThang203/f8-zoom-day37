import Header from "@/layouts/DefaultLayout/components/Header";
function Profile() {
  return (
    <>
      <Header />
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

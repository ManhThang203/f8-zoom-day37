// Component
import Loading from "@/components/Loading";
import Header from "@/layouts/DefaultLayout/components/Header";
import Navigation from "@/layouts/DefaultLayout/components/Navigation";
function Home() {
  return (
    <>
      <Header />
      <Navigation />
      <Loading />
    </>
  );
}
export default Home;

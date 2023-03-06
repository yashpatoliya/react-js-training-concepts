import { Outlet } from "react-router";
import Navigation from "../components/Navigation";
import NewNavigation from "../components/NewNavigation";
function HomeRoot() {
  return (
    <>
      <Navigation/>
      <main><Outlet/></main>
      <NewNavigation/>
    </>
  );
}

export default HomeRoot;

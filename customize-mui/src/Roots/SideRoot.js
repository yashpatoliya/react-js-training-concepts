import { Outlet, useLoaderData, useRouteLoaderData } from "react-router";
import Navigation from "../components/BackNavigation";

function SideRoot(props) {
    console.log(Outlet);

  return (
    <>
      <Navigation title={Outlet.name} />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default SideRoot;

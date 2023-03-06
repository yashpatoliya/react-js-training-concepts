import { useHistory, useLocation } from "react-router";
import { matchRoutes, renderRoutes } from "react-router-config";
import "./App.css";
import Login from "./view/Login";
import { Suspense, useEffect } from "react";
import Dashboard from "./view/Dashboard/Dashboard";

function App(props) {
  const history = useHistory();
  const LoggedIn = JSON.parse(localStorage.getItem("user"));
  const location = useLocation();
  const { route } = props;
  let currentPath = matchRoutes(route.routes, location.pathname);
  let routeD = currentPath[0];

  useEffect(() => {
    if (LoggedIn) {
      history.push("/home");
    } else {
      history.push("/");
    }
  }, [LoggedIn]);
  // useEffect(()=>{
  // const logged = localStorage.getItem('user');
  // if(!logged){
  //   history.push('/')
  // }
  // if(logged){
  //   if(location.pathname == '/'){
  //     history.path('/home')
  //   }
  // }
  // if(location.pathname == '/' && logged){
  //   history.pathname('/home')
  // }
  // if(location.pathname == '/' && !logged){
  //   history.push('/')
  // }
  // if(location.pathname != "/" && !LoggedIn){
  //   history.push('/home');
  // }
  // if(location.pathname == "/" && LoggedIn){
  //   history.push('/home')
  // }

  // },[])
  return (
    <div>
      {location.pathname === '/' ? (
        <div className="center">
          <Login />
        </div>
      ) : (
        <Dashboard {...routeD}>
          <Suspense fallback={() => "loading..."}>
            {renderRoutes(route.routes)}
          </Suspense>
        </Dashboard>
      )}
    </div>
  );
}

export default App;

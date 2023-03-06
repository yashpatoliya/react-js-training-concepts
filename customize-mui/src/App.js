
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRoot from "./Roots/HomeRoot";
import Home from "./components/Home";
import SideRoot from "./Roots/SideRoot";
import Quiz from "./components/Quiz";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoot />,
    errorElement : 'error found',
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path:'/quiz',
    element: <SideRoot/>,
    id: 'title-page',
    children : [
      {
        index: true,
        element : <Quiz title='hello'/>,
        loader : ()=>{
          return 'English Grammer'
        }
      }
    ]
  }
]);
function App(props) {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

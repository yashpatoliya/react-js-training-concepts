import Home from "./view/Home";
import App from "./App";
import About from "./view/About";
import Blog from "./view/Blog";

const routes = [
  {
    component: App,
    routes: [
      {
        path: "/home",
        exact: true,
        index:true,
        component: Home,
        label: 'Home',
      },
      {
        path: "/about",
        exact: true,
        component: About,
        label: 'About',
      },
      {
        path: "/blog",
        exact: true,
        component: Blog,
        label: 'Blog',
      },
    ],
  },
];

export default routes;

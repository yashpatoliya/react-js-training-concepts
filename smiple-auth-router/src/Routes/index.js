import App from "../App";
import Login from "../view/Login";
const routes = [
    {
        component: App,
        routes : [
            {
                path : '/',
                component: Login,
            },
        ]
    }
];

export default routes;
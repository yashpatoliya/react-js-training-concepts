import {
  RouterProvider,
  // createRoutesFromElements,
  createBrowserRouter,
  // Route,
} from "react-router-dom";
import RootLayout from "./pages/root";
import HomePage from "./pages/home";
import EventPage from "./pages/event";
import EditEventPage from "./pages/EditEventPage";
import NewEventPage from "./pages/NewEventPage";
import EventDetailsPage from "./pages/EventDetailPage";
// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/events",
    element: <RootLayout />,
    children: [
      {
        path : "/events",
        element : <EventPage/>
      },
      {
        path: "/events/event-deatils",
        element: <EventDetailsPage />,
      },
      {
        path: "/events/edit-event",
        element: <EditEventPage />,
      },
      {
        path: "/events/new-event",
        element: <NewEventPage />,
      },
    ],
  },
]);
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/events" element={<EventPage />} />
//   </Route>
// );
// const router = createBrowserRouter(routeDefinitions);
function App() {
  return (
    <>
      {/* <MainNavigation /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;

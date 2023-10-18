import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage, { loader as eventLoader } from "./pages/EventsPage";
import EventDetailPage, {
  loader as eventDetailLoader, action as deleteEventAction,
} from "./pages/EventDetailPage";
// import NewEventPage, {action as newEventAction} from "./pages/NewEventPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import RootLayout from "./pages/Root";
import EventsRoot from "./pages/EventsRoot";
import Error from "./pages/Error";
import {action as manipulateEventAction} from "./components/EventForm";
// import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';


function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "events",
          element: <EventsRoot />,
          children: [
            {
              index: true,
              element: <EventsPage />,
              // loader: async () => {
              //   const response = await fetch("http://localhost:8080/events");

              //   if (!response.ok) {

              //   } else {
              //     const resData = await response.json();
              //     return resData.events;
              //   }
              // },
              loader: eventLoader,
            },
            {
              path: ":eventId",
              id: "events-detail",
              loader: eventDetailLoader,
              children: [
                {
                  index: true,
                  element: <EventDetailPage />, action: deleteEventAction,
                },
                { path: "edit", element: <EditEventPage />, action:manipulateEventAction},
              ],
            },
            { path: "new", element: <NewEventPage />, action:manipulateEventAction},
          ],
        },
      ],
    },
  ]);
  return (
    <div>
      {" "}
      <RouterProvider router={route} />
    </div>
  );
}

export default App;

// import { useEffect, useState } from 'react';
import { json, useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [fetchedEvents, setFetchedEvents] = useState();
//   const [error, setError] = useState();

//   useEffect(() => {
//     async function fetchEvents() {
//       setIsLoading(true);
      // const response = await fetch('http://localhost:8080/events');

      // if (!response.ok) {
      //   setError('Fetching events failed.');
      // } else {
      //   const resData = await response.json();
      //   setFetchedEvents(resData.events);
      // }  
      // IN this situation first the component render then data is fetched if we use loader function when defining router that will first the data then render the component.
  //     setIsLoading(false);
  //   }

  //   fetchEvents();
  // }, []);

  const data=useLoaderData();
  const events = data.events;

  // const navigator = useNavigation()
  return (
    <>
      {/* <div style={{ textAlign: 'center' }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div> */}
      <EventsList events={events} />
      {/* {navigator.state==='loading' && <p>Loading...</p>} */}
    </>
  );
}

export default EventsPage;

export async function loader() {
    const response = await fetch("http://localhost:8080/events");
    if (!response.ok) {
      // throw new Response(JSON.stringify({message: "Error loading events"}),{status: 500});
      throw json({message: "Error loading events"},{status: 500})
    } else {
      // const resData = await response.json();
      // return resData.events;
      return response;
    }
  }
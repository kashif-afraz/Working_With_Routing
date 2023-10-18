import React from "react";
import EventItem from "../components/EventItem";
import { json, redirect, useRouteLoaderData } from "react-router-dom";

const EventDetailPage = () => {
  // const params = useParams();
  const data = useRouteLoaderData("events-detail");
  return (
    <>
      {/* // <h1>Event Detail Page</h1>
    // <p>{params.eventId}</p> */}
      <EventItem event={data.event}/>
    </>
  );
};

export default EventDetailPage;

export async function loader({request, params}) {
  const id = params.eventId;
  const reponse = await fetch("http://localhost:8080/events/" + id);
  if (!reponse.ok) {
    throw json(
      { message: "Could not fetch details for selected events" },
      { status: 500 }
    );
  } else{
    return reponse;
  }
}

export async function action({params, request}){
  const eventId = params.eventId;
  const reponse = await fetch("http://localhost:8080/events/" + eventId,
  {method:request.method},);
  if(!reponse.ok){
    throw json({message:'Could not delete details for selected events'}, {status: 500});
  }
  else{
    return redirect('/events');
  }
}

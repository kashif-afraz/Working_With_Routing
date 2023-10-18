import React from "react";
import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";
const Error = () => {
  const error = useRouteError(); //it is based on status code

  let title = "An Error Occured!!";
  let message = "Something went wrong";

  if (error.status === 500) {
    // title = JSON.parse(error.data).message;
    title = error.data.message;
  }

  if (error.status === 404) {
    title = "Not Found!!";
    message = "Couldn't Find a resource or Page!";
  }

  return (
    <>
      <MainNavigation/>
        <PageContent title={title}>
          <p>{message}</p>
        </PageContent>
    </>
  );
};

export default Error;

import { createBrowserRouter } from "react-router-dom";
import { MainContainer } from "../containers/main-container";
import { Locations } from "../constants";
import { ErrorPage } from "../containers/error";
import { SectionOne } from "../containers/1990";
import { SectionTwo } from "../containers/2000";
import { SectionFour } from "../containers/2020";
import { SectionThree } from "../containers/2010";
import { LandingPage } from "../containers/landing-page";

export const webRouter = createBrowserRouter([
  {
    path: Locations.home,
    element: <MainContainer />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <LandingPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: Locations["1990s"],
        element: <SectionOne />,
        errorElement: <ErrorPage />,
      },
      {
        path: Locations["2000s"],
        element: <SectionTwo />,
        errorElement: <ErrorPage />,
      },
      {
        path: Locations["2010s"],
        element: <SectionThree />,
        errorElement: <ErrorPage />,
      },
      {
        path: Locations["2020s"],
        element: <SectionFour />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "*",
    element: <MainContainer />,
    errorElement: <ErrorPage />,
  },
]);

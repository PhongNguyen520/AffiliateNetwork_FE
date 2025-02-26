import PublisherOverview from "../pages/PublisherOverview/PublisherOverview";
import PublisherLayout from "../layouts/Publisher/PublisherLayout";

export const publisherRoutes = [
  {
    path: "/publisher",
    element: <PublisherLayout />, 
    children: [
      { path: "overview", element: <PublisherOverview /> }
    ],
  },
];

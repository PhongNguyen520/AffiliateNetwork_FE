import AdvertiserLayout from "../components/AdvertiserLayout/AdvertiserLayout";
import OverviewAdvertiser from "../pages/advertiser/Overview/Overview";
import CampaignAdvertiser from "../pages/advertiser/Overview/Overview";


export const advertiserRoutes = [
  {
    path: "/advertiser",
    element: <AdvertiserLayout />, 
    children: [
      { path: "overview", element: <OverviewAdvertiser /> },
      { path: "campaigns", element: <OverviewAdvertiser /> }
    ],
  },
];

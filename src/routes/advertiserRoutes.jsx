import AdvertiserLayout from "../components/AdvertiserLayout/AdvertiserLayout";
import config from "../config";
import Overview from "../pages/advertiser/Overview/Overview";

export const advertiserRoutes = [
  {  path: config.routes.overviewAdvertiser, component: Overview, layout: AdvertiserLayout},
];

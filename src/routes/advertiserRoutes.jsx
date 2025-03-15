import AdvertiserLayout from "../layouts/Advertiser/AdvertiserLayout";
import config from "../config";
import Campaigns from "../pages/advertiser/Campaigns/Campaigns";
import Overview from "../pages/advertiser/Overview/Overview";
import CreateCampaign from "../pages/advertiser/Campaigns/CreateCampaign/CreateCampaign";

export const advertiserRoutes = [
  {  path: config.routes.overviewAdvertiser, component: Overview, layout: AdvertiserLayout},
  {  path: config.routes.campaigns, component: Campaigns, layout: AdvertiserLayout},
  {  path: config.routes.createCampaign, component: CreateCampaign, layout: AdvertiserLayout},
];

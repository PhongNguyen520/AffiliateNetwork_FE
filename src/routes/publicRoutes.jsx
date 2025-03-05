import HomePage from "../pages/Home/HomePage";
import config from "../config";
import CampaignList from "../pages/CampaignList/CampaignList";
import CampaignDetailsPage from "../pages/advertiser/Campaigns/CampaignsDetails/CampaignsDetails";
import Unauthorized from "../pages/unauthorized/Unauthorized";

export const publicRoutes = [
  {  path: config.routes.home, component: HomePage, layout: null},
  {  path: config.routes.campaigns, component: CampaignList, layout: null},
  {  path: config.routes.campaignDetail, component: CampaignDetailsPage, layout: null},
  { path: config.routes.unauthorized, component: Unauthorized, layout:  null },
];

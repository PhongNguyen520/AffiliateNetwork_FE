import HomePage from "../pages/Home/HomePage";
import config from "../config";
import CampaignList from "../pages/CampaignList/CampaignList";
import CampaignDetailsPage from "../pages/advertiser/Campaigns/CampaignsDetails/CampaignsDetails";
import Unauthorized from "../pages/unauthorized/Unauthorized";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";

export const publicRoutes = [
  { path: config.routes.login, component: Login, layout:  null },
  { path: config.routes.register, component: Register, layout:  null },
  {  path: config.routes.home, component: HomePage, layout: null},
  {  path: config.routes.listCampaigns, component: CampaignList, layout: null},
  {  path: config.routes.campaignDetail, component: CampaignDetailsPage, layout: null},
  { path: config.routes.unauthorized, component: Unauthorized, layout:  null },
];

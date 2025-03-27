import AdvertiserLayout from "../layouts/Advertiser/AdvertiserLayout";
import config from "../config";
import Campaigns from "../pages/advertiser/Campaigns/Campaigns";
import Overview from "../pages/advertiser/Overview/Overview";
import CreateCampaign from "../pages/advertiser/Campaigns/CreateCampaign/CreateCampaign";
import ListPublisher from "../pages/advertiser/ListPublisher/ListPublisher";
import Success from "../pages/advertiser/VnPay/Success/Success";
import Failed from "../pages/advertiser/VnPay/Failed/Failed";
// import AdvertiserList from "../pages/advertiser/List/AdvertiserList"

export const advertiserRoutes = [

  {  path: config.routes.overviewAdvertiser, component: Overview, layout: AdvertiserLayout},
  {  path: config.routes.campaigns, component: Campaigns, layout: AdvertiserLayout},
  {  path: config.routes.createCampaign, component: CreateCampaign, layout: AdvertiserLayout},

  // { path: config.routes.list, component: AdvertiserList, layout: AdvertiserLayout },
  { path: config.routes.listPublisherAdvertiser, component: ListPublisher, layout: AdvertiserLayout },
  { path: config.routes.vnpayFailed, component: Failed, layout: null },
  { path: config.routes.vnpaySuccess, component: Success, layout: null },
];

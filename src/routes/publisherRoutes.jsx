import PublisherOverview from "../pages/PublisherOverview/PublisherOverview";
import PublisherLayout from "../layouts/Publisher/PublisherLayout";
import config from "../config";
import CampaignList from "../pages/CampaignList/CampaignList";
import CampaignDetailsPage from "../pages/advertiser/Campaigns/CampaignsDetails/CampaignsDetails";

export const publisherRoutes = [
  {  path: config.routes.overviewPublisher, component: PublisherOverview, layout: PublisherLayout},
  {  path: config.routes.campaigns, component: CampaignList, layout: null},
  {  path: config.routes.campaignDetail, component: CampaignDetailsPage, layout: null},
];

import config from "../config";
import AdminLayout from "../layouts/Admin/AdminLayout";
import CampaignList from "../pages/admin/Campaigns/CampaignList";
import Overview from "../pages/admin/Overview/Overview";

export const adminRoutes = [
  {  path: config.routes.overviewAdmin, component: Overview, layout: AdminLayout},
  {  path: config.routes.listCampaignsAdmin, component: CampaignList, layout: AdminLayout},
];

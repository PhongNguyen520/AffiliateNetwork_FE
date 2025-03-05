import config from "../config";
import Overview from "../pages/admin/Overview/Overview";

export const adminRoutes = [
  {  path: config.routes.overviewAdmin, component: Overview, layout: null},
];

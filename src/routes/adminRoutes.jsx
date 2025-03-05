import config from "../config";
import AdminLayout from "../layouts/Admin/AdminLayout";
import Overview from "../pages/admin/Overview/Overview";

export const adminRoutes = [
  {  path: config.routes.overviewAdmin, component: Overview, layout: AdminLayout},
];

import config from "../config";
import AdminLayout from "../layouts/Admin/AdminLayout";
import Overview from "../pages/admin/Overview/Overview";
import ListPublisher from "../pages/admin/ListPublisher/ListPublisher";

export const adminRoutes = [
  { path: config.routes.overviewAdmin, component: Overview, layout: AdminLayout },
  { path: config.routes.listPublisherAmin, component: ListPublisher, layout: AdminLayout },
];

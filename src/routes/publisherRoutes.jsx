import PublisherOverview from "../pages/publisher/Overview/Overview";
import PublisherLayout from "../layouts/Publisher/PublisherLayout";
import config from "../config";
import PublisherConversion from "../pages/publisher/Conversion/Conversion";
import HomePage from "../pages/Home/HomePage";
import Statistic from "../pages/publisher/Statistic/Statistic";

export const publisherRoutes = [
  {  path: config.routes.home, component: HomePage, layout: PublisherLayout},
  {  path: config.routes.overviewPublisher, component: PublisherOverview, layout: PublisherLayout},
  {  path: config.routes.publisherConversion, component: PublisherConversion, layout: PublisherLayout},
  {  path: config.routes.statistic, component: Statistic, layout: PublisherLayout},
];

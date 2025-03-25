import PublisherOverview from "../pages/publisher/Overview/Overview";
import PublisherLayout from "../layouts/Publisher/PublisherLayout";
import config from "../config";
import Statistic from "../pages/publisher/Statistic/Statistic";
import CreateLinkStep1 from "../pages/publisher/CreateLink/Step1/CreateLinkStep1";
import CreateLinkStep3 from "../pages/publisher/CreateLink/Step3/CreateLinkStep3";
import CreateLinkStep2 from "../pages/publisher/CreateLink/Step2/CreateLinkStep2";
import CreateLinkStep4 from "../pages/publisher/CreateLink/Step4/CreateLinkStep4";
import RevenueReport from "../pages/publisher/Revenue/Revenue";
import TrafficReport from "../pages/publisher/TrafficReport/TrafficReport";
import ManageLink from "../pages/publisher/ManageLink/ManageLink";
import ListLink from "../pages/publisher/ManageLink/ListLink/ListLink";
import Conversion from "../pages/publisher/Conversion/Conversion";

export const publisherRoutes = [
  { path: config.routes.overviewPublisher, component: PublisherOverview, layout: PublisherLayout },
  { path: config.routes.statistic, component: Statistic, layout: PublisherLayout },
  { path: config.routes.createLinkStep1, component: CreateLinkStep1, layout: PublisherLayout },
  { path: config.routes.createLinkStep2, component: CreateLinkStep2, layout: PublisherLayout },
  { path: config.routes.createLinkStep3, component: CreateLinkStep3, layout: PublisherLayout },
  { path: config.routes.createLinkStep4, component: CreateLinkStep4, layout: PublisherLayout },
  { path: config.routes.revenue, component: RevenueReport, layout: PublisherLayout },
  { path: config.routes.trafficReport, component: TrafficReport, layout: PublisherLayout },
  { path: config.routes.manageLink, component: ManageLink, layout: PublisherLayout },
  { path: config.routes.linkOfCampaign, component: ListLink, layout: PublisherLayout },
  { path: config.routes.publisherConversion, component: Conversion, layout: PublisherLayout },
];

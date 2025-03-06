import PublisherOverview from "../pages/publisher/Overview/Overview";
import PublisherLayout from "../layouts/Publisher/PublisherLayout";
import config from "../config";
import PublisherConversion from "../pages/publisher/Conversion/Conversion";
import HomePage from "../pages/Home/HomePage";
import Statistic from "../pages/publisher/Statistic/Statistic";
import CreateLinkStep1 from "../pages/publisher/CreateLink/Step1/CreateLinkStep1";
import CreateLinkStep3 from "../pages/publisher/CreateLink/Step3/CreateLinkStep3";
import CreateLinkStep2 from "../pages/publisher/CreateLink/Step2/CreateLinkStep2";
import CreateLinkStep4 from "../pages/publisher/CreateLink/Step4/CreateLinkStep4";

export const publisherRoutes = [
  {  path: config.routes.home, component: HomePage, layout: PublisherLayout},
  {  path: config.routes.overviewPublisher, component: PublisherOverview, layout: PublisherLayout},
  {  path: config.routes.publisherConversion, component: PublisherConversion, layout: PublisherLayout},
  {  path: config.routes.statistic, component: Statistic, layout: PublisherLayout},
  {  path: config.routes.createLinkStep1, component: CreateLinkStep1, layout: PublisherLayout},
  {  path: config.routes.createLinkStep2, component: CreateLinkStep2, layout: PublisherLayout},
  {  path: config.routes.createLinkStep3, component: CreateLinkStep3, layout: PublisherLayout},
  {  path: config.routes.createLinkStep4, component: CreateLinkStep4, layout: PublisherLayout},
];

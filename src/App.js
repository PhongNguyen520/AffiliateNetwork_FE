import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publisherRoutes } from "./routes/publisherRoutes";
import { advertiserRoutes, publicRoutes } from "./routes";
import "./App.css";
// import AdvertiserLayout from "./components/AdvertiserLayout/AdvertiserLayout";
// import AuthPage from "./pages/Auth/AuthPage";
// import CampaignList from "./pages/CampaignList/CampaignList";
// import HomePage from "./pages/Home/HomePage";
// import ProfilePublisher from "./pages/ProfilePublisher/ProfilePublisher";
// import Campaigns from "./pages/advertiser/Campaigns/Campaigns";
// import Overview from "./pages/admin/Overview/Overview";
import { campaignsRoutes } from "./routes/campaignsRoutes";

const App = () => {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}

        {publisherRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children &&
              route.children.map((child, idx) => (
                <Route key={idx} path={child.path} element={child.element} />
              ))}
          </Route>
        ))}

        {advertiserRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children &&
              route.children.map((child, idx) => (
                <Route key={idx} path={child.path} element={child.element} />
              ))}
          </Route>
        ))}
        {campaignsRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children &&
              route.children.map((child, idx) => (
                <Route key={idx} path={child.path} element={child.element} />
              ))}
          </Route>
        ))}
      </Routes>
    </Router>
  );
};

export default App;

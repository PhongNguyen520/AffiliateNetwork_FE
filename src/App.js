import React, { Fragment, useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { publisherRoutes } from "./routes/publisherRoutes";
import { adminRoutes, advertiserRoutes, publicRoutes } from "./routes";
import config from "./config";
import RequireAuth from "./pages/requireAuth/RequireAuth";
import { AuthContext } from "./providers/AuthProvider";
import Cookies from "js-cookie";

const AppContent = () => {
  const { auth, loading  } = useContext(AuthContext);
  const accessToken = Cookies.get("access_token");

  const renderRoute = (route, index) => {
    const Layout = route.layout === null ? Fragment : route.layout;
    const Page = route.component;

    return (
      <Route
        key={index}
        path={route.path}
        element={
          <Layout>
            <Page />
          </Layout>
        }
      />
    );
  };

  const getRoleRoutes = () => {
    const roleRoutesMap = {
      Publisher: publisherRoutes,
      Advertiser: advertiserRoutes,
      Admin: adminRoutes,
    };
    return roleRoutesMap[auth?.roleName] || [];
  };

  if (accessToken && loading) {
    return <div></div> 
  }


  return (
    <Routes>
      {publicRoutes.map(renderRoute)}
    
      {accessToken && auth?.roleName && (
        <Route element={<RequireAuth allowedRoles={[auth?.roleName]}/>}>
          {getRoleRoutes().map(renderRoute)}
        </Route>
      )}

      <Route
        path="/"
        element={
          <Navigate
            to={
              accessToken
                ? auth?.roleName === "Admin"
                  ? config.routes.overviewAdmin
                  : auth?.roleName === "Advertiser"
                  ? config.routes.overviewAdvertiser
                  : config.routes.home
                : config.routes.home
            }
            replace
          />
        }
      />


      <Route path="*" element={<Navigate to="/unauthorized" replace />} />
    </Routes>
  );
}

const App = () => {

  return (
    <div className="App">
    <Router>
      <AppContent />
    </Router>
  </div>
  );
};

export default App;

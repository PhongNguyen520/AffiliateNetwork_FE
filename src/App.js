import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { publisherRoutes } from "./routes/publisherRoutes";
import { adminRoutes, advertiserRoutes, publicRoutes } from "./routes";
import config from "./config";
import RequireAuth from "./pages/requireAuth/RequireAuth";

const AppContent = () => {
  const authToken = true;
var user =  {
  roleName: "Publisher",
};
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
    return roleRoutesMap[user?.roleName] || [];
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigate
            to={
              authToken
                ? user?.roleName === "Publisher"
                  ? config.routes.overviewPublisher
                  : user?.roleName === "Advertiser"
                  ? config.routes.overviewAdvertiser
                  : config.routes.overviewAdmin
                : config.routes.home
            }
            replace
          />
        }
      />

      {publicRoutes.map(renderRoute)}

      {authToken && (
        <Route element={<RequireAuth allowedRoles={[user?.roleName]} roleName={user.roleName}/>}>
          {getRoleRoutes().map(renderRoute)}
        </Route>
      )}

      <Route path="*" element={<Navigate to="/unauthorized" replace />} />
    </Routes>
  );
}

const App = () => {

  return (
    // <Router>
    //   <Routes>
    //     {publicRoutes.map((route, index) => (
    //       <Route key={index} path={route.path} element={route.element} />
    //     ))}
    //     {/* Publisher Routes (Có Layout) */}
    //     {publisherRoutes.map((route, index) => (
    //       <Route key={index} path={route.path} element={route.element}>
    //         {route.children &&
    //           route.children.map((child, idx) => (
    //             <Route key={idx} path={child.path} element={child.element} />
    //           ))}
    //       </Route>
    //     ))}

    //     {advertiserRoutes.map((route, index) => (
    //       <Route key={index} path={route.path} element={route.element}>
    //         {route.children &&
    //           route.children.map((child, idx) => (
    //             <Route key={idx} path={child.path} element={child.element} />
    //           ))}
    //       </Route>
    //     ))}
        
    //   </Routes>
    // </Router>
    <div className="App">
    <Router>
      <AppContent />
    </Router>
  </div>
  );
};

export default App;

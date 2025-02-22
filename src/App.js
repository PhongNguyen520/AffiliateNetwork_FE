import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publisherRoutes } from "./routes/publisherRoutes";
import { publicRoutes } from "./routes";

const App = () => {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        {/* Publisher Routes (Có Layout) */}
        {publisherRoutes.map((route, index) => (
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

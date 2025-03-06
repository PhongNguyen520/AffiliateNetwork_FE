import { useContext } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
// import { ModalContext } from '../../components/ModalProvider/ModalProvider';

const RequireAuth = ({ allowedRoles, roleName }) => {
  //   const { user } = useContext(ModalContext);

  var user = {
    roleName: "Publisher",
  };
  const location = useLocation();

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }


  if (!allowedRoles.includes(roleName)) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default RequireAuth;
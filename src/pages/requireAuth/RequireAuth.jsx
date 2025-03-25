import { useContext } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
// import { ModalContext } from '../../components/ModalProvider/ModalProvider';

const RequireAuth = ({ allowedRoles }) => {
    const { auth, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div></div> 
  }

  if (!auth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }


  if (!allowedRoles.includes(auth.roleName)) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default RequireAuth;
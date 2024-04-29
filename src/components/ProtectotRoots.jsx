import { Navigate } from "react-router-dom";

function ProtectotRoots({ children, user }) {
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectotRoots;

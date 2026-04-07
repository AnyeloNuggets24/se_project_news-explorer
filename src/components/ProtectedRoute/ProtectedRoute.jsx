import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ children, isLoggedIn }) {
  return <Route>{isLoggedIn ? children : <Redirect to="/" />}</Route>;
}

export default ProtectedRoute;

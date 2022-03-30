import { Route, Redirect } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {() => (props.isLoading ? <Preloader /> : props.loggedIn ? <Component {...props} /> : <Redirect to="/" />)}
    </Route>
  );
};

export default ProtectedRoute;

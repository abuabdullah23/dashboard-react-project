import { useEffect, useState } from "react"
import Router from "./router/Router";
import publicRoutes from "./router/routes/publicRoutes";
import { getRoutes } from "./router/routes";
import { useDispatch, useSelector } from "react-redux";
import { get_user_info } from "./redux/Reducers/auth/authReducerSlice";

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);

  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth);

  useEffect(() => {
    const routes = getRoutes();
    setAllRoutes([...allRoutes, routes])
  }, [])

  useEffect(() => {
    if (token) {
      dispatch(get_user_info())
    }
  }, [token])

  return <Router allRoutes={allRoutes} />
}

export default App

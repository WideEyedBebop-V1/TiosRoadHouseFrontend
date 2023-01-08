import { Suspense, useEffect, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Pges */
// import AdminContainer from "./Pages/Admin/AdminContainer";
import NotFound from "./Pages/NotFound";
import AuthContainer from "./Pages/Auth/AuthContainer";
import AccountProfile from "./Pages/User/AccountProfile";
import AccountSettings from "./Pages/User/AccountSetting";

/* Protected Route */
import ProtectedRoute from "./Components/ProtectedRoute";

/* Modals */
import Informative from "./Components/Modal/Informative";
import InputModal from "./Components/Modal/InputModal";
import Notifier from "./Components/Modal/Notifier";

/* Helpers */
import API from "./Helpers/api";
import { getAuth } from "./Helpers/uitils"

/* Redux & Slices */
import { useDispatch } from "react-redux";
import { signin } from "./Features/userSlice";
import { adminSign } from "./Features/adminSlice";
import FullPageLoader from "./Components/ProtectedLoader";

function App() {
  return (
    <div className="App">
    </div>
  )
}

export default App

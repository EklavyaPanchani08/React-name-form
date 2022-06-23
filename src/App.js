import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PrivetRouter, PublicRouter } from "./PrivateRouter";
import Table from "./component/Table";
import Login from "./component/Login";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Routes>

      <Route element={<PrivetRouter />}>
        <Route exact path="/table" element={<Table />} />
      </Route>

      <Route element={<PublicRouter />}>
        <Route exact path="/" element={<Login />} />
      </Route>
    </Routes>
  );
}
export default App;

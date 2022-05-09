import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Pages/Header/Header";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Inventory from "./Pages/Inventory/Inventory";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Login from "./Pages/Login/Login";
import Footer from "./Pages/Footer/Footer";
import SignUp from "./Pages/SignUp/SignUp";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import ItemDetail from "./Pages/ItemDetail/ItemDetail";
import Blogs from "./Pages/Blogs/Blogs";
import NotFound from "./Pages/NotFound/NotFound";
import ManageInventory from "./Pages/ManageInventory/ManageInventory";
import AddNewItem from "./Pages/AddNewItem/AddNewItem";
import MyItem from "./Pages/MyItem/MyItem";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/home" element={<Homepage></Homepage>}></Route>
        <Route
          path="/inventory"
          element={
            // <RequireAuth>
              <Inventory></Inventory>
            // </RequireAuth>
          }
        ></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <ItemDetail></ItemDetail>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage"
          element={
            <RequireAuth>
              <ManageInventory></ManageInventory>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>

        <Route path="/about" element={<AboutUs></AboutUs>}></Route>
        <Route path="/myitem" element={<MyItem></MyItem>}></Route>
        <Route path="/additem" element={<AddNewItem></AddNewItem>}></Route>
        <Route
          path="/inventory/:id"
          element={<ItemDetail></ItemDetail>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

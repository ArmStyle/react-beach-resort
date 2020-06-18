import React from "react";
import "./App.css";

import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      {/*exact ใช้เพื่อกำหนดว่าต้องเป็นตัวใน path เท่านั้น*/}
      <NavBar />   
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />

        {/* ไม่ต้องใส่ path ถ้าเกิด path มีข้อผิดพลาดจะมาที่หน้านี้ทันที */}
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;

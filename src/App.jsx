import React, { useState, useEffect } from "react";
// import styles from "./App.module.css";
import { MainLayout } from "./layouts";
import { ItemListContainerComponent } from "./components";
import { MainRoutes } from "./routes/MainRoutes";

function App() {

  return (
    <MainLayout>
      {/* <div><ItemListContainerComponent /></div> */}
      <MainRoutes />
    </MainLayout>
  );
}

export default App;

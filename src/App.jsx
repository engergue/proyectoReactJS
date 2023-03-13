import React, { useState, useEffect } from "react";
// import styles from "./App.module.css";
import { MainLayout } from "./layouts";
import { ItemListContainerComponent } from "./components";

function App() {

  return (
    <MainLayout>
      <div><ItemListContainerComponent /></div>
    </MainLayout>
  );
}

export default App;

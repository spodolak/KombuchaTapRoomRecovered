import React from "react";
import Header from "./layout/Header.js";
import KegControl from "./KegControl";

function App(){
  return (
    <React.Fragment>
      <Header />
      <KegControl />
    </React.Fragment>
  );
}

export default App;
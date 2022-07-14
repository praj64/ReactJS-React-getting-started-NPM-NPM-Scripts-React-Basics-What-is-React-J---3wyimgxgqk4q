import React, { Component, useState } from "react";
import '../styles/App.css';
import '../Component/Heading';
import '../Component/InputQuery';
import '../Component/SubHeading';
import '../Component/SubmitButton';
const App = () => {
  return (
    <div id="main">
      <Heading />
      <InputQuery />
      <SubHeading />
      <SubmitButton />
    </div>
  )
}

export default App;


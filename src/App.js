import React from "react";
import "./App.css";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import TestErrorBoundary from "./components/TestErrorBoundary"
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<CounterOne />} />
          <Route path="/countertwo" element={<CounterTwo />} />
          <Route path="/testerrorboundary" element={<TestErrorBoundary />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  );
}

export default App;

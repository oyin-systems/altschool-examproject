import React from "react";
import "./App.css";
import Counter from "./components/reducer";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;

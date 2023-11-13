import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./shared/services/session/session";
import AppRouter from "./Router/Routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <AuthProvider>
            <AppRouter />
          </AuthProvider>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

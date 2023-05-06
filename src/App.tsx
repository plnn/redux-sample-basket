import "./App.css";
import HomePage from "./pages/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./pages/account";
import List from "./pages/list";

function App() {
  return (
    <div className="App">
      <HomePage />
      <BrowserRouter>
        <Routes>
          <Route path="account" element={<Account />} />
          <Route path="list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

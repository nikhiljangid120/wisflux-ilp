// ============================================
// Day 6 — App.tsx (Main Entry)
// Wisflux ILP | Nikhil Jangid | 1st June 2026
// ============================================

import { useState } from "react";
import Counter from "./components/Counter";
import UserCard from "./components/UserCard";
import { ThemeProvider } from "./context/ThemeContext";
import LoginForm from "./forms/LoginForm";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState<"counter" | "user" | "form">(
    "counter"
  );

  return (
    <ThemeProvider>
      <div className="app">
        <header className="app-header">
          <h1>Wisflux ILP — React Practice</h1>
          <p>Day 6 & 7: Hooks, Context, Custom Hooks, Forms</p>
        </header>

        {/* Tab Navigation */}
        <nav className="tab-nav">
          <button
            className={activeTab === "counter" ? "tab active" : "tab"}
            onClick={() => setActiveTab("counter")}
          >
            Counter (useState)
          </button>
          <button
            className={activeTab === "user" ? "tab active" : "tab"}
            onClick={() => setActiveTab("user")}
          >
            User Card (useEffect)
          </button>
          <button
            className={activeTab === "form" ? "tab active" : "tab"}
            onClick={() => setActiveTab("form")}
          >
            Login Form
          </button>
        </nav>

        {/* Tab Content */}
        <main className="app-main">
          {activeTab === "counter" && <Counter />}
          {activeTab === "user" && <UserCard userId={1} />}
          {activeTab === "form" && <LoginForm />}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;

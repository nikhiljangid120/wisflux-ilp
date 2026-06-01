// ============================================
// Day 7 — ThemeContext.tsx
// Demonstrates: useContext — solving props drilling
// ============================================

import { createContext, useContext, useState, ReactNode } from "react";

// 1. Define the shape of context
interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

// 2. Create the context with a default value
const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

// 3. Create the Provider component
interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div data-theme={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}

// 4. Custom hook to consume context (cleaner API)
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

// 5. Example component using the context
export function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme(); // no prop drilling!

  return (
    <button onClick={toggleTheme} className="btn btn-grey">
      {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

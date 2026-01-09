import React from "react";
import './App.css';
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [mode, setMode] = React.useState("dark");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: "#4F46E5" },   // Indigo
          secondary: { main: "#06B6D4" }, // Cyan
          background: {
            default: mode === "light" ? "#F8FAFC" : "#0B1221",
            paper: mode === "light" ? "#FFFFFF" : "#111827"
          },
          text: {
            primary: mode === "light" ? "#0F172A" : "#E5E7EB",
            secondary: mode === "light" ? "#334155" : "#9CA3AF"
          }
        },
        shape: { borderRadius: 14 },
        typography: {
          fontFamily: "'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial",
          h3: { fontWeight: 800, letterSpacing: -0.5 },
          h4: { fontWeight: 700, letterSpacing: -0.2 },
          button: { textTransform: "none", fontWeight: 600 }
        },
        shadows: [
          "none",
          "0 1px 2px rgba(0,0,0,0.06)",
          ...Array(23).fill("0 10px 30px rgba(0,0,0,0.08)")
        ]
      }),
    [mode]
  );

  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar mode={mode} onToggle={() => setMode(mode === "light" ? "dark" : "light")} />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}
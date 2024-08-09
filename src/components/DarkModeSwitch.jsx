"use client";
import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function DarkModeSwitch() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div>
      {darkMode ? (
        <MdLightMode
          onClick={() => setDarkMode(false)}
          className="text-4xl cursor-pointer hover:text-red-600"
        />
      ) : (
        <MdDarkMode
          onClick={() => setDarkMode(true)}
          className="text-4xl cursor-pointer hover:text-red-600"
        />
      )}
    </div>
  );
}

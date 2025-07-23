import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  // For the states
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Use effects to store the data of the theme into the storage

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []); // Returning the empty dependency array because it runs for  1 time

  // Function to toggle the theme
  const toggleTheme = () => {
    if (isDarkMode) {
      // Removing the bg for the change
      document.documentElement.classList.remove("dark");

      //Storing the data into the dark mode
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      // Adding the class for the bg change
      document.documentElement.classList.add("dark");

      localStorage.setItem("theme", "dark");

      setIsDarkMode(true);
    }
  };

  return (
    <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 ",
    "focus:outline-hidden" )}>
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};

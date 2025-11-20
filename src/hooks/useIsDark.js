"use client";

import { useEffect, useState } from "react";

const useIsDark = (theme) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      setIsDark(true);
    } else if (theme === "light") {
      setIsDark(false);
    } else if (theme === "system") {
      const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDark(darkQuery.matches);

      const listener = (e) => setIsDark(e.matches);
      darkQuery.addEventListener("change", listener);

      return () => darkQuery.removeEventListener("change", listener);
    }
  }, [theme]);

  return isDark;
};

export default useIsDark;

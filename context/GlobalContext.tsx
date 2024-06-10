import { ReactNode, createContext, useCallback, useState } from "react";

type Variant = "LOGIN" | "REGISTER";

const globalContext = createContext({
  variant: "LOGIN",
  toggleVariant: () => {},
});

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [variant, setVariant] = useState<Variant>("LOGIN");

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const value = { variant, toggleVariant };

  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
};

export { globalContext, GlobalProvider };

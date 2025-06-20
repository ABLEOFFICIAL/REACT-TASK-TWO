import { createContext, useState } from "react";

export const ToggleContext = createContext();

const ToggleProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [submit, setSubmit] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggle, setToggle, submit, setSubmit }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleProvider;

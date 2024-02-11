import { createContext, useState } from 'react';

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [count, setState] = useState(false);

  const style = {
    backgroundColor: count == true ? 'black' : 'Teal',
  };
  const handleINC = () => {
    setState(!count);
  };
  return (
    <AppContext.Provider value={{ countValue: count, handleFN: handleINC }}>
      {children}
      <div style={style}></div>
    </AppContext.Provider>
  );
}

export default AppContextProvider;

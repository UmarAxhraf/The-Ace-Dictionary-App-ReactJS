import { createContext, useState } from "react";
import Search from "./components/Search";
import ResultList from "./components/ResultList";

// Create context
export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState("");

  const value = {
    inputValue,
    setInputValue,
  };

  return (
    <InputContext.Provider value={value}>
      <div className="App">
        <Search />
        <ResultList />
      </div>
    </InputContext.Provider>
  );
}

export default App;

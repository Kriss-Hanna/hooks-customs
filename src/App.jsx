import UseFetchComponent from "./components/UseFetchComponent";

import "./App.css";

function App() {
  return (
    <>
      <UseFetchComponent url="https://dog.ceo/api/breeds/image/random" />
    </>
  );
}

export default App;

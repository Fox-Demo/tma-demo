import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useQuery } from "@tanstack/react-query";
import "./App.css";

import WebApp from "@twa-dev/sdk";

const getLocation = async () => {
  const res = await fetch(
    "https://api.telegram.org/bot6800106151:AAHcIuEkvx0fgChFOCvfzDlAOeZeACL7vSE/getUpdates?allowed_updates=%5B%22edited_message%22%5D"
  );

  const format = await res.json();
  console.log(format);
  return format;
};

function App() {
  const [count, setCount] = useState(0);

  const query = useQuery({
    queryKey: ["todos"],
    queryFn: getLocation,
  });

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      {/* Here we add our button with alert callback */}
      <div className="card">
        <button
          onClick={() =>
            WebApp.showAlert(`Hello World! Current count is ${count}`)
          }
        >
          Show Alert
        </button>

        <div> Hello </div>
        <div> {query.data} </div>
      </div>
    </>
  );
}

export default App;

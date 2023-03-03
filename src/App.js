import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch("https://testfullstackbackend-dgckekmog-aayush130702-gmailcom.vercel.app/api/data");
      const json = await response.json();
      if (response.ok) {
        setData(json);
      }
    };
    fetchdata();
  }, []);
  return (
    <div className="grid h-screen place-items-center">
      <a
        href="/api/data"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          My Data
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {data.message}
        </p>
      </a>

    </div>
  );
}

export default App;

import { useCallback, useEffect, useMemo, useState } from 'react';
import apiRequest from './apiRequest';
import Table from './Table';
import Navigation from './Navigation';
import './App.css';

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com";
  const [requestedApi, setRequestedApi] = useState("users");
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiRequest(`${API_URL}/${requestedApi}`, {
        method: "GET"
      })
      console.log(response);
      setResponseData(response);
    }

    fetchData();
  }, [requestedApi])



  return (
    <div className="App">
      <header>
        <Navigation
          requestedApi={requestedApi}
          setRequestedApi={setRequestedApi} />
      </header>
      <main style={{ padding: "0 30px" }}>
        {responseData && <Table
          responseData={responseData} />}
      </main>
    </div>
  );
}

export default App;
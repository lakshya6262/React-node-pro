import { useEffect, useState, useCallback } from "react";
import { getData } from "./api";
import DataList from "./DataList";

function App() {
  const [records, setRecords] = useState([]);

  const fetchRecords = useCallback(async () => {
    const res = await getData();
    setRecords(res.data);
  }, []);

  useEffect(() => {
    const interval = setInterval(fetchRecords, 1000);
    return () => clearInterval(interval);
  }, [fetchRecords]);

  return (
    <div>
      <h2>Real-Time Monitoring Dashboard</h2>
      <DataList records={records} />
    </div>
  );
}

export default App;

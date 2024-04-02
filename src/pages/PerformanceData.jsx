import React, { useEffect, useState } from "react";

const PerformanceData = () => {
  const [navigationTiming, setNavigationTiming] = useState({});
  const [resourceTiming, setResourceTiming] = useState([]);

  useEffect(() => {
    // Fetch navigation timing data
    const navigationTimingData = window.performance.timing;
    setNavigationTiming(navigationTimingData);

    // Fetch resource timing data
    const resourceTimingData = window.performance.getEntriesByType("resource");
    setResourceTiming(resourceTimingData);
  }, []);

  return (
    <div>
      <h2>Navigation Timing Data:</h2>
      <pre>{JSON.stringify(navigationTiming, null, 2)}</pre>

      <h2>Resource Timing Data:</h2>
      <ul>
        {resourceTiming.map((entry, index) => (
          <li key={index}>
            {entry.name} - {entry.duration}ms
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PerformanceData;

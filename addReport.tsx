import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReportComponent = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/report');
        setReports(response.data);
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Reports</h1>
      <ul>
        {reports.map((report, index) => (
          <li key={index}>{report.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReportComponent;

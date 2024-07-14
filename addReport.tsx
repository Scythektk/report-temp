import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReportComponent = () => {
  const [reports, setReports] = useState<{ id: number, reportUrl: string, reportName: string, modifyDate: string }[]>([]);

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
        //   <li key={report.id}>
        //     <a href={report.reportUrl}>{report.reportName}</a> - Last Modified: {report.modifyDate}
        //   </li>
        <li key={report.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', margin: '10px 0' }}>
          <div>
            <h2>{report.reportName}</h2>
            <p><a href={report.reportUrl}>Report URL</a></p>
            <p>Page Names: {/* Assuming pageNames is an array and needs to be displayed */}</p>
            <ul>
              {report.pageNames.map((pageName, index) => (
                <li key={index}>{pageName}</li>
              ))}
            </ul>
            <p><a href={report.gridlink}>Grid Link</a></p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p>Upload Date: {new Date(report.modifyDate).toLocaleDateString()}</p>
          </div>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportComponent;

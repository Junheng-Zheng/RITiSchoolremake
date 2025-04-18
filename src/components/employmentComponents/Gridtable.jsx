"use client";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
const Gridtable = (data) => {
  //getting the tables
  const [row, setRow] = useState([]); //for cooptbale
  const [professionalEmploymentTable, setProfessionalEmploymentTable] =
    useState([]); //for employment table
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 8,
  }); //pagination size

  //for coop columns
  const coopcolumns = [
    { field: "employer", headerName: "Employer", flex: 1 },
    { field: "degree", headerName: "Degree", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "term", headerName: "Term", flex: 1 },
  ];

  //for employment columns
  const employmentcolumns = [
    { field: "employer", headerName: "Employer", flex: 1 },
    { field: "degree", headerName: "Degree", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "title", headerName: "Title", flex: 1 },
    { field: "startdate", headerName: "Start Date", flex: 1 },
  ];

  //getting coop information
  useEffect(() => {
    const newRows = data.data.coopTable.coopInformation.map((p, index) => ({
      id: index,
      employer: p.employer,
      degree: p.degree,
      city: p.city,
      term: p.term,
    }));

    setRow([...newRows]);

    //getting employment information
    const professionalEmployment =
      data.data.employmentTable.professionalEmploymentInformation.map(
        (p, index) => ({
          id: index,
          employer: p.employer,
          degree: p.degree,
          city: p.city,
          title: p.title,
          startdate: p.startDate,
        })
      );
    setProfessionalEmploymentTable([...professionalEmployment]);
  }, [data]); // Runs only when `data` changes

  return (
    //returning table with bootstrap tabs and mui
    <Tabs
      defaultActiveKey="cooptable"
      id="uncontrolled-tab-example"
      className="bg-white"
    >
      <Tab eventKey="cooptable" title="Co-op Table">
        <DataGrid
          rows={row}
          columns={coopcolumns}
          disableSelectionOnClick
          pagination
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          sx={{
            "& .MuiDataGrid-root": { backgroundColor: "#f5f5f5" },
            "& .MuiDataGrid-cell": {
              color: "black",
              userSelect: "none",
              pointerEvents: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#ffa500",
              color: "black",
            },
            "& .MuiTablePagination-selectLabel": {
              margin: 0,
            },
            "& .MuiTablePagination-displayedRows": {
              margin: 0,
            },
          }}
        />
      </Tab>
      <Tab eventKey="profemploymenttable" title="Prof. Employment Table">
        <DataGrid
          rows={professionalEmploymentTable}
          columns={employmentcolumns}
          disableSelectionOnClick
          pagination
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel} // <---- This updates pagination state
          sx={{
            "& .MuiDataGrid-root": { backgroundColor: "#f5f5f5" },
            "& .MuiDataGrid-cell": {
              color: "black",
              userSelect: "none",
              pointerEvents: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#ffa500",
              color: "black",
            },
            "& .MuiTablePagination-selectLabel": {
              margin: 0,
            },
            "& .MuiTablePagination-displayedRows": {
              margin: 0,
            },
          }}
        />
      </Tab>
    </Tabs>
  );
};

export default Gridtable;

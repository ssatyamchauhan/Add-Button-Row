import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Link from 'next/link';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: any) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
      field: "action",
      headerName: "ACTION",
      description: "This is a button to change the status of the user.",
      width: 100,
      renderCell: (cellValues: any) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={(event: any) => {
              handleClick(event, cellValues);
            }}
          >
            click me
          </Button>
        );
      }
  },
  {
    field: "route",
    headerName: "Open New Page",
    width: 100,
    renderCell: (cellValues: any) => {
      return <Link href={"https://mui.com/api/data-grid/data-grid/"}>Link</Link>;
    }
  }
];

const handleClick = (event: any, cellValues: any) => {
    console.log('event', event);
    console.log('cellValues', cellValues)
}

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, action: "data in button" },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, action: "data in button" },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, action: "data in button" },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, action: "data in button" },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, action: "data in button" },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, action: "data in button" },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, action: "data in button" },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, action: "data in button" },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, action: "data in button" },
];



export default function DataGridDemo() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection={false}
      />
    </div>
  );
}

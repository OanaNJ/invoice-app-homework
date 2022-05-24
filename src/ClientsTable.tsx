import { GridColDef } from "@mui/x-data-grid";
import { SpecializedTableData, TableComponent } from "./Table"

const clientColumns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'contactName', headerName: 'Contact Name', width: 130 },
    { field: 'contactEmail', headerName: 'Contact Email', width: 130 },
    { field: 'taxCode', headerName: 'Tax Code', width: 130 },
    { field: 'iban', headerName: 'IBAN', width: 130 },
    { field: 'address', headerName: 'Address', width: 130 },
    { field: 'userId', headerName: 'User ID', width: 130 },
    { field: 'totalBilled', headerName: 'Total Billed', width: 130 },
    { field: 'invoiceCount', headerName: 'Invoice Count', width: 130 }
];

export const ClientsTable = (props: SpecializedTableData) => {
    return (
      <TableComponent
        columns={clientColumns}
        title={'Clients'}
        tableData={props.data}
      />
    )
}
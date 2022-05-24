import { GridColDef } from "@mui/x-data-grid";
import { SpecializedTableData, TableComponent } from "./Table";

const invoiceColumns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'date', headerName: 'Date', width: 130 },
    { field: 'dueDate', headerName: 'Due Date', width: 130 },
    { field: 'total', headerName: 'Total', width: 130 },
    { field: 'clientId', headerName: 'Client ID', width: 130 },
    { field: 'companyName', headerName: 'Company Name', width: 130 },
    { field: 'contactName', headerName: 'Contact Name', width: 130 },
    { field: 'contactEmail', headerName: 'Contact Email', width: 130 }
];

export const InvoicesTable = (props: SpecializedTableData) => {
    return (
      <TableComponent
        columns={invoiceColumns}
        title={'Invoices'}
        tableData={props.data}
      />
    )
}
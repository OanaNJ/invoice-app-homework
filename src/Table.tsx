import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Pagination, Typography } from '@mui/material';

export type TableData = {
    row: any[],
    total: number,
    skip: number,
    limit: number
}

type Table = {
    title: string,
    columns: GridColDef[],
    tableData: TableData,
    children?: React.ReactNode
}

export type SpecializedTableData = {
    data: TableData
}

export const TableComponent = (props: Table) => {
    return (
      <div style={{ height: 400, width: '100%' }}>
        <Typography 
          variant="h5" 
          color="primary"
        >
            {props.title}
        </Typography>
        <DataGrid
          rows={props.tableData.row}
          columns={props.columns}
          pageSize={props.tableData.limit}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
        <Pagination count={10} color="primary" />
      </div>
    )
}
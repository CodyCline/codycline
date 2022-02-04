import * as React from "react";
import { TableBase } from "./Table";

//Data table takes the json data file passed and puts it into the table
export const DataTable = ({src} : any) => {
    
    //first record usually contains the shape of the data
    const first = src[0];

    const columns = React.useMemo(() => (
        Object.keys(first).map((key: any) => {
            return ({
                Header: (key),
                accessor: (key),
            });
        })
    ), []);

    return (
        <TableBase data={src} columns={columns}/>
    )
}
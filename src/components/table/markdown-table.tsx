import * as React from "react";
import { TableBase } from "./table";


//Markdown table takes the props passed by MDX engine and maps it into table data
export const MarkdownTable = (props:any) => {
    //Represents the head and body portion of markdown table
    const theadData = props.children[0].props.children.props.children;
    const tcellData = props.children[1].props.children;

    //Format head of markdown table from jsx to json
    const columns = React.useMemo(() => (
        React.Children.map(theadData, (child: any) => {
            return ({
                Header: (child.props.children),
                accessor: (child.props.children).toLowerCase(),
            });
        })
    ), []);

    //Format body of markdown table from jsx to json, lots of accessing children of children props
    const data = () => {
        //Container
        const cells: object[] = []
        React.Children.map(tcellData, (child) => {
            const { children } = child.props;
            const row = {};
            children.map((cell, i: number) => {
                const parent = (theadData[i].props.children).toLowerCase();
                row[parent] = cell.props.children;
            });
            cells.push(row);
        });
        return cells;
    }
    return (
        <TableBase data={data()} columns={columns}/>
    )
}
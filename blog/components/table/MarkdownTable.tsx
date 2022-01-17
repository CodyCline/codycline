import React, { useMemo } from "react";
import { TableBase } from "./Table";

export const MarkdownTable = (props:any) => {
    console.log(props);

    return (<table>{props.children}</table>);
    // const theadData = props.children[0].props.children.props.children;
    // const tcellData = props.children[1].props.children;
    // //Format head of markdown table from jsx to json
    // const columns = useMemo(() => (
    //     React.Children.map(theadData, (child: any) => {
    //         return ({
    //             Header: (child.props.children),
    //             accessor: (child.props.children).toLowerCase(),
    //         });
    //     })), 
    //     []
    // );

    // const data = () => {
    //     //Container
    //     const cells: object[] = []
    //     React.Children.map(tcellData, (child) => {
    //         const { children } = child.props;
    //         const row:any = {};
    //         children.map((cell:any, i: number) => {
    //             const parent = (theadData[i].props.children).toLowerCase();
    //             row[parent] = cell.props.children;
    //         });
    //         cells.push(row);
    //     });
    //     return cells;
    // }

    // return (
    //     <TableBase 
    //         data={data()} 
    //         columns={columns}
    //     />
    // )

}
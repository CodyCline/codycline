import * as React from "react";
import { useTable, useBlockLayout, useResizeColumns, useRowSelect } from "react-table";
import cx from "classnames";
import { TableCell } from "./table-cell";
import * as types from "../../types/components"
import "./table.scss";

export const Table = (props: any) => {
    return (
        <div className={cx(`table`, props.className)}>
            {props.children}
        </div>
    )
}

interface ITableProps {
    children: any
}

export const TableContainer = (props: ITableProps) => {

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

    //Format body of markdown table from jsx to json
    const getCellData = () => {
        const cells: object[] = []
        React.Children.map(tcellData, (child) => {
            const { children } = child.props;
            const row = {};
            children.map((cell, i:number) => {
                const parent = (theadData[i].props.children).toLowerCase();
                row[parent] = cell.props.children;
            });
            cells.push(row);
        });
        return cells;
    }
    const defaultColumn = React.useMemo(
        () => ({
            width: 275,
            minWidth: 50,
            maxWidth: 1000,
        }),
        []);

    //Init table cell data
    const data = getCellData();

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
            defaultColumn,
        },
        useBlockLayout,
        useResizeColumns,
    )


    return (
        <div className="table__container">
            <Table {...getTableProps()} className="block__content">
                {/* Table Header groups thead */}
                {headerGroups.map(headerRow => (
                    <div {...headerRow.getHeaderGroupProps()} className="table__row">

                        {headerRow.headers.map(headerCell => (
                            <div {...headerCell.getHeaderProps()} className="table__head__cell">
                                {headerCell.render(`Header`)}
                                <div
                                    {...headerCell.getResizerProps()}
                                    className={cx([`resizer`, headerCell.isResizing && `isResizing`])}
                                />
                            </div>
                        ))}
                    </div>
                ))}

                {/* Body elements tbody */}
                <div {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            // Table rows
                            <div {...row.getRowProps()} className="table__row">
                                {/* Table cells */}
                                {row.cells.map((cell, id: number) => {
                                    return (
                                        <TableCell tabIndex={id} {...cell.getCellProps()}>
                                            {cell.render(`Cell`)}
                                        </TableCell>
                                    );
                                })}
                            </div>
                        )
                    })}
                </div>
            </Table>
        </div>
    );
}

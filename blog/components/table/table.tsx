import * as React from "react";
import { useTable, useBlockLayout, useResizeColumns, useRowSelect } from "react-table";
import cx from "classnames";
import "./table.scss";


export const Table = (props: any) => {
    return (
        <div className={cx(`table`, props.className)}>
            {props.children}
        </div>
    )
}


export const TableCell = (props: any) => {
    const cellRef = React.useRef<any>();
    const copy = () => {
        const element = cellRef.current;
        if (element) {
            navigator.clipboard.writeText(element.innerText);
        }
    }
    return (
        <div
            {...props}
            ref={cellRef}
            onDoubleClick={copy}
            tabIndex={props.tabIndex}
            className="table__cell"
        >
            {props.children}
        </div>
    );
}



//Base table which defines functionality and 
export const TableBase = ({ data, columns }: any) => {
    const defaultColumn = React.useMemo(
        () => ({
            width: 275,
            minWidth: 50,
            maxWidth: 1000,
        }),
    []);

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






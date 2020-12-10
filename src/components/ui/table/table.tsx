import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './table.scss';
import { useTable, useBlockLayout, useResizeColumns } from 'react-table'
import cx from 'classnames';

export const Table = (props: any) => {
    return (
        <div className="table">
            {props.children}
        </div>
    )
}

export const TableCell = ({ children, tabIndex }) => {
    const cellRef = React.useRef<any>();
    const copy = () => {
        if (cellRef.current) {
            const element = cellRef.current;
            navigator.clipboard.writeText(element.innerText);
        }
    }
    return (
        <div ref={cellRef} onDoubleClick={copy} tabIndex={tabIndex} className="table__cell">{children}</div>
    );
}


export const TableContainer = (props) => {

    //Represents the head and body portion of markdown table
    const theadData = props.children[0].props.children.props.children;
    const tcellData = props.children[1].props.children;

    //Format head of markdown table from jsx to json
    const columns = React.useMemo(
        () => (
            React.Children.map(theadData, (child: any) => {
                return ({
                    Header: (child.props.children),
                    accessor: (child.props.children).toLowerCase(),
                });
            })
        ),
        []);

    //Format body of markdown table from jsx to json
    const getCellData = () => {
        const cells: object[] = []
        React.Children.map(tcellData, (child) => {
            const { children } = child.props;
            const row = {};
            children.map((cell, idx) => {
                const parent = (theadData[idx].props.children).toLowerCase();
                row[parent] = cell.props.children;
            });
            cells.push(row);
        });
        return cells;
    }
    const defaultColumn = React.useMemo(
        () => ({
            width: 200,
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
        useResizeColumns
    )


    return (
        <div className="table__container">
            <Table {...getTableProps()}>
                <div>
                    {/* Table Header groups thead */}
                    {headerGroups.map(headerRow => (
                        <div {...headerRow.getHeaderGroupProps()} className="table__row">

                            {headerRow.headers.map(headerCell => (
                                <div {...headerCell.getHeaderProps()} className="table__head__cell">
                                    {headerCell.render("Header")}
                                    <div
                                        {...headerCell.getResizerProps()}
                                        className={cx(["resizer", headerCell.isResizing && "isResizing"])}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Body elements tbody */}
                <div {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            // Table rows
                            <div {...row.getRowProps()} className="table__row">
                                {/* Table cells */}
                                {row.cells.map((cell, id) => {
                                    return (
                                        <div tabIndex={id} className="table__cell" {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </div>
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

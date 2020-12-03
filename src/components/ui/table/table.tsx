import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './table.scss';
import { useTable, useBlockLayout, useResizeColumns } from 'react-table'
import cx from 'classnames';

export const Table = (props: any) => {
    return (
        <div className="table__container">
            <table className="table">
                {props.children}
            </table>
        </div>
    )
}

export const TableHead = ({ children }) => {
    return (
        <thead className="table__head">
            {children}
        </thead>
    )
}

export const TableBody = ({ children }) => {
    return (
        <tbody className="table__body">{children}</tbody>
    );
}

export const TableRow = ({ children }) => {
    return (
        <tr className="table__row">{children}</tr>
    );
}

export const TableHeaderCell = ({ children }) => {
    const [width, setWidth] = React.useState<number>(150);
    const resize = (event: any) => {
        // set the element's new position:
        console.log(event);
        // element.style.top = (element.offsetTop - pos2) + "px";
        setWidth(width + 25);
    }
    return (
        <React.Fragment>
            <th
                style={{ width: `${width}px` }}
                onDragOver={event => resize(event)}
                className="table__header__cell"
            >
                {children}
            </th>

        </React.Fragment>
    );
}


export const TableCell = ({ children }) => {
    const cellRef = React.useRef<any>();
    const copy = () => {
        if (cellRef.current) {
            const element = cellRef.current;
            navigator.clipboard.writeText(element.innerText);
        }
    }
    return (
        <td ref={cellRef} onDoubleClick={copy} tabIndex={-1} className="table__cell">{children}</td>
    );
}

export const FunTableBody = (props: any) => {

}

export function FunTable({ columns, data }) {
    
    const defaultColumn = React.useMemo(
        () => ({
            minWidth: 50,
            width: 200,
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
        useResizeColumns
    )

    return (
        <React.Fragment>
            <div>
                <div {...getTableProps()} className="table">
                    <div>
                        {headerGroups.map(headerGroup => (
                            <div {...headerGroup.getHeaderGroupProps()} className="tr">
                                {headerGroup.headers.map(column => (
                                    <div {...column.getHeaderProps()} className="th">
                                        {column.render('Header')}
                                        <div
                                            {...column.getResizerProps()}
                                            className={cx(["resizer", column.isResizing && "isResizing"])}
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    
                    {/* Body elements */}
                    <div {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row)
                            return (
                                <div {...row.getRowProps()} className="tr">
                                    {row.cells.map((cell, id) => {
                                        return (
                                            <div tabIndex={id} {...cell.getCellProps()} className="td">
                                                {cell.render("Cell")}
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

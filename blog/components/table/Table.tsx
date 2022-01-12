import { useMemo, useRef } from "react";
import styled from "styled-components";
import { useTable, useBlockLayout, useResizeColumns, useRowSelect } from "react-table";
import { scrollbar } from "../styles/Scrollbar";

export const Resizer:any = styled.div`
    &:not(.tr) {
        display: inline-block;
        width: 4px;
        background: var(--color-text-default);
        height: 100%;
        position: absolute;
        cursor: col-resize;
        right: 0;
        top: 0;
        transform: translateX(50%);
        z-index: 99;
        touch-action: none;
        border-radius: 5px;

    }

    &:hover {
        z-index: 999;
        background: var(--color-text-primary);
    }

`
export const TableWrapper = styled.section`
    margin: 36px 0;
    font-size: 1em;
    border: 1px solid var(--color-border);
`

export const Table:any = styled.div`
    display: block;
    width: 100%;
    border-spacing: 0;
    border-radius: var(--font-size-sm);
    white-space: nowrap;
    background: var(--prism-background);
    border-bottom: 0;

    overflow-x: scroll;
    ${scrollbar()}
`

const TableBody = styled.div``;

export const CellWrapper:any = styled.div`
    border-right: 1px solid var(--color-border);
    overflow: hidden;
    text-overflow: ellipsis;
    padding: .5rem;
    &:focus {
        outline: 2px solid var(--color-text-secondary);
        color: var(--color-text-secondary);
    }
`;

export const HeaderCell:any = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    padding: 0.5rem;
    font-weight: 700;
    position: relative;
    border-right: 1px solid var(--color-border);
    background: var(--color-fg-primary);

    &:last-child {
        border-right: 0;
    }
`;

export const Row:any = styled.div`
    overflow: hidden;
    position: relative;
    text-overflow: ellipsis;
    margin: 0;
    border-bottom: 1px solid var(--color-border);
    border-right: 1px solid var(--color-border);
    position:relative;

    &:hover {
        background: var(--color-fg-primary);
    }
    &:last-child {
        border-bottom: 0;
    }


    
`






export const TableCell = (props: any) => {
    const cellRef = useRef<any>();
    const copy = () => {
        const element = cellRef.current;
        if (element) {
            navigator.clipboard.writeText(element.innerText);
        }
    }

    return (
        <CellWrapper
            {...props}
            ref={cellRef}
            onDoubleClick={copy}
            tabIndex={props.tabIndex}
        >
            {props.children}
        </CellWrapper>
    )
}

export const TableBase = ({ data, columns }: any) => {
    const defaultColumn = useMemo(
        () => ({
            width: 275,
            minWidth: 50,
            maxWidth: 1000,
        }),
        []
    );

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
    );

    return (
        <TableWrapper>
            <Table  {...getTableProps()}>
                {headerGroups.map(headerRow => (
                    <Row {...headerRow.getHeaderGroupProps()}>
                        {headerRow.headers.map((headerCell:any) => (
                            <HeaderCell {...headerCell.getHeaderProps()}>
                                {headerCell.render(`Header`)}
                                <Resizer
                                    {...headerCell.getResizerProps()}
                                    className={headerCell.isResizing && `isResizing`}
                                />
                            </HeaderCell>
                        ))}
                    </Row>
                ))}
                {/* Body elements tbody */}
                <TableBody {...getTableBodyProps()}>
                    {/* Table rows */}
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <Row {...row.getRowProps()} >
                                {/* Table cells */}
                                {row.cells.map((cell, id: number) => (
                                    <TableCell tabIndex={id} {...cell.getCellProps()}>
                                        {cell.render(`Cell`)}
                                    </TableCell>
                                ))}
                            </Row>
                        );
                    })}
                </TableBody>
            </Table>
        </TableWrapper>
    );
}
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Input from '../Input';
import TableHead from './thead';
import TableBody from './tbody';
import Pagination from '../Pagination';

const TableWrapper = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`

type TableComponentProps = {
    data: any[],
    columns: any[],
    onSelect?: (keys: string[]) => void,
    onSearch?: (text: string) => void,
}

const pageSize = 2;

const TableComponent = (props: TableComponentProps) => {
    const { data, columns, onSelect, onSearch } = props;
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPageData, setCurrentPageData] = useState(data.slice(0, pageSize));

    useEffect(() => {
        setCurrentPageData(data.slice(0, pageSize));
        setCurrentPage(1);
    }, [data]);
    const onInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (typeof onSearch === 'function') {
            onSearch(e.target.value);
        }
    }

    const onPageChanged = (page: number) => {
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        setCurrentPageData(data.slice(start, end));
        setCurrentPage(page);
    }

    return (
        <TableWrapper>
            <Input placeholder="Search Name" onChange={onInputChanged}></Input>
            <table>
                <TableHead columns={columns}></TableHead>
                <TableBody data={currentPageData} onSelect={onSelect}></TableBody>
            </table>
            <Pagination total={data.length} pageSize={pageSize} currentPage={currentPage} onChange={onPageChanged} />
        </TableWrapper>
    )
}

export default TableComponent;
import styled from 'styled-components';

const PaginationWrapper = styled.div`
    display: flex;
    justify-content: end;
    gap: 10px;
    margin: 20px 0;
`

type PaginationProps = {
    total: number,
    pageSize: number,
    currentPage: number,
    onChange?: (page: number) => void
}
const PaginationComponent = (props: PaginationProps) => {
    const { total, pageSize, currentPage, onChange } = props;
    const pages = Math.ceil(total / pageSize);

    const onPrevious = () => {
        if (typeof onChange === 'function') {
            onChange(currentPage - 1);
        }
    }
    const onNext = () => {
        if (typeof onChange === 'function') {
            onChange(currentPage + 1);
        }
    }
    return (
        <PaginationWrapper>
            <button onClick={onPrevious} disabled={currentPage === 1}>Previous</button>
            <span>{currentPage}</span>
            <button onClick={onNext} disabled={currentPage === pages}>Next</button>
        </PaginationWrapper>
    );
}

export default PaginationComponent;
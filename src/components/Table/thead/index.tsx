import styled from 'styled-components';

const TheadComponent = styled.thead`
    background-color: #4CAF50;
`

type TableHeadComponentProps = {
    columns: any[]
}

const TableHead = (props: TableHeadComponentProps) => {
    const { columns } = props;

    const renderColumns = () => {
        if (columns.length > 0) {
            return columns.map((column) => {
                return (
                    <th key={column.title}>{column.title}</th>
                )
            })
        } else {
            return null;
        }
    }
    return (
        <TheadComponent>
            <tr>
                <th></th>
                {renderColumns()}
            </tr>
        </TheadComponent>
    )
}

export default TableHead;
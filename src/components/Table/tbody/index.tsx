import Tr from './tr';
import Td from './td';
import Checkbox from '../../Checkbox';

type TableBodyComponentProps = {
    data: any[],
    onSelect?: (keys: string[]) => void
}

const TableBodyComponent = (props: TableBodyComponentProps) => {
    const { data, onSelect } = props;
    const selectedKeys: string[] = [];

    const onCheckboxChange = (e: any) => {
        const { id, checked } = e.target;
        if (checked) {
            selectedKeys.push(id);
        } else {
            const index = selectedKeys.indexOf(id);
            selectedKeys.splice(index, 1);
        }
        if (typeof onSelect === 'function') {
            onSelect(selectedKeys);
        }
    }
    
    const renderRows = () => {
        if (data.length > 0) {
            return data.map((item) => {
                const {key, ...others} = item;
                let row = [<Td key={`${key}-select`}><Checkbox id={key} onChange={onCheckboxChange} /></Td>];
                Object.values(others).forEach((value: any) => {
                    row.push(
                        <Td key={`${key}-${value}`}>{value}</Td>
                    )
                })
                return (
                    <Tr id={key} key={key}>{row}</Tr>
                )
            })
        } else {
            return <Tr><Td colSpan={100}>No data...</Td></Tr>
        }
    }
    return (
        <tbody>
            {renderRows()}
        </tbody>
    )
}

export default TableBodyComponent;
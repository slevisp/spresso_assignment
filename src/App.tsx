import { useRef, useState } from 'react';
import './App.css'
import Table from './components/Table'
import dataSource from './data/source'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

function App() {
  const selectedResults = useRef<HTMLDivElement>(null);

  const [data, setData] = useState(dataSource);

  const onRowSelected = (selectedKeys: string[]) => {
    const resultsElement = selectedResults.current;
    let elementStr = '';
    selectedKeys.map((selectedKey: string) => {
      const selectedData = data.find((item) => item.key === selectedKey)
      if (selectedData) {
        elementStr += `<p>${JSON.stringify(selectedData)}</p>`;
      }
    })
    if (resultsElement) {
      resultsElement.innerHTML = elementStr;
    }
  }

  const onTableSearch = (text: string) => {
    if (text === '') {
      setData(dataSource);
      return;
    }
    const filteredData = dataSource.filter((item) => {
      return item.name.toLowerCase().includes(text.toLowerCase());
    })
    setData([...filteredData]);
  }

  return (
    <>
      <Table columns={columns} data={data} onSelect={onRowSelected} onSearch={onTableSearch} />
      <div ref={selectedResults} id='selected-results'></div>
    </>
  )
}

export default App

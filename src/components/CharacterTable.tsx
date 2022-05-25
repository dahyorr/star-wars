import React from 'react'
import MUIDataTable, {MUIDataTableColumnDef} from "mui-datatables";
import {Character} from 'typings'
import GenderIcon from './GenderIcon';
import CustomTableFooter from './CustomTableFooter';

interface TableProps{
  data: Character[];
  title: string
}

const CharacterTable: React.FC<TableProps> = ({data, title}) => {

  const totalHeight = data.reduce((acc, curr) => {
    if(Number(curr.height)){
      return acc + Number(curr.height)
    }
    return acc
  }, 0)

  const columns: MUIDataTableColumnDef[] = [
    {
      name: "name",
      label: "Name",
      options: {
        filter: false,
        sort: true,
      }
    },
    {
      name: "gender",
      label: "Gender",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value) => <GenderIcon gender={value}/>
      }
    },
    {
      name: "height",
      label: "Height(cm)",
      options: {
        filter: false,
        sort: true,
      }
    },
  ]

  return (
    <MUIDataTable
      title={`Character List for "${title}"`}
      data={data}
      columns={columns}
      options={{
        pagination: false,
        elevation: 0,
        selectableRows: 'none',
        download: false,
        print: false,
        search: false,
        viewColumns: false,
        filter: true,
        responsive: 'simple',
        tableBodyMaxHeight: '71vh',
        tableBodyHeight: '71vh',
        customFooter: () => <CustomTableFooter
          totalHeight={totalHeight}
          noOfCharacters={data.length}
        />
    }}
    />
  )
}

export default CharacterTable
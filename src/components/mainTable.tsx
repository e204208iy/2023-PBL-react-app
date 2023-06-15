import { DataGrid, GridColDef, GridRowsProp, GridEventListener,GridToolbar,GridRowParams} from '@mui/x-data-grid'

import { useNavigate } from "react-router-dom"

const rows: GridRowsProp = [
  { id: 1, day: '2022年12月4日', sum: "100本", average: "20cm"},
  { id: 2, day: '2022年12月5日', sum: "100本", average: "23cm"},
  { id: 3, day: '2022年12月6日', sum: "102本", average: "20cm"},
  { id: 4, day: '2022年12月7日', sum: "150本", average: "21cm"},
  { id: 5, day: '2022年12月8日', sum: "130本", average: "20cm"},
  { id: 6, day: '2022年12月9日', sum: "107本", average: "25cm"},
  { id: 7, day: '2022年12月10日', sum: "103本", average: "10cm"},
  { id: 8, day: '2022年12月11日', sum: "108本", average: "20cm"},
  { id: 9, day: '2022年12月12日', sum: "102本", average: "19cm"},
  { id: 10, day: '2022年12月13日', sum: "102本", average: "18cm"},
  { id: 11, day: '2022年12月14日', sum: "100本", average: "20cm"},
  { id: 12, day: '2022年12月15日', sum: "101本", average: "21cm"}
]

export default function MainTable() {
  const navigate = useNavigate();

  const cols: GridColDef[] = [
    {
      field: 'day',
      headerName: '年/月/日',
      width: 250,
      headerAlign:"center",
      align:"center",
      
    },
    {
      field: 'sum',
      headerName: '合計',
      width: 100,
      headerAlign:"center",
      align:"center"
    },
    {
      field: 'average',
      headerName: '平均',
      width: 100,
      headerAlign:"center",
      align:"center"
    }
  ]

  const handleRowClick: GridEventListener<"rowClick"> = (params) => {
    navigate('/detail', {state:params.row.day});
  }
  return (
    <div style={{ width: '100%'}}>
      <DataGrid
      sx={
        styles.grid
      }
      getRowClassName={(params: GridRowParams) => {
        if (Number(params.id) % 2==0) {
          return 'rows-active'
        }
        return ''
      }}
      onRowClick={handleRowClick}
      columns={cols}
      rows={rows}
      hideFooter
      disableColumnFilter
      disableColumnSelector
      disableDensitySelector
      slots={{ toolbar: GridToolbar }}
      slotProps={{
        toolbar: {
          showQuickFilter: true,
          printOptions: { disableToolbarButton: true },
          csvOptions: { disableToolbarButton: true },
        },
      }}
      />
    </div>
  )
}
const styles = {
    grid: {
      border: 0.8,
      borderColor: 'grey.500',
      '.MuiDataGrid-toolbarContainer': {
        borderBottom: 'solid 1px rgba(224, 224, 224, 1)'  
      },
      '.MuiDataGrid-row .MuiDataGrid-cell:not(:last-child)': {
        borderRight: 'solid 1px rgba(224, 224, 224, 1) !important'
      },
       // 列ヘッダに背景色を指定
      '.MuiDataGrid-columnHeaders': {
        backgroundColor: '#003D21', 
        color: '#fff',
        fontSize: 17,
        letterSpacing: 5
      },
      //奇数行をしましまにする設定
      '& .rows-active': {
        background: '#f3f6f5 !important'
      }
    }
   }
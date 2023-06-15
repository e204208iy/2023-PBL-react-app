import {useLocation} from "react-router-dom";

import Typography from '@mui/material/Typography';

import {
DataGrid,
GridColDef,
GridRowsProp,
GridToolbarContainer,
GridToolbarExport,
GridRowParams
} from '@mui/x-data-grid'

const rows: GridRowsProp = [
{ id: 1, classA: '2本', num: "10本", len1:"20cm",len2:"20cm",len3:"20cm",len4:"20cm"},
{ id: 2, classA: '2本', num: "10本", len1:"20cm",len2:"20cm",len3:"20cm",len4:"20cm"},
{ id: 3, classA: '2本', num: "10本", len1:"20cm",len2:"20cm",len3:"20cm",len4:"20cm"},
{ id: 4, classA: '2本', num: "10本", len1:"20cm",len2:"20cm",len3:"20cm",len4:"20cm"},
{ id: 5, classA: '2本', num: "10本", len1:"20cm",len2:"20cm",len3:"20cm",len4:"20cm"},
{ id: 6, classA: '2本', num: "10本", len1:"20cm",len2:"20cm",len3:"20cm",len4:"20cm"},
{ id: 7, classA: '2本', num: "10本", len1:"20cm",len2:"20cm",len3:"20cm",len4:"20cm"},
{ id: 8, classA: '2本', num: "10本", len1:"20cm",len2:"20cm",len3:"20cm",len4:"20cm"},
{ id: 9, classA: '2本', num: "10本", len1:"20cm",len2:"20cm",len3:"20cm",len4:"20cm"},
{ id: 10, classA: '2本', num: "10本", len1:"20cm",len2:"20cm",len3:"20cm",len4:"20cm"},
{ id: 11, classA: '2本', num: "10本", len1:"20cm",len2:"20cm",len3:"20cm",len4:"20cm"},
{ id: 12, classA: '2本', num: "10本", len1:"20cm",len2:"20cm",len3:"20cm",len4:"20cm"},
{ id: 13, classA: '2本', num: "10本", len1:"20cm",len2:"20cm",len3:"20cm",len4:"20cm"},
{ id: 14, classA: '2本', num: "10本", len1:"20cm",len2:"20cm",len3:"20cm",len4:"20cm"},
{ id: 15, classA: '2本', num: "10本", len1:"20cm",len2:"20cm",len3:"20cm",len4:"20cm"},
{ id: 16, classA: '2本', num: "10本", len1:"20cm",len2:"20cm",len3:"20cm",len4:"20cm"},
{ id: 17, classA: '2本', num: "10本", len1:"20cm",len2:"20cm",len3:"20cm",len4:"20cm"},
{ id: 18, classA: '2本', num: "10本", len1:"20cm",len2:"20cm",len3:"20cm",len4:"20cm"},
{ id: 19, classA: '2本', num: "10本", len1:"20cm",len2:"20cm",len3:"20cm",len4:"20cm"},
{ id: 20, classA: '2本', num: "10本", len1:"20cm",len2:"20cm",len3:"20cm",len4:"20cm"},

]
function CustomToolbar(){
    return(
        <GridToolbarContainer>
            <GridToolbarExport />
        </GridToolbarContainer>
    )
}
export default function DetailTable() {

    const { state } = useLocation();

    const cols: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID'
    },
    {
        field: 'classA',
        headerName: 'A級'
    },
    {
        field: 'num',
        headerName: '合計本数'
    },
    {
        field: 'len1',
        headerName: "長さ"
    },
    {
        field: 'len2',
        headerName: "長さ"
    },
    {
        field: 'len3',
        headerName: "長さ"
    },
    {
        field: 'len4',
        headerName: "長さ"
    },
    {
        field: 'len5',
        headerName: "長さ"
    }
    ]

    return (
        <div style={{ width: '100%' }}>
        <Typography variant="h4" sx={{ fontWeight: 'light' }}>
            {state}のデータです。
        </Typography>;
        <DataGrid
            columns={cols}
            rows={rows}
            sx={
                styles.grid
            }
            getRowClassName={(params: GridRowParams) => {
                if (Number(params.id) % 2==0) {
                  return 'rows-active'
                }
                return ''
              }}
            density="compact"
            autoHeight
            components={{
            Toolbar: CustomToolbar,// ツールバーを指定する
            }}
        />
        </div>
    )
}
const styles = {
    grid: {
      //奇数行をしましまにする設定
      '& .rows-active': {
        background: '#f3f6f5 !important'
      }
    }
   }
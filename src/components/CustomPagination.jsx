import { ThemeProvider, createTheme } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';

export const darkTheme = createTheme({
    palette: {
        type: "dark",
        primary: {
          light: '#757ce8',
          main: '#0daae0',
          dark: '#002884',
          contrastText: '#18e006',
        },
        secondary: {
          light: '#ff7961',
          main: '#fff',
          dark: '#ba000d',
          contrastText: '#fc0404',
        },
    },
})

const CustomPagination = ({setPage, numOfpages}) => {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0,0);
      }

  return (
    <div
        style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
            marginBottom: 10,
        }}
    >
    <ThemeProvider theme={darkTheme}>
        <Pagination 
          className='mb-3'
          showFirstButton 
          showLastButton
          count={numOfpages || 1}
          boundaryCount={2}
          variant="outlined"
          color="secondary"
          size="large"
          onChange={(e) => handlePageChange(e.target.textContent)}
        />
    </ThemeProvider>
    </div>
  )
}
export default CustomPagination
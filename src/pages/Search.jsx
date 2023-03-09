import { useEffect, useContext } from "react";
import { DataUserContext } from "../aplication/DataUserContext";
import { Navigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CustomPagination from "../components/CustomPagination";
import SingleCard from "../components/SingleCard";
import "../styles/Trending.css";

const Search = () => {
  const {
    userGlobal,
    getSearch,
    pageSearch,
    setSearchText,
    searchText,
    setPageSearch,
    typeSearch,
    setTypeSearch,
    numOfpages,
    contentSearch,
  } = useContext(DataUserContext);

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        light: "#757ce8",
        main: "#0daae0",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#ff0",
        dark: "#ba000d",
        contrastText: "#ffffff",
      },
    },
  });

  useEffect(() => {
    window.scroll(0, 0);
    getSearch();
  }, [typeSearch, pageSearch, searchText]);

  if (!userGlobal) {
    return <Navigate to="/Wellcome" />;
  }

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      getSearch();
    }
  };

  return (
    <div className="">
      <div className="pageTitle mb-5 ">Buscardor</div>
      <div className="w-50 mx-auto">
        <ThemeProvider theme={darkTheme}>
          <div style={{ display: "flex", margin: "15px 0" }}>
            <TextField
              sx={{ backgroundColor: "beige", borderRadius: "10px" }}
              style={{ flex: 1 }}
              className="searchBox"
              label="BUSCAR EN PELICULAS Y SERIES"
              variant="filled"
              onChange={(e) => setSearchText(e.target.value)}
              onKeyUp={handleKeyUp}
            />
            <Button
              variant="contained"
              style={{ marginLeft: 10 }}
              onClick={getSearch}
            >
              <SearchIcon />
            </Button>
          </div>
          <Tabs
            value={typeSearch}
            indicatorColor="primary"
            textColor="primary"
            onChange={(event, newValue) => {
              setTypeSearch(newValue);
              setPageSearch(1);
            }}
            style={{ paddingBottom: 5 }}
          >
            <Tab style={{ width: "50%", color: "white" }} label="Películas" />
            <Tab style={{ width: "50%", color: "white" }} label="Series" />
          </Tabs>
        </ThemeProvider>
      </div>
      <div>
        {numOfpages > 1 && (
          <CustomPagination setPage={setPageSearch} numOfpages={numOfpages} />
        )}
      </div>
      <div className="trending">
        {contentSearch &&
          contentSearch.map((m) => (
            <SingleCard
              key={m.id}
              id={m.id}
              poster={m.poster_path}
              title={m.title || m.name}
              date={m.release_date || m.first_air_release}
              media_type={typeSearch ? "tv" : "movie"}
              vote_average={m.vote_average}
            />
          ))}
        {searchText &&
          !contentSearch &&
          (typeSearch ? (
            <h2> No se han encontrado series</h2>
          ) : (
            <h2> No se han encontrado películas</h2>
          ))}
      </div>
    </div>
  );
};
export default Search;

import { Routes, Route} from "react-router-dom";

import Container from '@mui/material/Container';

import MenuAppBar from "./components/header";
import MainTable from "./components/mainTable";
import DetailTable from "./components/detailTable";
import "./App.css";
import SignIn from "./signin";

export default function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <Container maxWidth="lg">
        <Routes>
            <Route path="/" element={<MainTable />} />
            <Route path="detail" element={<DetailTable />} />
            <Route path="signin" element={<SignIn />} />
        </Routes>
      </Container>
    </div>
    
  );
}
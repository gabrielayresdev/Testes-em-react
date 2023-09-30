import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import { RecoilRoot } from "recoil";
import Formulario from "./components/Formulario";
import Card from "./components/Card/Card";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Cabecalho />
        <Routes>
          <Route
            path="/"
            element={
              <Card>
                <Formulario />
              </Card>
            }
          />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;

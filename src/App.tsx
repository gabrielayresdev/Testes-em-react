import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import { RecoilRoot } from "recoil";
import Formulario from "./components/Formulario";
import Card from "./components/Card/Card";
import ListaDeParticipantes from "./components/ListaDeParticipantes/ListaDeParticipantes";

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
                <ListaDeParticipantes />
              </Card>
            }
          />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;

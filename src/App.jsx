import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [paciente, setPaciente] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario paciente={paciente} setPaciente={setPaciente} />
        <ListadoPacientes paciente={paciente} />
      </div>
    </div>
  );
}

export default App;

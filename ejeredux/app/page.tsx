import FormularioEstudiante from "@/components/FormularioEstudiante";
import TablaEstudiantes from "@/components/TablaEstudiantes";
import Estadisticas from "@/components/Estadisticas";
import Buscador from "@/components/Buscador";

export default function Home() {

  return (

    <main className="container">

      <h1>
        Sistema de Control de Notas
      </h1>

      <FormularioEstudiante />

      <Buscador />

      <Estadisticas />

      <TablaEstudiantes />

    </main>

  );

}
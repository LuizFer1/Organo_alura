import { useState } from "react";
import Banner from "./components/banner/index.js";
import Formulario from "./components/form/index.js";
import Time from "./components/time/index.js";
import Rodape from "./components/rodape/index.js";

function App() {
  const times = [
    {
      nome: "Mid",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Top",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Jungle",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Sup",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "Adc",
      corPrimaria: "#D86EBF",
      corSecundaria: "#FFF5D9",
    },
  ];

  const [jogadores, setJogadores] = useState([]);

  const addJogador = (player) => {
    setJogadores([...jogadores, player]);
    console.log(jogadores)
  };

  return (
    <div className="App">
      <Banner />
      <Formulario novoPlayer={(player) => addJogador(player)} times={times.map(time => time.nome)} />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          jogadores={jogadores.filter(jogador => jogador.time == time.nome)}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;

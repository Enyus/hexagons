import { useState } from "react";
import {
  HexGrid,
  Layout,
  Hexagon,
  Text,
  GridGenerator
} from "react-hexgrid";

import "./App.css";

function App() {
  const hexagons = GridGenerator.rectangle(12, 14)

  return (
    <div>
      <h1>Usando <a href="https://github.com/Hellenic/react-hexgrid" target='_blank'>React-Hexgrid</a></h1>

      <div className="hexgrid">
        <HexGrid 
          width={800} // define a largura do HexGrid (bloco que engloba os hexágonos)
          height={400} // define a altura do HexGrid
          viewBox="-50 -50 100 100"
        >

          <Layout
            size={{ x: 10, y: 10 }} // define o tamanho dos hexágonos em relação ao HexGrid
            flat={true} // muda a rotação dos exágonos
            spacing={1.1} // define o espaçamento entre os exágonos <1 estarão um sobre o outro, =1 sem espaçamento, >1 com espaçamento proporcional ao tamanho do hexágono
            origin={{ x: 0, y: 0 }} // define a posição dos hexágonos em relação ao grid, (0,0) indica o centro do HexGrid
          >

            <Hexagon 
              q={-1} // coordenada que define a posição do hexágono no eixo horizontal, sendo 0 o centro, <0 para a esquerda e >0 para a direita
              r={0} // coordenada que define a posição do hexágono no eixo Nordeste-Sudoeste, sendo 0 o centro, <0 mais para Nordeste (cima-direita), >0 mais para Sudoeste (baixo-esquerda)
              s={1} // coordenada que define a posição do hexágono no eixo Sudeste-Noroeste, sendo 0 o centro, <0 mais para Sudeste (baixo-direita), >0 mais para Noroeste (cima-esquerda)
            />
            <Hexagon q={-1} r={1} s={0} />
            <Hexagon q={0} r={-1} s={1} />
            <Hexagon q={0} r={0} s={0} /> {/* Centro */}
            <Hexagon q={1} r={-1} s={0} />
            <Hexagon q={1} r={0} s={-1} />
            <Hexagon q={0} r={1} s={-1}>
              <Text className="texto">
                <a href="#" className="texto">
                  1
                </a>
              </Text>
            </Hexagon>
          </Layout>
        </HexGrid>
      </div>

      <div className="hexgrid">
        <HexGrid width={800} height={800} viewBox="0 0 100 100">
          <Layout size={{ x: 5, y: 5}} spacing={1.05} origin={{ x: 0, y: 0 }} flat={false}>
            {hexagons.map( (hex, i) => <a href="#"><Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} /></a>) }
          </Layout>
        </HexGrid>
      </div>

    </div>
  );
}

export default App;

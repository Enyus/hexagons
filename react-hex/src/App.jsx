import { useState } from 'react'
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='hexgrid'>
      <HexGrid width={1200} height={800} viewBox="-50 -50 100 100" >
        <Layout size={{ x: 5, y: 5 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
          <Hexagon q={-1} r={0} s={1} />
          <Hexagon q={-1} r={1} s={0} />
          <Hexagon q={0} r={-1} s={1} />
          <Hexagon q={0} r={0} s={0} /> {/* Centro */}
          <Hexagon q={1} r={-1} s={0} />
          <Hexagon q={1} r={0} s={-1} />
          <Hexagon q={0} r={1} s={-1}>
            <Text className='texto'>
              <a href='google.com' className='texto'>1</a>
            </Text>
          </Hexagon>
        </Layout>
      </HexGrid>
    </div>
  )
}

export default App

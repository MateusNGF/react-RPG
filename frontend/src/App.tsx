import * as C from "./App.styles"
import { useEffect } from 'react'
import { Person } from './components/Personagem'
import { usePerson } from './hooks/usePerson'



export default function App() {

  const person = usePerson();

  useEffect(() => {
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      switch (e.code) {
        case 'ArrowRight':
        case 'KeyD': person.MovieRight()
          break;

        case 'ArrowLeft':
        case 'KeyA': person.MovieLeft()
          break;

        case 'ArrowUp':
        case 'KeyW': person.MovieUp()
          break;
        case 'ArrowDown':
        case 'KeyS': person.MovieDown()
          break;
      }
    })
  }, [])

  return (
    <C.Container>
      <C.Map>
        <Person x={person.x} y={person.y} side={person.side} />
      </C.Map>
    </C.Container>
  );
};

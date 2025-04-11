import { useState } from 'react'
import Students from './Students';
import NavBar from './components/NavBar';

const App = () => {

  const discGolfDiscs = [
    { name: "Innova Destroyer", speed: 12, glide: 5, turn: -1, fade: 3 },
    { name: "Discraft Nuke", speed: 13, glide: 5, turn: -1, fade: 3 },
    { name: "Dynamic Discs Sheriff", speed: 13, glide: 5, turn: -1, fade: 2 },
    { name: "Innova Leopard", speed: 6, glide: 5, turn: -2, fade: 1 },
    { name: "Discmania FD", speed: 7, glide: 6, turn: -1, fade: 1 },
    { name: "Latitude 64 River", speed: 7, glide: 7, turn: -1, fade: 1 },
    { name: "Innova Roc", speed: 4, glide: 4, turn: 0, fade: 3 },
    { name: "Discraft Buzzz", speed: 5, glide: 4, turn: -1, fade: 1 },
    { name: "Dynamic Discs Judge", speed: 2, glide: 4, turn: 0, fade: 1 },
    { name: "Innova Aviar", speed: 2, glide: 3, turn: 0, fade: 1 }
  ];
  return (
    <>
    <NavBar />
    <h1>Hello world!</h1>
    <Students />
    <Discgolf disc={discGolfDiscs}/>
    </>
  );
}

export default App

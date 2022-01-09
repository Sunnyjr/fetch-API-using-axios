import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();

  useEffect(() => {
    //alert('hiii');
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);  
      console.log(res.data.name);  //show data
      setName(res.data.name);  //access name
      setMoves(res.data.moves.length);  //moves in array form so to access the array data we use moves.lenght here.
    }
    getData();
  });
  return (
    <>
      <h1>
        you choose <span style={{ color: "red" }}> {num} value</span>
      </h1>
      <h1>
        my name is <span style={{ color: "red" }}> {name} </span>
      </h1>
      <h1>
        i have <span style={{ color: "red" }}> {moves} moves</span>
      </h1>

      <select value={num} onChange={(event) => {
        setNum(event.target.value);

      }}
      >
        <option value="1"> 1 </option>
        <option value="25"> 25 </option>
        <option value="3"> 3 </option>
        <option value="4"> 4 </option>
        <option value="5"> 5 </option>
      </select>
    </>
  )
}

export default App;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { GiphyFetch } from '@giphy/js-fetch-api'


// function App() {

//   useEffect(() => {
//     //alert('hiii');
//     fetch("")
//       .then((res) => res.json())
//       .then((resp) => console.log(resp));

//   }, []);
//   return <div></div>;
// }

// export default App;

// github code:
//import { GiphyFetch } from '@giphy/js-fetch-api'

// const gf = new GiphyFetch('your api key')

// // fetch 10 gifs
// const { data: gifs } = await gf.trending({ limit: 10 })    
// **************************************

import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import {getAllMemes} from "../api/memes"
import "../styles/home.scss"

const Home = () => {

    const [data, setData] = useState([]);

useEffect(() => {
getAllMemes().then(memes => setData(memes.data.memes))
}, []);

  return (
    <div className='main grid'>
    {data.map((el, index) => (
      <div key={index} className='grid-item'>
        <Card img={el.url} title={el.name} />
      </div>
    ))}
  </div>
  )
}

export default Home
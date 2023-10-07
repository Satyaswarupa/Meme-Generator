import React from 'react'
import { useNavigate } from 'react-router-dom'


const Card = (props) => {
    const navigate = useNavigate();
  return (
    <div>
        <div>
            <img src={props.img} alt="" />
            <h2>{props.title}</h2>
            <button onClick={(e) => navigate(`/edit?url=${props.img}`)}>edit</button>
           
        </div>
    </div>
  )
}

export default Card
import React, { createRef, useState } from 'react'
import {useSearchParams} from "react-router-dom"
import Text from './Text';
import {exportComponentAsJPEG} from "react-component-export-image"
import "../styles/edit.scss"

const Edit = () => {
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);

    const memeref = createRef();

    const addText = () => {
        setCount(count+1);
    };

  return (
    <div className='editpage'>
        <div className='down' ref={memeref}>
        <img src={params.get("url")} alt="" />
        {
            Array(count).fill(0).map(e => <Text />)
        }
    </div>
    <button onClick={addText}>Add text</button>
    <button onClick={(e) => exportComponentAsJPEG(memeref)}>Download</button>
    </div>
  )
}

export default Edit
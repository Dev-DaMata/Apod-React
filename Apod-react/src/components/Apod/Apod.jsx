import React from 'react'
import { useState } from 'react'

const Apod = () => {
    const [respostaReq, setRespostaReq] = useState({})
    async function handleRequisicao(key){
        const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=V4n5887oanZY2NL5JyoEmkhBHHJYmbAhzIJ0TEgJ&date=")
        const json = await response.json()
        setRespostaReq(json.results[0])
        console.log(respostaReq);
    }

  return (
    <form>
        <label>Escolha a data </label>
        <p>{respostaReq ? respostaReq.title : ""}</p>
        <input type="date" min="1995-06-20" max=""/>
        <button onClick={handleRequisicao} ></button>
    </form>
  )
}

export default Apod
import React from 'react'
import { useState } from 'react'
import S from './Apod.module.css'
const Apod = () => {
    const [respostaReq, setRespostaReq] = useState()
    const [data, setData] = useState("")
    async function handleRequisicao(e){
      e.preventDefault()
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=V4n5887oanZY2NL5JyoEmkhBHHJYmbAhzIJ0TEgJ&date=${data}`)
        const json = await response.json()
        console.log(json);
        setRespostaReq(json)
    }

    function handleChange(e){
      setData(e.target.value)
    }


  return (
    <form>
        <label>Escolha a data </label>
        <input type="date" min="1995-06-20" max="" onChange={handleChange}/>
        <button onClick={handleRequisicao} >Pesquisa</button>

        <p>{respostaReq ? respostaReq.title : "não achei"}</p>
        <p>{respostaReq ? respostaReq.explanation : "não achei"}</p>
        {respostaReq.media_type === "image" ? 
        <img src={respostaReq.url}/> 
        : 
        <iframe src={respostaReq.url} frameborder="0"></iframe>
      }       
    </form>
  )
}

export default Apod
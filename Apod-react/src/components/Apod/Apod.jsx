import React from 'react'
import { useState } from 'react'

const Apod = () => {
    const [respostaReq, setRespostaReq] = useState({})
    async function handleRequisicao(e){
      e.preventDefault()
        const data = e.target.value
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=V4n5887oanZY2NL5JyoEmkhBHHJYmbAhzIJ0TEgJ&date=${data}`)
        const json = await response.json()
        console.log(json);
        setRespostaReq(json)
        // console.log(respostaReq);
    }

    function handlePicture () {
      if (data.media_type == "image") {
       `<br><img width="620px" height="400px" src="${data.url}">`;
    } else if (data.media_type == "video") {
      `<br><iframe width="620px" height="400px" src="${data.url}">`;
    }
    }

  return (
    <form>
        <label>Escolha a data </label>
        <input type="date" min="1995-06-20" max=""/>
        <button onClick={handleRequisicao} >Pesquisa</button>

        <p>{respostaReq ? respostaReq.title : "não achei"}</p>
        <p>{respostaReq ? respostaReq.explanation : "não achei"}</p>
        <iframe src={respostaReq ? respostaReq.url : "não achei"}/>
        
    </form>
  )
}

export default Apod
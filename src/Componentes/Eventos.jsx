function Eventos(){
     
    function ligaClick() {
        console.log("estou clicando")
      }
    
      function pegaInput(event) {
        console.log(event.target.value)
      }

    return(
      <div className="card">
        <input placeholder='digite seu numero' onChange={pegaInput}/>
        <button onClick={ligaClick}>count is </button>
      </div> 
    )
}

export default Eventos
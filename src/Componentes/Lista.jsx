import filmes from "../Service/Dados"

const Lista = () => {
    return(
      <div>
        {
            filmes.map(item => {
                return(
                    <div key={item.id}>
                        <h2>{item.nome}</h2>
                        <img src={item.imagem} />
                        <p>{item.descricao}</p>
                    </div>
                )
             })
        }
      </div>
    )
}

export default Lista
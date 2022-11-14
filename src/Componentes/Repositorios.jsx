import { useState, useEffect } from 'react'
import Axios from 'axios'

function Repositorios() {
    const baseURL = 'https://api.github.com/users/rayalcides/repos'
      const [repos, setRepos] = useState([])
    useEffect(() => {
        async function getData() {
            const response = await Axios.get(baseURL)
            setRepos(response.data)
        }
        getData()
    }, []
    )
     
    return (
        <div>
          {
            repos.map((item) => {
               return(
                <div key={item.id}>
                  <p>{item.name}</p>
                </div>
               )
            }) 
          }
        </div>
    )
}


export default Repositorios
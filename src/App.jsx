import React from 'react'
import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'

const App = () => {
    const users = [
      {
        img: 'https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        intro: '',
        color:'orange', 
        tag: 'Satisfied'
      },
      {img: 'https://images.unsplash.com/photo-1747741744139-663023d082bc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        intro: '', 
         color:'pink', 
        tag: 'Underserved'
      },
      {img: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        intro: '',
         color:'lightskyblue',  
        tag: 'Underbanked',
      },
       {img: 'https://images.unsplash.com/photo-1535957998253-26ae1ef29506?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        intro: '', 
         color:'seagreen', 
        tag: 'Average',
      },

    ]


  return (
    <div>
<Section1 users = {users}/>
<Section2/>

    </div>
  )
}

export default App
import React from "react"
import {useState, useEffect} from "react"
const Context = React.createContext()


function ContextProvider ({children}){

    const [photos, setAllPhotos] = useState([])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(()=>{
      fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data)) //Testing context in other pages
    },[])


    return(
        <Context.Provider value={{photos}}>
        {children}
    </Context.Provider>
    )

}

export {ContextProvider, Context}
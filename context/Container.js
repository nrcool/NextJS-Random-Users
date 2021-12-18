import React,{useEffect,useState} from 'react'
import { MyContext } from './Context'

export default function Container({children}) {
    const [data,setData]=useState(null)
    const [users,setUsers]=useState([])
    const [loading,setLoading]=useState(false)
    const [page,setPage]=useState(1)
    const [about,setAbout]=useState(false)
    const [updatedUsers,setUpdatedUsers]=useState([])
    const [select,setSelect]=useState("name")


   
    useEffect(()=>{
        console.log("trigger")
        fetch(`api/users/${page}`)
        .then(res=>res.json())
        .then(final=>{
            console.log(final.result)
            setData(final.result)
            setUsers([...users,...final.result.users])
            setUpdatedUsers([...users,...final.result.users])
            setLoading(false)
        })
    },[page])

    useEffect(()=>{
        setUpdatedUsers(users.sort((a,b)=>{
            if(a[select].toLowerCase()>b[select].toLowerCase()){
                return 1
            }else{
                return -1
            }       
        }))
    },[select])

    return (
        <MyContext.Provider value={{data,setData,updatedUsers,setUsers,loading,setLoading,page,setPage ,about,setAbout,setSelect,select}}>
            {children}
        </MyContext.Provider>
    )
}

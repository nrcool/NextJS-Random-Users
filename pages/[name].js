import {useRouter} from 'next/router'
import Link from 'next/link'
import React, { useContext } from 'react'
import { MyContext } from '../context/Context'

/* export const getStaticProps=async ()=>{
    const res= await fetch("https://jsonplaceholder.typicode.com/users")
    const result= await res.json()
    return {props:{users:result}}
} */
/* 
export const getStaticPaths=async ()=>{
    const res= await fetch("https://jsonplaceholder.typicode.com/users")
    const result= await res.json()
    const paths= result.map(user=>({params:{id:user.id.toString()}}))
    return {paths,fallback:false}
}
*/

export default function User(props) {
    const route= useRouter()
    const {updatedUsers}=useContext(MyContext)
    const user= updatedUsers.find(user=>user.name===route.query.name)
    if(user){
       return (
        <div>
            <h2>User Comp</h2>
            <img src={user.picture_large} alt="" />
            <h3>user name: {user.name}</h3>
            <h4>email : {user.email}</h4>
            <Link href="/">go back</Link>
        </div>
    ) 
    }else{
        route.back()
    }
   
    
}

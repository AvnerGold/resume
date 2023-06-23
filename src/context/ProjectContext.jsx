import React from 'react'
import { createContext, useState,useEffect } from 'react'



export const ProjectContext = createContext();

export default function ProjectContextProvider({children}){
 const [projects,SetProjects] = useState([])
 
 const LoadProjects = async()=>{
    try{
        let res = await fetch('./data/projects.json');
        let data = await res.json();
        console.log(data);
        SetProjects(data)
    }catch(error){
        console.error(error)
    }
 }// check

 useEffect(() => {
    LoadProjects()
 },[])

const value = {
    projects,
    SetProjects
}
 return (
    <ProjectContext.Provider value={value}>
    {children}
    </ProjectContext.Provider>
 )
}
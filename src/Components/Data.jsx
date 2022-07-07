import React, { createContext, useState } from 'react'

export const get =createContext()

const Data= (props) => {

    const [students,setStudents]=useState([

{
    "Name":"Joe",
    "Age":"25",
    "Course":"MERN",
    "Batch":"August",
    "id":"1"
    
    },
    
    {
    
        "Name":"Biden",
        "Age":"27",
        "Course":"MERN",
        "Batch":"September",
        "id":"2"
        
        },
        {
    
            "Name":"Martin",
            "Age":"27",
            "Course":"MERN",
            "Batch":"December",
            "id":"3"
            
            },
            
            {
            
                "Name":"Mary",
                "Age":"23",
                "Course":"MERN",
                "Batch":"Januauary",
                "id":"4"
                
                },
                {
            
                    "Name":"Rosie",
                    "Age":"24",
                    "Course":"MERN",
                    "Batch":"April",
                    "id":"5"
                    
                    
                },


    ])
  return (
    <div>



<get.Provider  value={[students,setStudents]}>


    {props.children}


</get.Provider>




        
    </div>
  )
}

export default Data;
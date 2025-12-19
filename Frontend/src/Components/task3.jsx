import React from 'react'
import { useState } from 'react';
function task3() {

    const[create,setcreate]=useState([]);
    const [data,setdata]=useState("");
    const [edit,setedit]=useState(null);

    const handlechange=(e)=>{
        if(!data.trim()){
            return;
        }
        if(edit){
           
            setcreate(
                create.map((item)=>
                    
                    item.id===edit ? {...item,data} : item
                )
            );
            setedit(null);

        }else{
            
            setcreate([...create,{id:Date.now(),data}]);
        }
        setdata("");
    }

    const handeldelete=(id)=>{
        setcreate(create.filter((item)=>item.id!==id));
    }

    const handleEdit=(item)=>{
        setdata(item.name);
        setedit (item.id);
    };

    const handlesearch=()=>{
       const filtereddata=create.filter((item)=>
            item.data.toLowerCase().includes(data.toLowerCase())
        );  
        setcreate(filtereddata);
    }
    
    const handlesort=()=>{
        const sorteddata=[...create].sort((a,b)=>
            a.data.localeCompare(b.data)
        );
        setcreate(sorteddata);
    }

    return (
    <div>
        <h1>Task 3 </h1>
        <div>
            <input type="text"
            value={data}
            placeholder='name'
            className='border-2'
            onChange={(e)=>setdata(e.target.value)}
            />
            <button 
            className='m-1 border-2 p-1 rounded-2xl'
            onClick={handlechange}>
                {edit ? "Update" : "Add"}
            </button>
            <button 
            className='m-1 border-2 p-1 rounded-2xl'
            onClick={handlesearch}>
                search
            </button>
            <button 
            className='m-1 border-2 p-1 rounded-2xl'
            onClick={handlesort}>
                sort
            </button>
        </div>

        <ul>
          
            {create.map((item)=>(
                <li 
                className='m-1 border-2 rounded-2xl p-2'
                key={item.id}>       
                    <span>{item.data}</span>
                    <div className='m-1 flex'>
                        <button className='m-2' onClick={()=>handeldelete(item.id)}>Delete</button>
                        <button className='m-2' onClick={()=>handleEdit(item)}>Edit</button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}
export default task3

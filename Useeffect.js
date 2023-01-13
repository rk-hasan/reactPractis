import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const [count, Setcount] = useState(0);
    const [Data, Setdata] = useState(null);
    const [isLoading, SetIsloading]= useState(true);
    const [error, Seterror] = useState(null);

    const massage = <p>Loading....</p>

    useEffect(()=>{
       setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
           if(!res.ok){
            throw Error("Sorry Data Not Loading");
           }else{
            return res.json()
           }
        }).then((data)=>{
            Setdata(data)
            SetIsloading(false);
        }).catch((Error)=>{
            Seterror(Error.message);
            SetIsloading(false);
        })
       }, 2000);
    },[])

   
  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={()=>{Setcount(count + 1)}}>+</button>

        {isLoading && <h2 style={{color: "green"}}>{massage}</h2>}
        {error && <p style={{color: "red"}}>{error}</p>}

        {
            Data && Data.map((item)=>{
               return <p key={item.id}>{item.body}</p>
            })
        }
    </div>
  )
}

export default Useeffect

"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {

    const {id} = useParams();
    const [users,setUsers] = useState([])
    useEffect(()=>{
       const fetchData = async()=>{
           const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
           const data = await res.json();
           setUsers(data)
       }
       fetchData()
    },[id])
    return (
        <div className="text-center">
            <h3 className="font-bold text-3xl pt-6">Details Page</h3>
            <div className="card bg-pink-100 mt-6 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Title: {users.title}</h2>
    <p>Body: {users.body}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Id: {users.id}</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default page;
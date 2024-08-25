"use client"
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import React, { useEffect } from "react";

export default async function Home() {

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/login')
        //we are awaiting the response and also converting the json response
        const data = await res.json()
        console.log(data)
      }
      catch (e) {
        console.log("something went wrong")
      }
    }
    getData()
  }, []);


  return (
    <main>
      <Navbar />
      <Hero />

    </main>
  );
}

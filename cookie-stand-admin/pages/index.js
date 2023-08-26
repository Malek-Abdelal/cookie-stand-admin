import { useState } from "react"
import Head from "next/head"
import Header from "@/components/Header"
import Main from "@/components/Main"
import Footer from "@/components/Footer"
import { data } from "@/data"


export default function CookieStandAdmin(){
 
  const [records, setRecord] = useState([])
  const [themeColor, setThemeColor] = useState({bgColor:"bg-cyan-700",hoverColor:"hover:bg-cyan-500", textColor:"text-cyan-700"})
  const [report, setReport] = useState([])
  
  
  function cookieFormHandler(event){
    event.preventDefault() 
    const recordObj = {
      id: records.length+1,
      location: event.target.location.value,
      max: event.target.max_customers_num.value,
      min: event.target.min_customers_num.value,
      cookie: event.target.avg_cookies.value
    }
    setReport([...report, data])
    setRecord([...records, recordObj])
  }

  function changeThemeColor(event){
    event.preventDefault()
    if (themeColor.bgColor == "bg-cyan-700"){
      setThemeColor({bgColor:"bg-orange-300",hoverColor:"hover:bg-orange-200", textColor:"text-orange-300"})
    }
    else{
      setThemeColor({bgColor:"bg-cyan-700",hoverColor:"hover:bg-cyan-500", textColor:"text-cyan-700"})
    }
  }

  return(
    <>
    <Head>
    <title>Cookie Stand Admin</title>
    </Head>
    <div className="flex flex-col min-h-screen">
      <Header themeColor={themeColor}/>
      <Main records={records} report={report} cookieFormHandler={cookieFormHandler} themeColor={themeColor}/>
      <Footer changeThemeColor={changeThemeColor} themeColor={themeColor} records={records}/>
    </div>
    </>
    )
} 











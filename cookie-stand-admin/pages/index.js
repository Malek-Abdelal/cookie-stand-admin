import { useAuth } from "@/contexts/auth"
import CookieStandAdmin from "@/components/CookieStandAdmin"


export default function Home(){
  const {login, user,logout}= useAuth() 
  
  return(
    <>
    { user ?
      <CookieStandAdmin/>
     : 
     (<>
     <h2>needs to login</h2>
     <button className="p-2 text-white bg-gray-500 rounded" onClick={()=>login("anas","ana-123456")}>Login</button>
     </>
     )
      
     }
    </>
  )
}
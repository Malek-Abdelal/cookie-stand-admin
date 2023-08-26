import Link from "next/link"

export default function Header({themeColor}){
    return(
      <>
      <header className={`flex items-center justify-between p-4 ${themeColor.bgColor} text-gray-50`}>
      <p className="text-4xl">Cookie Stand</p>
      <div>
        
      <button className={`px-4 py-2 font-bold bg-white rounded ${themeColor.textColor} hover:bg-slate-200`}>
      <Link href={'overview'}>
        Overview
        </Link>
      </button>
      </div>
      </header>
      </>
      
    )
  }

  
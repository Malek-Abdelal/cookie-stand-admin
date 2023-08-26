export default function Footer({changeThemeColor, themeColor, records}){
    return(
      <>
       <footer className={`p-4 mt-8 ${themeColor.bgColor} text-gray-50 flex justify-around`} >
        <p className="px-4 py-2">&copy; Malek Abdelal</p>
        <p className="px-4 py-2">{records.length} Locations World Wide</p>
        <button onClick={changeThemeColor} className={`bg-white hover:bg-slate-200 ${themeColor.textColor} font-bold py-2 px-4 rounded`}>
  Change Theme
</button>
       </footer>
      </>
    )
  } 
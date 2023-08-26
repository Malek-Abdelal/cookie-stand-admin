import Form from "./Form"
import ReportTable from "./ReportTable"

export default function Main({records, cookieFormHandler, report, themeColor}){
    return(
      <>
      <main className="flex flex-col items-center flex-grow py-4 space-y-8">
        <div className="flex flex-col justify-center flex-1 max-w-screen-xl min-h-full px-6 py-10 mx-auto bg-gray-100 rounded-lg lg:px-8">
          <h1 className="mt-5 text-3xl font-bold text-center text-black">Create Cookie Stand</h1>
          <Form cookieFormHandler = {cookieFormHandler} themeColor={themeColor}/>
        </div>
        {report[0]? <ReportTable records={records} report={report}/>: <h2>No Cookie Stands Available</h2>}
        
      </main>
      </>
    )
  }

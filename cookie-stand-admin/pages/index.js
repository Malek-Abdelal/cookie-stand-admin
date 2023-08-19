import { useState } from "react"

export default function Home(){

  const [locations, setLocations] = useState([])
  const [maxs, setMaxs] = useState([])
  const [mins, setMins] = useState([])
  const [cookies, setCookies] = useState([])

  function cookieFormHandler(event){
    event.preventDefault()  
    setLocations([...locations, event.target.location.value])
    setMaxs([...maxs, event.target.max_customers_num.value])
    setMins([...mins, event.target.min_customers_num.value])
    setCookies([...cookies, event.target.avg_cookies.value])
  }

  return(
    <>
    <Head/>
    <body className="flex flex-col min-h-screen">
      <Header/>
      <Main locations={locations} mins={mins} maxs={maxs} cookies={cookies} cookieFormHandler={cookieFormHandler}/>
      <Footer/>
    </body>
    </>
    )
} 

function Head(){
  return(
    <>
    <title>Cookie Stand Admin</title>
    </>
  )
}

function Header(){
  return(
    <>
    <header className="flex items-center justify-between p-4 bg-cyan-700 text-gray-50">
    <p className="text-4xl">Cookie Stand</p>
    </header>
    </>
  )
}

function Main(props){
  return(
    <>
    <main className="flex flex-col items-center py-4 space-y-8 flex-grow">
      <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-10 mx-auto bg-gray-100 rounded-lg lg:px-8 max-w-screen-xl">
        <h1 className="mt-5 text-3xl font-bold text-center text-black">Create Cookie Stand</h1>
        <Form cookieFormHandler = {props.cookieFormHandler}/>
      </div>

      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" class="px-6 py-4">#</th>
                    <th scope="col" class="px-6 py-4">Location</th>
                    <th scope="col" class="px-6 py-4">Maximum customers per hour</th>
                    <th scope="col" class="px-6 py-4">Minimum customers per hour</th>
                    <th scope="col" class="px-6 py-4">Average cookies per sale</th>
                  </tr>
                </thead>
                <tbody>
                  {
                  props.locations.map((item, index) => (
                  <tr
                    class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">{index+1}</td>
                    <td class="whitespace-nowrap px-6 py-4">{props.locations[index]}</td>
                    <td class="whitespace-nowrap px-6 py-4">{props.maxs[index]}</td>
                    <td class="whitespace-nowrap px-6 py-4">{props.mins[index]}</td>
                    <td class="whitespace-nowrap px-6 py-4">{props.cookies[index]}</td>
                  </tr>
                  ))}
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

function Form(props){
  return(
    <>
    <form className="mt-10 space-y-6" onSubmit={props.cookieFormHandler}>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <InputField type='text' name ='location' required='required' label='Location' />
        <InputField type='number' name ='max_customers_num' required='required' label='Maximum customers per hour' />
        <InputField type='number' name ='min_customers_num' required='required' label='Minimum customers per hour' />
        <InputField type='number' name ='avg_cookies' required='required' label='Average cookies per sale' />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="w-1/4 px-6 py-3 text-white bg-cyan-600 rounded-md hover:bg-cyan-500"> Create
          </button>
        </div>
      </form>
    </>
  )
}

function InputField(props){
  return(
    <>
      <div className="flex flex-col mb-4">
        <label className="text-sm font-semibold text-black">{props.label}</label>
        <input type={props.type} name={props.name} autoComplete required={props.required} className="w-full py-2 px-4 mt-1 text-gray-800 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
      </div>
    </>
  )
}

function Footer(){
  return(
    <>
     <footer className="p-4 mt-8 bg-cyan-700 text-gray-50" >
      <p>&copy; Malek Abdelal</p>
     </footer>
    </>
  )
}
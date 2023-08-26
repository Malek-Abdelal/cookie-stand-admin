export default function Form({cookieFormHandler, themeColor}){
    return(
      <>
      <form className="mt-10 space-y-6" onSubmit={cookieFormHandler}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <InputField type='text' name ='location' label='Location' />
          <InputField type='number' name ='max_customers_num' label='Maximum customers per hour' />
          <InputField type='number' name ='min_customers_num' label='Minimum customers per hour' />
          <InputField type='number' name ='avg_cookies' label='Average cookies per sale' />
          </div>
          <div className="flex justify-center">
            <button type="submit" className={`w-1/4 px-6 py-3 text-white ${themeColor.bgColor} rounded-md ${themeColor.hoverColor}`}> Create
            </button>
          </div>
        </form>
      </>
    )
  }

  function InputField({type, name, label}){
    return(
      <>
        <div className="flex flex-col mb-4">
          <label className="text-sm font-semibold text-black">{label}</label>
          <input type={type} name={name} className="w-full px-4 py-2 mt-1 text-gray-800 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
      </>
    )
  }
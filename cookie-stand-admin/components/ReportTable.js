
export default function ReportTable({records, report}){
  let sum = 0
    return(
      <>
    <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full text-left text-sm font-light">
                  <thead class="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" class="px-6 py-4">#</th>
                      <th scope="col" class="px-6 py-4">Location</th>
                      <th scope="col" class="px-6 py-4">6 am</th>
                      <th scope="col" class="px-6 py-4">7 am</th>
                      <th scope="col" class="px-6 py-4">8 am</th>
                      <th scope="col" class="px-6 py-4">9 am</th>
                      <th scope="col" class="px-6 py-4">10 am</th>
                      <th scope="col" class="px-6 py-4">11 am</th>
                      <th scope="col" class="px-6 py-4">12 pm</th>
                      <th scope="col" class="px-6 py-4">1 pm</th>
                      <th scope="col" class="px-6 py-4">2 pm</th>
                      <th scope="col" class="px-6 py-4">3 pm</th>
                      <th scope="col" class="px-6 py-4">4 pm</th>
                      <th scope="col" class="px-6 py-4">5 pm</th>
                      <th scope="col" class="px-6 py-4">6 pm</th>
                      <th scope="col" class="px-6 py-4">7 pm</th>
                      <th scope="col" class="px-6 py-4">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                    report.map((item, index)=>(
                      <>
                      <tr
                      class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">

                        <td class="whitespace-nowrap px-6 py-4 font-medium">{index+1}</td>
                        <td class="whitespace-nowrap px-6 py-4 font-medium">{records[index].location? records[index].location: ""}</td>
                      
                      { 
                      report[index].map((item, index) => (
                        <td class="whitespace-nowrap px-6 py-4 font-medium">{item}</td>                 
                          ))}
                      </tr>
                      {
                        index == report.length - 1 && <tr
                        class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                          <td class="whitespace-nowrap px-6 py-4 font-medium">#</td>
                          <td class="whitespace-nowrap px-6 py-4 font-medium">Totals</td>
                          {
                            report[index].map((item, index)=>(

                              <td class="whitespace-nowrap px-6 py-4 font-medium">{item*report.length}</td>
                            ))
                          }
                        </tr>
                      }
                      
                      </>
                        ))
                    }
                   
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    </>
    )
  }



  
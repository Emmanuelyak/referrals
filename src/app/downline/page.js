import Navbar from "@/components/navigation/nav-bar"

function Downline() {
  return (
    <div className="bg-background h-screen">
        <Navbar />

        <div className="w-8/12 m-auto mt-14">
        <table className="w-full">
          <thead>
            <tr className="border">
              <th className="w-[20%] border p-2">Name</th>
              <th className="w-[20%] border p-2">Date</th>
              <th className="w-[20%] border p-2">Downline</th>
              <th className="w-[20%] border p-2">Amount</th>
              {/* <th className="w-[20%] border p-2">Review1</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              {/* <td className="w-[20%] border p-2">Review1</td> */}
            </tr>
            <tr>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              {/* <td className="w-[20%] border p-2">Review1</td> */}
            </tr>
            <tr>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              {/* <td className="w-[20%] border p-2">Review1</td> */}
            </tr>
            <tr>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              {/* <td className="w-[20%] border p-2">Review1</td> */}
            </tr>
            <tr>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              {/* <td className="w-[20%] border p-2">Review1</td> */}
            </tr>
            <tr>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              {/* <td className="w-[20%] border p-2">Review1</td> */}
            </tr>
          </tbody>
        </table>
        <div className="flex justify-between items-center  border border-t-0 px-3">
          <div>Page <strong>1</strong> of <strong>10</strong></div>
          <div className="flex gap-10 mt-4"> <div>{"<<"}</div> <div className=""><ul className="flex gap-3"><li className=" border-2 px-1.5 border-r-blue-500 rounded-full">1</li><li>2</li><li>3</li> <li>...</li></ul></div> <div>{'>>'}</div> </div>
          <div>items <strong>15</strong></div>
        </div>
      </div>
    </div>
  )
}
export default Downline
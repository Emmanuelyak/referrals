"use client";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Navbar from "@/components/navigation/nav-bar";
import { CiSaveDown1 } from "react-icons/ci";

import { DatePicker, SelectPicker, VStack } from "rsuite";

function page() {
  const data = [
    {
      name: "Jan",
      uv: 2000,
      // pv: 2400,
      amt: 200,
    },
    {
      name: "Feb",
      uv: 4000,
      // pv: 2400,
      amt: 2100,
    },
    {
      name: "Mar",
      uv: 3000,
      // pv: 2400,
      amt: 2200,
    },
    {
      name: "Apr",
      uv: 1000,
      // pv: 2400,
      amt: 2300,
    },
  ];
  const  Data= [
      "Eugenia",
      "Bryan",
      "Linda",
      "Nancy",
      "Lloyd",
      "Alice",
      "Julia",
      "Albert",
    ].map((item) => ({ label: item, value: item }));
  return (
    <div className="bg-background h-screen">
      <Navbar />
      <div className="w-8/12 m-auto mt-10 ">
        <div className="flex justify-between mb-4">
          <div className="pl-10">
            <DatePicker />
            <DatePicker />
          </div>
          <div>
            <VStack>
              <SelectPicker data={Data} style={{ width: 324 }} />
            </VStack>
          </div>
        </div>
        <div className="flex justify-between items-start">
          <div className="w-9/12">
            <ResponsiveContainer width={"100%"} height={300}>
              <BarChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="0 0 0 0 0" />
                <XAxis dataKey="name" />
                <YAxis style={{border:"none"}}/>
                <Tooltip />
                <Bar
                  dataKey="uv"
                  fill="#2a33d8"
                  activeBar={<Rectangle fill="pink" stroke="blue" />}
                />
                <Bar
                  dataKey="pv"
                  fill="#FF5F5E"
                  activeBar={<Rectangle fill="gold" stroke="purple" />}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="w-3/12 grid grid-cols-1">
            <div className="flex flex-col justify-center items-center border rounded-md p-7 bg-white">
              <CiSaveDown1 />
              <p className="font-semi-bold mt-3">Total Amount Generated</p>
              <p>NGN 250,000</p>
            </div>
            <div className="flex flex-col justify-center items-center border rounded-md p-7 bg-white mt-3">
              <CiSaveDown1 />
              <p className="font-semi-bold mt-3">Total Amount Settled</p>
              <p>NGN 250,000</p>
            </div>
          </div>
        </div>
        <div className="w-9/12 mt-5 pl-10">
        <table className="w-full">
          <thead>
            <tr className="border">
              <th className="w-[20%] border p-2">Campaign</th>
              <th className="w-[20%] border p-2">Date</th>
              <th className="w-[20%] border p-2">Downline</th>
              <th className="w-[20%] border p-2">Amount</th>
              {/* <th className="w-[20%] border p-2">Review1</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-[20%] border p-2">Rework</td>
              <td className="w-[20%] border p-2">12/10/2024</td>
              <td className="w-[20%] border p-2">13</td>
              <td className="w-[20%] border p-2">10,000</td>
              {/* <td className="w-[20%] border p-2">Review1</td> */}
            </tr>
            <tr>
              <td className="w-[20%] border p-2">Rework</td>
              <td className="w-[20%] border p-2">12/10/2024</td>
              <td className="w-[20%] border p-2">13</td>
              <td className="w-[20%] border p-2">10,000</td>
              {/* <td className="w-[20%] border p-2">Review1</td> */}
            </tr>
            <tr>
              <td className="w-[20%] border p-2">Rework</td>
              <td className="w-[20%] border p-2">12/10/2024</td>
              <td className="w-[20%] border p-2">13</td>
              <td className="w-[20%] border p-2">10,000</td>
              {/* <td className="w-[20%] border p-2">Review1</td> */}
            </tr>
            <tr>
              <td className="w-[20%] border p-2">Rework</td>
              <td className="w-[20%] border p-2">12/10/2024</td>
              <td className="w-[20%] border p-2">13</td>
              <td className="w-[20%] border p-2">10,000</td>
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
    </div>
  );
}
export default page;

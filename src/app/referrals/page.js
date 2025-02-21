"use client";
import Navbar from "@/components/navigation/nav-bar";
import React from "react";
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
import { DatePicker, SelectPicker, VStack } from "rsuite";

function Referrals() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      // pv: 2400,
      amt: 2400,
    },
    {
      name: "Page A",
      uv: 4000,
      // pv: 2400,
      amt: 2400,
    },
    {
      name: "Page A",
      uv: 4000,
      // pv: 2400,
      amt: 2400,
    },
    {
      name: "Page A",
      uv: 4000,
      // pv: 2400,
      amt: 2400,
    },
  ];
  const Data = [
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
      <div className="flex w-11/12 m-auto justify-between mt-4 mb-5">
      <div>
      <DatePicker />{" "}
      <DatePicker />{" "}     
      </div>
        <div className="relative">
          {" "}
          <VStack>
            <SelectPicker data={Data} style={{ width: 324 }} />
          </VStack>
        </div>
      </div>
      <div className="w-11/12 m-auto">
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
            <CartesianGrid strokeDasharray="3 0 0 0" />
            <XAxis dataKey="name" />
            <YAxis />
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

      <div className="w-11/12 m-auto mt-14">
        <table className="w-full">
          <thead>
            <tr className="border">
              <th className="w-[20%] border p-2">Review1</th>
              <th className="w-[20%] border p-2">Review1</th>
              <th className="w-[20%] border p-2">Review1</th>
              <th className="w-[20%] border p-2">Review1</th>
              <th className="w-[20%] border p-2">Review1</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
            </tr>
            <tr>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
            </tr>
            <tr>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
            </tr>
            <tr>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
            </tr>
            <tr>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
            </tr>
            <tr>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
              <td className="w-[20%] border p-2">Review1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Referrals;

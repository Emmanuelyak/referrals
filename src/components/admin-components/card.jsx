"use client";
import { BsBarChart } from "react-icons/bs";
import { Separator } from "@/components/ui/separator"
export default function AdminCard(props) {
  return (
    <div className="rounded-lg border bg-white shadow-md">
        <div className="flex items-center gap-3 p-4">
            <div className="rounded-full border p-3 shadow-md">{props.icon}</div>
            <h3 className="text-base md:text-lg">{props.title}</h3>
        </div>
        <Separator className="my-4" />
        <div className="flex justify-between items-center gap-2 p-4">
            <div><h2>${props.amount}k</h2></div>
            <div className="flex flex-col ">
                <span className={props.color}>+{props.percentage}%</span>
                <span>Last period</span>
            </div>
        </div>
    </div>
  )
}
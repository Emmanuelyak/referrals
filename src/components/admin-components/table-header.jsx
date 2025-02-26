"use client"
import { MdOutlineSort } from "react-icons/md";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { BiFilterAlt } from "react-icons/bi";
import { FaRegCalendarPlus } from "react-icons/fa";

export default function AdminTableHeader(props) {
    const invoices = [
        {
          affiliate: "INV001",
          payoutEmail: "ererere@gmail.com",
          refferedBy: "John Doe",
          paymentMethod: "Credit Card",
          payment: "$25",
          status: "pending",
        },
        {
          affiliate: "INV002",
          payoutEmail: "ererere@gmail.com",
          refferedBy: "John Doe",
          paymentMethod: "Credit Card",
          payment: "$25",
          status: "pending",
        },
        {
          affiliate: "INV003",
          payoutEmail: "ererere@gmail.com",
          refferedBy: "John Doe",
          paymentMethod: "Credit Card",
          payment: "$25",
          status: "pending",
        },
        {
          affiliate: "INV004",
          payoutEmail: "ererere@gmail.com",
          refferedBy: "John Doe",
          paymentMethod: "Credit Card",
          payment: "$25",
          status: "pending",
        },
        {
          affiliate: "INV005",
          payoutEmail: "ererere@gmail.com",
          refferedBy: "John Doe",
          paymentMethod: "Credit Card",
          payment: "$25",
          status: "pending",
        },
        {
          affiliate: "INV006",
          payoutEmail: "ererere@gmail.com",
          refferedBy: "John Doe",
          paymentMethod: "Credit Card",
          payment: "$25",
          status: "pending",
        },
        {
          affiliate: "INV007",
          payoutEmail: "ererere@gmail.com",
          refferedBy: "John Doe",
          paymentMethod: "Credit Card",
          payment: "$25",
          status: "pending",
        },
      ];
  return (
    <div className="flex justify-between p-4  border w-full">
          <div>
            <h3 className="text-lg font-bold">{props.title}</h3>
            <p>{props.description}</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  <MdOutlineSort /> Sort by <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {props.sortBy?.map((column, index) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={index}
                        className="capitalize"
                        checked={true}
                        onCheckedChange={(value) =>
                            console.log(column)
                            
                        //   column.toggleVisibility(!!value)
                        }
                      >
                        {column.affiliate}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  <BiFilterAlt /> Filter <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {props.filter?.map((column, index) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={index}
                        className="capitalize"
                        checked={true}
                        // checked={}
                        onCheckedChange={(value) =>
                            console.log(value)
                        //   column.toggleVisibility(!!value)
                        }
                      >
                        {column[column]}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  <FaRegCalendarPlus /> Monthly <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {props.monthly?.map((column , index) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={index}
                        className="capitalize"
                        checked={true}
                        // checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                            console.log(value)
                        //   column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
  )
}
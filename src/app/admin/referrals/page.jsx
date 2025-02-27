"use client";
import { MdOutlineSort } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { BiFilterAlt } from "react-icons/bi";
import { FaRegCalendarPlus } from "react-icons/fa";
import { Input, InputGroup } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import { AlignCenter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const styles = {
  width: 300,
};
export default function AdminReferrals(props) {
  const invoices = [
    {
      affiliate: {
        name: "INV001",
        image: "/user-1.png",
      },
      payoutEmail: "ererere@gmail.com",
      refferedBy: "John Doe",
      paymentMethod: "Credit Card",
      payment: "$25",
      status: "pending",
    },
    {
      affiliate: {
        name: "INV001",
        image: "/user-1.png",
      },
      payoutEmail: "ererere@gmail.com",
      refferedBy: "John Doe",
      paymentMethod: "Credit Card",
      payment: "$25",
      status: "pending",
    },
    {
      affiliate: {
        name: "INV001",
        image: "/user-1.png",
      },
      payoutEmail: "ererere@gmail.com",
      refferedBy: "John Doe",
      paymentMethod: "Credit Card",
      payment: "$25",
      status: "pending",
    },
    {
      affiliate: {
        name: "INV001",
        image: "/user-1.png",
      },
      payoutEmail: "ererere@gmail.com",
      refferedBy: "John Doe",
      paymentMethod: "Credit Card",
      payment: "$25",
      status: "pending",
    },
    {
      affiliate: {
        name: "INV001",
        image: "/user-1.png",
      },
      payoutEmail: "ererere@gmail.com",
      refferedBy: "John Doe",
      paymentMethod: "Credit Card",
      payment: "$25",
      status: "pending",
    },
    {
      affiliate: {
        name: "INV001",
        image: "/user-1.png",
      },
      payoutEmail: "ererere@gmail.com",
      refferedBy: "John Doe",
      paymentMethod: "Credit Card",
      payment: "$25",
      status: "pending",
    },
    {
      affiliate: {
        name: "INV001",
        image: "/user-1.png",
      },
      payoutEmail: "ererere@gmail.com",
      refferedBy: "John Doe",
      paymentMethod: "Credit Card",
      payment: "$25",
      status: "pending",
    },
  ];
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex justify-start gap-2 items-center">
          <div>
            <InputGroup inside style={styles}>
              <InputGroup.Addon>
                <SearchIcon />
              </InputGroup.Addon>
              <Input size="lg" />
            </InputGroup>
          </div>

          <div>
            <Button variant="outline" className="ml-auto">
              <AlignCenter />
            </Button>
          </div>
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
                    onCheckedChange={
                      (value) => console.log(column)

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
                    onCheckedChange={
                      (value) => console.log(value)
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
              {props.monthly?.map((column, index) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={index}
                    className="capitalize"
                    checked={true}
                    // checked={column.getIsVisible()}
                    onCheckedChange={
                      (value) => console.log(value)
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

      <div className="mt-3 border rounded-lg overflow-hidden shadow-md">
        <Table className="w-full">
          <TableHeader className="">
            <TableRow className=" border">
              <TableHead className="pl-10 w-3/12">Affiliate Name</TableHead>
              <TableHead className="font-bold w-2/12">Payout Email</TableHead>
              <TableHead className="font-bold w-2/12">Reffered By</TableHead>
              <TableHead className="font-bold w-2/12">Method</TableHead>
              <TableHead className="font-bold w-2/12">Payment</TableHead>
              <TableHead className="font-bold w-full">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="w-full">
            {invoices.map((invoice, index) => (
              <TableRow key={index}>
                <TableCell className=" pl-10">
                    <div className="flex gap-2 items-center">
                         <div className="w-6 overflow-hidden rounded-full border shadow-md">
                                    <Image src={invoice.affiliate.image || "/user-1.png"} alt="" loading="lazy" layout="responsive" objectFit="cover" objectPosition="center" width={"100"} height={"100"}/>
                                  </div>
                        <span>{invoice.affiliate.name}</span>
                    </div>
                </TableCell>
                <TableCell className=" ">{invoice?.payoutEmail}</TableCell>
                <TableCell className=" ">{invoice?.refferedBy}</TableCell>
                <TableCell className=" ">{invoice?.paymentMethod}</TableCell>
                <TableCell className=" ">{invoice?.payment}</TableCell>
                <TableCell className=" ">{invoice?.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className="px-10">
            <TableRow>
              <TableCell colSpan={11} className="pl-10">
                Total
              </TableCell>
              <TableCell className="text-right pr-10">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}

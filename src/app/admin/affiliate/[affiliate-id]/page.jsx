"use client";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Link2, Percent,Trash2, Plus, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { FaRegCalendarPlus } from "react-icons/fa";
import { BiFilterAlt } from "react-icons/bi";
import { MdOutlineSort } from "react-icons/md";
import AdminCard from "@/components/admin-components/card";
import { BsBarChart } from "react-icons/bs";
import { GiClick } from "react-icons/gi";
import { TbBinaryTree } from "react-icons/tb";
import { ImCoinDollar } from "react-icons/im";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function AffiliateId() {
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
    <div>
      <div className="flex p-2 rounded-lg border">
        <div className="w-10/12 p-4 flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="w-20 p-2 overflow-hidden rounded-full border shadow-md">
              <Image
                src={"/user-1.png"}
                alt=""
                loading="lazy"
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                width={"100"}
                height={"100"}
              />
            </div>
            <div className="flex flex-col">
              <h4>Ruben Batista</h4>
              <p className="pb-3 text-base">gest@testemail.com</p>
              <div className="flex gap-2 items-center">
                <span className="bg-green-200 font-bold rounded-lg px-3 py-0">
                  Earned: $248.6
                </span>
                <span className="bg-yellow-200 font-bold rounded-lg px-3 py-0">
                  Payment method: $248.6
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 w-4/12">
            <div className="text-center">
              <h6 className="text-gray-500">Total Earned</h6>
              <p className="text-xl font-bold">$248.6</p>
            </div>
            <div className="text-center">
              <h6 className="text-gray-500">Total Earned</h6>
              <p className="text-xl font-bold">$248.6</p>
            </div>
            <div className="text-center">
              <h6 className="text-gray-500">Total Earned</h6>
              <p className="text-xl font-bold">$248.6</p>
            </div>
            <div className="text-center">
              <h6 className="text-gray-500">Total Earned</h6>
              <p className="text-xl font-bold">$248.6</p>
            </div>
          </div>
        </div>
        <div className="w-2/12 border rounded-lg bg-white p-4">
          <div className="text-xl flex items-center gap-2"><Percent /> Commission Rate 45%</div>
          <Separator className="my-4" /> 
          <div className="text-xl flex items-center gap-2"><Link2/> www.test.com</div>
          <Separator className="my-4" />     
          <div className="text-xl flex items-center gap-2 text-red-500"><Trash2/> Delete Affiliates</div>     
        </div>
      </div>
      <div>
      <div className=" border rounded-lg shadow-sm p-2 mt-4  mb-4">
        <div className="flex justify-between items-center bg-muted/50 pb-3">
            <div>
                <h5>Affiliate</h5>
                <p>See the affiliate who have signed up for your affilate program</p>
            </div>
            <div>
            <div className="grid grid-cols-3 gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  <MdOutlineSort /> Sort by <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {invoices
                  ?.filter((column) => column === "affiliate")
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
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
                {invoices
                  ?.filter((column) => column === "affiliate")
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
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
                {invoices
                  ?.filter((column) => column === "affiliate")
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
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

        </div>
        <div className="grid grid-cols-4 gap-5 ">
                <AdminCard
                  icon={<BsBarChart size={20} />}
                  title="Revenue"
                  amount="280.6"
                  percentage="88.6"
                  color="text-green-600"
                />
                <AdminCard
                  icon={<GiClick size={20} />}
                  title="Clicks"
                  amount="280.6"
                  percentage="88.6"
                  color="text-red-500"
                />
                <AdminCard
                  icon={<TbBinaryTree size={20} />}
                  title="Referrals"
                  amount="280.6"
                  percentage="88.6"
                  color="text-green-600"
                />
                <AdminCard
                  icon={<ImCoinDollar size={20} />}
                  title="Payments"
                  amount="280.6"
                  percentage="88.6"
                  color="text-green-600"
                />
              </div>
        </div>
      </div>
      <div className="rounded-lg border bg-white shadow-md  mt-4 overflow-hidden">
              <div className="flex justify-between p-4  border w-full">
                <div>
                  <h3 className="text-lg font-bold">Payments</h3>
                  <p>You made 24 sales this week</p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="ml-auto">
                        <MdOutlineSort /> Sort by <ChevronDown />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {invoices
                        ?.filter((column) => column === "affiliate")
                        .map((column) => {
                          return (
                            <DropdownMenuCheckboxItem
                              key={column.id}
                              className="capitalize"
                              checked={column.getIsVisible()}
                              onCheckedChange={(value) =>
                                column.toggleVisibility(!!value)
                              }
                            >
                              {column.id}
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
                      {invoices
                        ?.filter((column) => column === "affiliate")
                        .map((column) => {
                          return (
                            <DropdownMenuCheckboxItem
                              key={column.id}
                              className="capitalize"
                              checked={column.getIsVisible()}
                              onCheckedChange={(value) =>
                                column.toggleVisibility(!!value)
                              }
                            >
                              {column.id}
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
                      {invoices
                        ?.filter((column) => column === "affiliate")
                        .map((column) => {
                          return (
                            <DropdownMenuCheckboxItem
                              key={column.id}
                              className="capitalize"
                              checked={column.getIsVisible()}
                              onCheckedChange={(value) =>
                                column.toggleVisibility(!!value)
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
              <Table className="border rounded-lg w-full">
                <TableHeader>
                  <TableRow className="col-span-12">
                    <TableHead className="pl-10">Affiliate Name</TableHead>
                    <TableHead className="font-bold">Payout Email</TableHead>
                    <TableHead className="font-bold">Reffered By</TableHead>
                    <TableHead className="font-bold">Method</TableHead>
                    <TableHead className="font-bold">Payment</TableHead>
                    <TableHead className="font-bold">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className='w-full'>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.affiliate}>
                      <TableCell className=" pl-10">{invoice?.affiliate}</TableCell>
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

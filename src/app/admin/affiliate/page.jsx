"use client";
import { BiFilterAlt, BiSolidFilterAlt } from "react-icons/bi";
import { FaRegCalendarPlus } from "react-icons/fa";
import { ChevronDown, Ellipsis } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MdOutlineSort } from "react-icons/md";
import { Plus } from "lucide-react";
import { defaultItemSize } from "rsuite/esm/internals/Windowing";
import AdminTableHeader from "@/components/admin-components/table-header";
export default function page() {
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
    {
      affiliate: "INV008",
      payoutEmail: "ererere@gmail.com",
      refferedBy: "John Doe",
      paymentMethod: "Credit Card",
      payment: "$25",
      status: "pending",
    },
    {
      affiliate: "INV009",
      payoutEmail: "ererere@gmail.com",
      refferedBy: "John Doe",
      paymentMethod: "Credit Card",
      payment: "$25",
      status: "pending",
    },
    {
      affiliate: "INV0001",
      payoutEmail: "ererere@gmail.com",
      refferedBy: "John Doe",
      paymentMethod: "Credit Card",
      payment: "$25",
      status: "pending",
    },
    {
      affiliate: "INV0002",
      payoutEmail: "ererere@gmail.com",
      refferedBy: "John Doe",
      paymentMethod: "Credit Card",
      payment: "$25",
      status: "pending",
    },
    {
      affiliate: "INV0003",
      payoutEmail: "ererere@gmail.com",
      refferedBy: "John Doe",
      paymentMethod: "Credit Card",
      payment: "$25",
      status: "pending",
    },
    {
      affiliate: "INV0004",
      payoutEmail: "ererere@gmail.com",
      refferedBy: "John Doe",
      paymentMethod: "Credit Card",
      payment: "$25",
      status: "pending",
    },
    {
      affiliate: "INV0005",
      payoutEmail: "ererere@gmail.com",
      refferedBy: "John Doe",
      paymentMethod: "Credit Card",
      payment: "$25",
      status: "pending",
    },
    {
      affiliate: "INV0006",
      payoutEmail: "ererere@gmail.com",
      refferedBy: "John Doe",
      paymentMethod: "Credit Card",
      payment: "$25",
      status: "pending",
    },
    {
      affiliate: "INV0007",
      payoutEmail: "ererere@gmail.com",
      refferedBy: "John Doe",
      paymentMethod: "Credit Card",
      payment: "$25",
      status: "pending",
    },
  ];
  const router = useRouter();
  //   const handleView = (props) => {
  //     router.push(`/admin/affiliate/${defaultItemSize.}`);
  //   };
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2>Affiliate</h2>
          <p>See the affiliate who have signed up for your affilate program</p>
        </div>
        <div>
          <Button variant="outline" className="bg-blue-300 rounded-lg">
            <Plus /> Invite Affiliate
          </Button>
        </div>
      </div>
      <div className=" bg-white border rounded-lg overflow-hidden shadow-md">
        {/* <div className="flex justify-between p-4 w-full">
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
                  <BiSolidFilterAlt /> Filter <ChevronDown />
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
        </div> */}
        <AdminTableHeader
          title="Payments"
          description="You made 24 sales this week"
          filter={invoices}
        />
        <Table className="border rounded-lg w-full">
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
            {invoices.map((invoice) => (
              <TableRow
                key={invoice.affiliate}
                onClick={() =>
                  router.push(`/admin/affiliate/${invoice?.affiliate}`)
                }
                className="cursor-pointer"
              >
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

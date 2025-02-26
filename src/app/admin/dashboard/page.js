"use client";
import * as React from "react";
import AdminCard from "@/components/admin-components/card";
// import { TrendingUp } from "lucide-react"
import {
  CartesianGrid,
  Label,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
} from "recharts";
import { addDays, format } from "date-fns";
import { CalendarIcon, ChevronDown } from "lucide-react";
import { MdOutlineSort } from "react-icons/md";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BsBarChart } from "react-icons/bs";
import { GiClick } from "react-icons/gi";
import { TbBinaryTree } from "react-icons/tb";
import { ImCoinDollar } from "react-icons/im";
import { BiFilterAlt } from "react-icons/bi";
import { FaRegCalendarPlus } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { Ellipsis, Plus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AdminHeader from "@/components/admin-components/header";
import AdminTableHeader from "@/components/admin-components/table-header";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];
const PiechartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];
const PiechartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
};
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#6675e0",
  },
};
export default function page() {
  const [date, setDate] = React.useState();
  const totalVisitors = React.useMemo(() => {
    return PiechartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);
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
    <div className="">
      <AdminHeader header={"Analytics Dashboard - This month"} description="See the latest analysis from your affiliate program." icons={"Plus"} btnMessage="Invite Affiliate"/>
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

      <div className="flex justify-between gap-5 pt-4">
        <div className="w-9/12">
          <Card>
            <CardHeader>
              <div className="flex justify-between">
                <div>
                  {" "}
                  <CardTitle>Performance Overview</CardTitle>
                  {/* <CardDescription>January - June 2024</CardDescription> */}
                </div>
                <div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] justify-start text-left font-normal",
                          !date && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      align="start"
                      className="flex w-auto flex-col space-y-2 p-2"
                    >
                      <Select
                        onValueChange={(value) =>
                          setDate(addDays(new Date(), parseInt(value)))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="0">Today</SelectItem>
                          <SelectItem value="1">Tomorrow</SelectItem>
                          <SelectItem value="3">In 3 days</SelectItem>
                          <SelectItem value="7">In a week</SelectItem>
                        </SelectContent>
                      </Select>
                      <div className="rounded-md border">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                        />
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-lg font-bold">Total performance</p>
                  <div className="flex gap-4 items-center">
                    <h2>$45,850.00</h2>{" "}
                    <div>
                      <span className="bg-purple-200 rounded-lg py-1 px-2">
                        27.4%
                      </span>{" "}
                      <span className="bg-purple-200 rounded-lg py-1 px-2">
                        27.4%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-lg font-medium">Update:</div>
                  <span className="text-lg font-medium">12:40 pm </span>{" "}
                  <span>
                    <TfiReload />
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={chartConfig}
                className="max-h-[300] w-full"
              >
                <LineChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                  height={"100px"}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Line
                    dataKey="desktop"
                    type="natural"
                    stroke="var(--color-desktop)"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
            {/* <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
          </Card>
        </div>
        <div className="w-3/12">
          <Card className="flex flex-col">
            <CardHeader className="pb-0">
              <CardTitle>Discount campaign</CardTitle>
              <div className="flex justify-between">
                <div className="flex gap-4 items-center">
                  <h2>$45,850.00</h2>{" "}
                  <div>
                    <span className="bg-purple-200 rounded-lg py-1 px-2">
                      27.4%
                    </span>
                  </div>
                </div>
                <div>
                  <DropdownMenu placement="bottom-end">
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">{<Ellipsis />}</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-50">
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          Billing
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          Keyboard shortcuts
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
              <ChartContainer
                config={PiechartConfig}
                className="mx-auto aspect-square max-h-[400px] min-h-[300px]"
              >
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    data={PiechartData}
                    dataKey="visitors"
                    nameKey="browser"
                    innerRadius={80}
                    strokeWidth={5}
                    paddingAngle={1}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              <tspan
                                x={viewBox.cx}
                                y={viewBox.cy}
                                className="fill-foreground text-3xl font-bold"
                              >
                                {totalVisitors.toLocaleString()}
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 24}
                                className="fill-muted-foreground"
                              >
                                Visitors
                              </tspan>
                            </text>
                          );
                        }
                      }}
                    />
                  </Pie>
                </PieChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
              <div className="flex items-center gap-2 font-medium leading-none">
                {/* Trending up by 5.2% this month <TrendingUp className="h-4 w-4" /> */}
              </div>
              <div className="leading-none text-muted-foreground">
                Showing total visitors for the last 6 months
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="rounded-lg  bg-white shadow-md  mt-4 overflow-hidden">
        {/* <div className="flex justify-between p-4  border w-full">
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
        </div> */}
        <AdminTableHeader title="Payments" description="You made 24 sales this week" filter={invoices} filterKey={invoices} sortBy={invoices} monthly={invoices}/>
        <Table className="border rounded-lg">
          <TableHeader colSpan={12}>
            <TableRow colSpan={12} className="w-12/12">
              <TableHead className="pl-10 w-2/12 border">Affiliate Name</TableHead>
              <TableHead className="font-bold w-2/12 border">Payout Email</TableHead>
              <TableHead className="font-bold w-2/12 border">Reffered By</TableHead>
              <TableHead className="font-bold w-2/12 border">Method</TableHead>
              <TableHead className="font-bold w-2/12 border">Payment</TableHead>
              <TableHead className="font-bold w-2/12 border">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className='w-12/12'>
            {invoices.map((invoice) => (
              <TableRow key={invoice.affiliate}>
                <TableCell className="w-2/12 border pl-10">{invoice?.affiliate}</TableCell>
                <TableCell className="w-2/12 border ">{invoice?.payoutEmail}</TableCell>
                <TableCell className="w-2/12 border ">{invoice?.refferedBy}</TableCell>
                <TableCell className="w-2/12 border ">{invoice?.paymentMethod}</TableCell>
                <TableCell className="w-2/12 border ">{invoice?.payment}</TableCell>
                <TableCell className="w-2/12 border ">{invoice?.status}</TableCell>
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

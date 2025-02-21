// "use client"
// import Navbar from "@/components/navigation/nav-bar"
// import React, { useState } from "react"
// import { Dropdown, Input, InputGroup } from "rsuite"
// import SearchIcon from "@rsuite/icons/Search";
// import ProjectCard from "@/components/project-card/project-card";
// export default function ViewProject() {
//     const styles = {
//         width: "100%",
//         outlineStyle: "none",
//       };
//        const [list, setList] = useState(true);
//   return (
//     <div className="bg-background h-screen">
//         <Navbar />
//         <div className="w-10/12 m-auto">
//         <h6 className="mt-5 mb-3 font-semibold">Project-1</h6>
//         <div className="flex gap-10">
//         <div className="w-[80%]">
//           <img src="user-1.png" alt="" width={"100%"}/>
//         </div>

//         <div>
//           <div className="mb-5">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reiciendis, esse ducimus saepe illum at aut magni dicta maxime explicabo ab. Placeat cumque consequatur rem corrupti ab harum beatae earum?
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ea in possimus similique quae sapiente ipsa natus, voluptatibus vel eligendi! Dolorem temporibus eveniet necessitatibus totam quos accusantium error fugit eaque.
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt id nam culpa aut exercitationem vero atque rerum laboriosam et. Hic cum quod praesentium nostrum expedita nobis eius, at sint odit?
//           </div>

//           <div>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reiciendis, esse ducimus saepe illum at aut magni dicta maxime explicabo ab. Placeat cumque consequatur rem corrupti ab harum beatae earum?
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ea in possimus similique quae sapiente ipsa natus, voluptatibus vel eligendi! Dolorem temporibus eveniet necessitatibus totam quos accusantium error fugit eaque.
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt id nam culpa aut exercitationem vero atque rerum laboriosam et. Hic cum quod praesentium nostrum expedita nobis eius, at sint odit?
//           </div>
//           <div className="mb-5">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reiciendis, esse ducimus saepe illum at aut magni dicta maxime explicabo ab. Placeat cumque consequatur rem corrupti ab harum beatae earum?
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ea in possimus similique quae sapiente ipsa natus, voluptatibus vel eligendi! Dolorem temporibus eveniet necessitatibus totam quos accusantium error fugit eaque.
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt id nam culpa aut exercitationem vero atque rerum laboriosam et. Hic cum quod praesentium nostrum expedita nobis eius, at sint odit?
//           </div>
//           <div className="mb-5">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reiciendis, esse ducimus saepe illum at aut magni dicta maxime explicabo ab. Placeat cumque consequatur rem corrupti ab harum beatae earum?
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ea in possimus similique quae sapiente ipsa natus, voluptatibus vel eligendi! Dolorem temporibus eveniet necessitatibus totam quos accusantium error fugit eaque.
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt id nam culpa aut exercitationem vero atque rerum laboriosam et. Hic cum quod praesentium nostrum expedita nobis eius, at sint odit?
//           </div>
//           <div className="mb-5">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reiciendis, esse ducimus saepe illum at aut magni dicta maxime explicabo ab. Placeat cumque consequatur rem corrupti ab harum beatae earum?
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ea in possimus similique quae sapiente ipsa natus, voluptatibus vel eligendi! Dolorem temporibus eveniet necessitatibus totam quos accusantium error fugit eaque.
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt id nam culpa aut exercitationem vero atque rerum laboriosam et. Hic cum quod praesentium nostrum expedita nobis eius, at sint odit?
//           </div>
//         </div>
//         </div>

//         </div>
//     </div>
//   )
// }

"use client";

// import Button from "@/components/ui/button";
import Navbar from "@/components/navigation/nav-bar";
import React, { useState } from "react";
import { Dropdown, Input, InputGroup } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import ProjectCard from "@/components/project-card/project-card";
import { BsPrescription2 } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";
import { RiFileExcel2Line } from "react-icons/ri";
<RiFileExcel2Line />;

let Design = () => {
  return (
    <div className="bg-background h-screen">
       <Navbar />
      <div className="w-10/12 m-auto grid col-span-12 divide-x-2">
        {/* <div className="w-auto px-20 py-8 flex gap-14 list-none text-blue-600 font-semibold text-lg ">
          <li>Description</li>
          <li>Solution</li>
          <li>Discussion</li>
        </div> */}
        <div className="w-full grid grid-cols-5 pt-10 px-20 ">
          <div className="col-span-3 flex flex-col gap-3">
            <div className="px-8 py-6 rounded-xl bg-white shadow-xl">
              <h2 className="text-13xl font-semibold">Case Description</h2>
              <p className="text-xl text-lg/7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                beatae similique, perspiciatis, quaerat fuga autem tempore
                adipisci, aliquid sequi repellat esse necessitatibus delectus
                doloremque dolor sit amet consectetur adipisicing elit. Porro
                beatae similique, perspiciatis, quaerat fuga autem tempore
                adipisci, aliquid sequi repellat esse necessitatibus delectus
                doloremque repudiandae quis deserunt odit. Fuga, harum? Facilis
                repellat, at quidem impedit corrupti sapiente, dicta quaerat cum
                beatae expedita quia nulla blanditiis officiis maxime vel
                possimus est voluptates. Cupiditate expedita ut nisi? Dicta
                itaque quibusdam illum animi!
              </p>
            </div>
            <div className="px-8 py-6 rounded-xl bg-white shadow-xl">
              <h2 className="text-13xl font-semibold">Project requirements</h2>
              <p className="text-lg gap-7 pt-3 mb-2">
                <strong>Query</strong> which is integrated into Excel 2016 and
                later versions, so no separate installation is needed for these
                versions.
              </p>
              <p className="flex flex-col text-lg gap-7 pt-3 mb-2">
                For users with Excel 2010 or 2013:
              </p>
              <ol className="text-xl text-lg/7">
                <li>
                  Visit the official Microsoft website to download the Power
                  Query Add-In.
                </li>
                <li>Once downloaded, open Excel.</li>
                <li>Click on "File" and then "Options."</li>
                <li>In the "Excel Options" window, click on "Add-Ins."</li>
                <li>
                  In the "Manage" dropdown at the bottom, select "COM Add-ins"
                  and click "Go."
                </li>
                <li>
                  Check the box next to "Microsoft Office Power Query" and click
                  "OK."
                </li>
                <li>
                  You should see a "Power Query" tab added to Excel's ribbon.
                </li>
              </ol>
              <p className="flex flex-col text-lg gap-7 pt-3 mb-2">
                After installation, you can access Power Query features via the
                "Power Query" tab in Excel.
              </p>
            </div>
            {/* <div className="px-8 py-4 rounded-xl bg-white shadow-xl">
                        <h3 className="text-13xl font-semibold">Project files</h3>
                        <p className="text-xl text-lg/7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro beatae similique, perspiciatis, quaerat fuga autem tempore adipisci, aliquid sequi repellat esse necessitatibus delectus doloremque dolor sit amet consectetur adipisicing elit. Porro beatae similique, perspiciatis, quaerat fuga autem tempore adipisci, aliquid sequi repellat esse necessitatibus delectus doloremque repudiandae quis deserunt odit. Fuga, harum?
                            Facilis repellat, at quidem impedit corrupti sapiente, dicta quaerat cum beatae expedita quia nulla blanditiis officiis maxime vel possimus est voluptates. Cupiditate expedita ut nisi? Dicta itaque quibusdam illum animi!
                        </p>
                    </div> */}
            <div className="px-8 py-6 rounded-xl bg-white shadow-xl">
              <h2 className="text-13xl font-semibold">Project files</h2>
              <p className="text-xl text-lg/7">
                Excel's <strong>Regression Analysis Dataset.xlsx</strong> file
                consists of four sheets: Task 1, Task 2, Task 3, Task 4, and
                Task 5. Each sheet contains specific information regarding the
                project’s tasks and corresponding data. Use the data in these
                sheets to answer the questions that follow.
              </p>
              <p className="text-xl text-lg/7">
                In this regression analysis in Excel, you’ll delve into a
                dataset from <strong>The Trendy Shopper</strong>. This dataset
                is derived from the company’s transactional records. It contains
                the following fields:
              </p>
              <ol className="text-xl text-lg/7">
                <li>
                  <strong>Age:</strong> customer’s age
                </li>
                <li>
                  <strong>Gender:</strong> customer’s gender
                </li>
                <li>
                  <strong>User Region:</strong> customer’s location for The
                  Trendy Shopper’s distribution
                </li>
                <li>
                  <strong>Product Category:</strong> a diverse selection at The
                  Trendy Shopper
                </li>
                <li>
                  <strong>Product Price:</strong> the monetary cost assigned to
                  a specific product
                </li>
                <li>
                  <strong>Discount:</strong> the reduction in the original
                  product price (given in absolute monetary value and
                  represented as a percentage)
                </li>
                <li>
                  <strong>Total Amount Spent:</strong> the shopper’s total
                  expenditure derived from multiplying the product price by
                  quantity
                </li>
              </ol>
              <button className="mt-10 bg-sky-600 p-3 text-lg text-white rounded-md font-semibold">
                Upgrade to unlock
              </button>
            </div>
          </div>
          <div className="col-span-2 ps-8 m-0 flex flex-col gap-12 divide-x-5 divide-gray-500/50">
            <div className="border-b-1 border-r-gray-300">
              <div className="flex gap-3">
                <BsPrescription2 className="text-sky-600 text-[1.5rem] my-auto" />
                <h3 className="m-0 text-[1.7rem] ">Project content</h3>
              </div>
              <ul className="flex flex-col text-lg gap-7 pt-3 mb-2">
                <li>1 Project file</li>
                <li>Guided and unguided instructions</li>
              </ul>
              <span className="w-auto ms-10 p-[0.15rem] rounded-sm ring-violet-500 text-violet-500 ring-1">
                Up to 10 XP
              </span>
            </div>

            <div
              style={{ borderTop: "2px solid #ccc", margin: "20px 0" }}
            ></div>

            <div className="border-b-1 border-r-gray-300">
              <div className="flex gap-3 mb-8">
                <BsBriefcase className="text-sky-600 text-[1.5rem] my-auto" />
                <h3 className="m-0 text-[1.7rem]">Featured tools</h3>
              </div>

              <span className=" rounded-full p-3 py-4 ring-1 ring-sky-700 overflow-hidden bg-sky-700">
                <RiFileExcel2Line className="text-white text-[1.8rem] translate-y-2 " />
              </span>
            </div>

            <div
              style={{ borderTop: "2px solid #ccc", margin: "20px 0" }}
            ></div>

            <div className="border-b-1 border-r-gray-300">
              <div className="flex gap-3 mb-8">
                <RiFileExcel2Line className="text-sky-600 text-[1.5rem] my-auto" />
                <h3 className="m-0 text-[1.7rem]">Related courses</h3>
              </div>
              <div className=" text-lg ">
                <p className="pe-20">
                  To complete this project, you need expertise on the following
                  topic(s):{" "}
                </p>
                <ul className="flex flex-col text-lg gap-7 pt-3 mb-2 text-sky-700 font-semibold">
                  <li>Machine learning in Excel</li>
                </ul>
              </div>
            </div>

            <div
              style={{ borderTop: "2px solid #ccc", margin: "20px 0" }}
            ></div>

            <div className="border-b-1 border-r-gray-300">
              <div className="flex gap-3 mb-8">
                <BsBriefcase className="text-sky-600 text-[1.5rem] my-auto" />
                <h3 className="m-0 text-[1.7rem]">Topics covered</h3>
              </div>
              <div className="flex gap-3">
                <span className="p-2 px-3 bg-gray-500/30 rounded-full">
                  Excel
                </span>
                <span className="p-2 px-3 bg-gray-500/30 rounded-full">
                  Data Analysis
                </span>
                <span className="p-2 px-3 bg-gray-500/30 rounded-full">
                  Machine learning
                </span>
              </div>
            </div>

            <div
              style={{ borderTop: "2px solid #ccc", margin: "20px 0" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;

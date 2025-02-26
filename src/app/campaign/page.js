"use client"
import Navbar from "@/components/navigation/nav-bar"
import React, { useEffect, useState } from "react"
import { Dropdown, Input, InputGroup,  } from "rsuite"
import SearchIcon from "@rsuite/icons/Search";
import ProjectCard from "@/components/project-card/project-card";
import { RiGalleryView2, RiListCheck,  } from "react-icons/ri";
import { useRouter } from "next/navigation";
export default function Campaign() {
    const router = useRouter();
    const styles = {
        width: "100%",
        outlineStyle: "none",
      };

      // useEffect(()=>{
      //   const isloggedIn = JSON.parse(localStorage.getItem("userLogin"));
      //   isloggedIn !== true && router.push("/login") 
      // },[])
       const [list, setList] = useState(true);
  return (
    <div className="bg-background h-screen">
        <Navbar />
        <div className="w-10/12 m-auto">
        <div className="flex items-center gap-2">
              <div className="xl:w-9/12 lg:w-7/12 md:w-8/12 w-6/12 p-1 md:p-5 lg:p-1">
                <InputGroup style={styles}>
                  <Input />
                  <InputGroup.Button>
                    <SearchIcon />
                  </InputGroup.Button>
                </InputGroup>
              </div>
              <div className=" flex lg:gap-2 gap-4 w-3/12">
                <div className="hidden lg:flex">
                  <Dropdown title="Sort by activity" className="activity">
                    <Dropdown.Item> Sort by activity</Dropdown.Item>
                    <Dropdown.Item> Sort by activity</Dropdown.Item>
                  </Dropdown>
                </div>

                <div className="border p-0 gap-0 hidden lg:flex rounded-md">
                  <div
                    className={`text-base flex items-center -pb-1 ${
                      list ? "hover:bg-gray-100 bg-gray-100" : ""
                    }  px-1`}
                    onClick={() => setList(true)}
                  >
                    <div className="px-2"><RiGalleryView2 /></div>
                  </div>
                  <div
                    className={`text-base flex items-center -pb-1 ${
                      !list ? "hover:bg-gray-100 bg-gray-100" : ""
                    }`}
                    onClick={() => setList(false)}
                  >
                    <div className="px-2"><RiListCheck /></div>
                  </div>
                </div>
                <div className="lg:hidden flex">
                  <Dropdown
                    title={<i className="ri-more-line text-xl"></i>}
                    noCaret
                  >
                    <Dropdown.Item>Sort by activity</Dropdown.Item>
                  </Dropdown>
                </div>
                <Dropdown className="add-new" title="Add New...">
                  <Dropdown.Item> Sort by activity</Dropdown.Item>
                  <Dropdown.Item> Sort by activity</Dropdown.Item>
                </Dropdown>
              </div>
            </div>

            <div>
            <h6 className="mt-5 mb-3 font-semibold">Campaign</h6>
            <div className="grid grid-cols-3 gap-5 w-full">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
            </div>
        </div>
    </div>
  )
}
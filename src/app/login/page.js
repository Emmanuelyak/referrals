"use client";
import React, { useEffect, useState } from "react";
import { Input, InputGroup } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import { Dropdown, Loader } from "rsuite";
import RecentCard from "@/components/recent-card/recent-card";
import ProjectCard from "@/components/project-card/project-card";
import { useRouter } from "next/navigation";
import { RiGalleryView2, RiListCheck, RiMoreFill } from "react-icons/ri";
import Navbar from "@/components/navigation/nav-bar";

export default function Home() {
  const [list, setList] = useState(true);
  const [userActive, setUserActive] = useState(false);
  // const router = useRouter();

  useEffect(() => {
    // try {
    //   const isloggedIn = JSON.parse(localStorage.getItem("userLogin"));
    //   if (isloggedIn) {
    //     setUserActive(true);
    //   } else {
    //     setUserActive(false);
    //     router.push("/login");
    //   }
    // } catch (error) {
    //   console.error("Error parsing JSON from localStorage", error);
    //   setUserActive(false);
    //   router.push("/login");
    // }
    setUserActive(true)
  }, []);

  return (
    <div>
      {userActive ? (
        <div className="bg-background w-screen h-screen">
          <Navbar />
          <div className="w-12/12 xl:w-9/12 lg:w-11/12 m-auto mt-5 p-1 md:p-5 lg:p-1">
            <div className="flex gap-2">
              <div className="xl:w-9/12 lg:w-7/12 md:w-8/12 w-6/12 p-1 md:p-5 lg:p-1">
                <InputGroup style={{ width: "100%", outlineStyle: "none" }}>
                  <Input />
                  <InputGroup.Button>
                    <SearchIcon />
                  </InputGroup.Button>
                </InputGroup>
              </div>
              <div className="flex lg:gap-2 gap-4 w-3/12">
                <div className="hidden lg:flex">
                  <Dropdown title="Sort by activity" className="activity">
                    <Dropdown.Item>Sort by activity</Dropdown.Item>
                    <Dropdown.Item>Sort by activity</Dropdown.Item>
                  </Dropdown>
                </div>
                <div className="border p-0 gap-0 hidden lg:flex rounded-md">
                  <div
                    className={`text-base flex items-center -pb-1 ${
                      list ? "hover:bg-gray-100 bg-gray-100" : ""
                    }  px-1`}
                    onClick={() => setList(true)}
                  >
                    <div className="px-2">
                      <RiGalleryView2 />
                    </div>
                  </div>
                  <div
                    className={`text-base flex items-center -pb-1 ${
                      !list ? "hover:bg-gray-100 bg-gray-100" : ""
                    }`}
                    onClick={() => setList(false)}
                  >
                    <div className="px-2">
                      <RiListCheck />
                    </div>
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
                  <Dropdown.Item>Sort by activity</Dropdown.Item>
                  <Dropdown.Item>Sort by activity</Dropdown.Item>
                </Dropdown>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:flex xl:gap-10 gap-3 items-start">
              <div className="w-full lg:w-4/12">
                <div>
                  <h6 className="mt-5 mb-3 font-semibold">User Profile</h6>
                  <RecentCard />
                </div>
              </div>
              {list ? (
                <div className="w-12/12 lg:w-8/12">
                  <h6 className="mt-5 mb-3 font-semibold">Campaign</h6>
                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 xlgap-5">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                  </div>
                </div>
              ) : (
                <div className="w-8/12">
                  <div className="mt-3 mb-0 flex justify-between items-center">
                    <h6 className="font-semibold">
                      project/projects-e-project-project2
                    </h6>
                    <div>
                      <Dropdown title={<RiMoreFill />} noCaret>
                        <Dropdown.Item>Sort by activity</Dropdown.Item>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="bg-white w-full rounded-xl border">
                    <div className="flex items-center justify-between p-3 border-b">
                      <div className="flex gap-3">
                        <div className="w-12 p-2">
                          <img src="user-1.png" alt="" width={"100%"} />
                        </div>
                        <div>
                          <p className="text-black font-semibold">
                            projects-e-project-project2
                          </p>
                          <p className="text-gray-500">
                            projects-e-project-project2...
                          </p>
                        </div>
                      </div>
                      <div className="pl-2">
                        <p className="font-semibold">
                          updates on fslfksferriowfkldfd sfkjsdl
                        </p>
                        <p>
                          12/12/24 from <span></span>projects-e-project-project2
                        </p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <div>
                          <Dropdown title={<RiMoreFill />} noCaret>
                            <Dropdown.Item>Sort by activity</Dropdown.Item>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border-b">
                      <div className="flex gap-3">
                        <div className="w-12 p-2">
                          <img src="user-1.png" alt="" width={"100%"} />
                        </div>
                        <div>
                          <p className="text-black font-semibold">
                            projects-e-project-project2
                          </p>
                          <p className="text-gray-500">
                            projects-e-project-project2...
                          </p>
                        </div>
                      </div>
                      <div className="pl-2">
                        <p className="font-semibold">
                          updates on fslfksferriowfkldfd sfkjsdl
                        </p>
                        <p>
                          12/12/24 from <span></span>projects-e-project-project2
                        </p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <div>
                          <Dropdown
                            title={<i className="ri-more-line text-xl"></i>}
                            noCaret
                          >
                            <Dropdown.Item>Sort by activity</Dropdown.Item>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border-b">
                      <div className="flex gap-3">
                        <div className="w-12 p-2">
                          <img src="user-1.png" alt="" width={"100%"} />
                        </div>
                        <div>
                          <p className="text-black font-semibold">
                            projects-e-project-project2
                          </p>
                          <p className="text-gray-500">
                            projects-e-project-project2...
                          </p>
                        </div>
                      </div>
                      <div className="pl-2">
                        <p className="font-semibold">
                          updates on fslfksferriowfkldfd sfkjsdl
                        </p>
                        <p>
                          12/12/24 from <span></span>projects-e-project-project2
                        </p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <div>
                          <Dropdown
                            title={<i className="ri-more-line text-xl"></i>}
                            noCaret
                          >
                            <Dropdown.Item>Sort by activity</Dropdown.Item>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border-b">
                      <div className="flex gap-3">
                        <div className="w-12 p-2">
                          <img src="user-1.png" alt="" width={"100%"} />
                        </div>
                        <div>
                          <p className="text-black font-semibold">
                            projects-e-project-project2
                          </p>
                          <p className="text-gray-500">
                            projects-e-project-project2...
                          </p>
                        </div>
                      </div>
                      <div className="pl-2">
                        <p className="font-semibold">
                          updates on fslfksferriowfkldfd sfkjsdl
                        </p>
                        <p>
                          12/12/24 from <span></span>projects-e-project-project2
                        </p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <div>
                          <Dropdown
                            title={<i className="ri-more-line text-xl"></i>}
                            noCaret
                          >
                            <Dropdown.Item>Sort by activity</Dropdown.Item>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border-b">
                      <div className="flex gap-3">
                        <div className="w-12 p-2">
                          <img src="user-1.png" alt="" width={"100%"} />
                        </div>
                        <div>
                          <p className="text-black font-semibold">
                            projects-e-project-project2
                          </p>
                          <p className="text-gray-500">
                            projects-e-project-project2...
                          </p>
                        </div>
                      </div>
                      <div className="pl-2">
                        <p className="font-semibold">
                          updates on fslfksferriowfkldfd sfkjsdl
                        </p>
                        <p>
                          12/12/24 from <span></span>projects-e-project-project2
                        </p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <div>
                          <Dropdown
                            title={<i className="ri-more-line text-xl"></i>}
                            noCaret
                          >
                            <Dropdown.Item>Sort by activity</Dropdown.Item>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                    <div className="text-center p-3">show more</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

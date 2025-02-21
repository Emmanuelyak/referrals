"use client"
import { Dropdown } from "rsuite";
import { useRouter } from "next/navigation";
import { RiMoreFill } from "react-icons/ri";

export default function ProjectCard() {
  const router = useRouter();

  return (
    <div className="border bg-white rounded-lg p-3">
                <div className="flex items-center justify-between">
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
                  <div>
                    <Dropdown className="project-dropdown"
                      title={<RiMoreFill />}
                      noCaret
                    >
                      <Dropdown.Item onClick={()=> {
                        router.push("/view-project")
                      }}>View</Dropdown.Item>
                      <Dropdown.Item onClick={()=>{
                        router.push("/referrals")
                      }}>Referrals</Dropdown.Item>
                    </Dropdown>
                  </div>
                </div>
                <div className="flex pl-2">
                  <div className=" border flex items-center gap-3 mt-3 mb-3 px-3 py-1 rounded-xl bg-background">
                    <div className="w-3">
                      <img src="user-1.png" alt="" width={"100%"} />
                    </div>
                    <p className="text-black font-semibold">
                      projects-e-project-project2
                    </p>
                  </div>
                </div>
                <div className="pl-2">
                  <p className="font-semibold">updates on fslfksferriowfkldfd sfkjsdl</p>
                  <p>12/12/24 from <span></span>projects-e-project-project2</p>
                </div>
              </div>
  )
}
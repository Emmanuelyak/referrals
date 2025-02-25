"use client";
import { Dropdown } from "rsuite";
import { useRouter } from "next/navigation";
import { RiMoreFill } from "react-icons/ri";
import Image from "next/image";
export default function AdminCampaignCard(props) {
  const router = useRouter();
  return (
    <div className="border bg-white rounded-lg p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 p-2 overflow-hidden rounded-full border shadow-md">
            <Image src={props.icon || "/user-1.png"} alt="" loading="lazy" layout="responsive" objectFit="cover" objectPosition="center" width={"100"} height={"100"}/>
          </div>
          <div>
            <p className="text-gray-500">{props.title}</p>
          </div>
        </div>
        <div>
          <Dropdown className="project-dropdown" title={<RiMoreFill />} noCaret>
            <Dropdown.Item
              onClick={() => {
                router.push("/view-project");
              }}
            >
              View
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                router.push("/referrals");
              }}
            >
              Referrals
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>
      <div className="mt-4 mb-3" >
        <div className="grid grid-cols-4 gap-2 pl-2">
          {props.category?.map((category, index) => (
            <div className=" border rounded-xl bg-background" key={index}>
              <p className="text-black font-semibold text-center">
                {category}
              </p>
            </div>
          ))}
        </div>
        <p className="text-black font-semibold mt-3 pl-2">{props.subtitle}</p>
      </div>
      <div className="pl-2">
        <p className="font-semibold">updates on fslfksferriowfkldfd sfkjsdl</p>
        <p>
          12/12/24 from <span></span>projects-e-project-project2
        </p>
      </div>
    </div>
  );
}

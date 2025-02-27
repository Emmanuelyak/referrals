"use client";
import { GlobalNav } from "@/providers/nav-global-provider";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Dropdown, Avatar } from "rsuite";
import Image from "next/image";
export default function Navbar() {
  const router = useRouter();
  const { activeTab, setActiveTab } = useContext(GlobalNav);
  useEffect(() => {
    const savedTab = sessionStorage.getItem("activeTab");
    if (savedTab) {
      setActiveTab(savedTab);
      if (activeTab === "home") {
        router.push("/");
      } else {
      router.push(`/${activeTab}`);
      }
    }
  }, [activeTab]);
  const renderToggle = (props) => <Avatar circle {...props} src="user-1.png" />;

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      sessionStorage.setItem("activeTab", tab);
      if (tab === "home") {
        router.push("/");
      } else {
        router.push(`/${tab}`);
      }
    }
  };
  return (
    <div>
      <nav className="flex justify-between px-5 py-2 bg-white">
        <div className="w-24">
          <Image src={"https://www.svgrepo.com/show/487712/referral-2.svg"} loading="lazy" layout="responsive" objectFit="cover" objectPosition="center" width={"100"} height={"100"}/>
        </div>

        <div>
          <ol className="flex items-center space-x-4">
            <li>
              <Dropdown renderToggle={renderToggle} placement="bottomEnd">
                <Dropdown.Item panel style={{ padding: 10, width: 160 }}>
                  {/* <p>Signed in as</p>
      <strong>Tony</strong> */}
                </Dropdown.Item>
                {/* <Dropdown.Separator />
    <Dropdown.Item>Your profile</Dropdown.Item>
    <Dropdown.Item>Your stars</Dropdown.Item>
    <Dropdown.Item>Your Gists</Dropdown.Item>
    <Dropdown.Separator /> */}
                {/* <Dropdown.Item>Help</Dropdown.Item> */}
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item onClick={()=>{
                  router.push("/login")
                }}>Log out</Dropdown.Item>
              </Dropdown>
            </li>
            <li>
              <i className="ri-settings-5-line text-2xl"></i>
            </li>
          </ol>
        </div>
      </nav>

      <ol className="flex items-center space-x-4 shadow-md bg-white overflow-y-auto px-4">
        <li
          className={`${
            activeTab === "home" ? "activeNavTab" : ""
          } px-2 py-2 hover:transition-colors hover:bg-gray-100 hover:translate-x-0 cursor-pointer`}
          onClick={() => {
            toggle("home");
          }}
        >
          Home
        </li>
        <li
          className={`${
            activeTab === "campaign" ? "activeNavTab" : ""
          } px-2 py-2  hover:transition-colors hover:bg-gray-100 hover:translate-x-0 cursor-pointer`}
          onClick={() => {
            toggle("campaign");
          }}
        >
          Market place
        </li>
        <li
          className={`${
            activeTab === "downline" ? "activeNavTab" : ""
          } px-2 py-2 hover:transition-colors hover:bg-gray-100 hover:translate-x-0 cursor-pointer`}
          onClick={() => {
            toggle("downline");
          }}
        >
          Downline
        </li>
        <li
          className={`${
            activeTab === "amount" ? "activeNavTab" : ""
          } px-2 py-2 hover:transition-colors hover:bg-gray-100 hover:translate-x-0 cursor-pointer`}
          onClick={() => {
            toggle("amount");
          }}
        >
          Earnings
        </li>
        {/* <li className={`${activeTab === "fifth" ? "activeNavTab" : ""} px-2 py-2 hover:transition-colors hover:bg-gray-100 hover:translate-x-0`} onClick={() => {
                toggle("fifth");
              }}>
              Activity
            </li>
            <li className={`${activeTab === "sixth" ? "activeNavTab" : ""} px-2 py-2 hover:transition-colors hover:bg-gray-100 hover:translate-x-0`} onClick={() => {
                toggle("sixth");
              }}>
              Domain
            </li>
            <li className={`${activeTab === "seventh" ? "activeNavTab" : ""} px-2 py-2 hover:transition-colors hover:bg-gray-100 hover:translate-x-0`} onClick={() => {
                toggle("seventh");
              }}>
              Integration
            </li> */}
      </ol>
    </div>
  );
}

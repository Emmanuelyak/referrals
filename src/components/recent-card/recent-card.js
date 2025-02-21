"use client";
import { useState } from "react";
import { RiGalleryView2, RiListCheck, RiPencilFill } from "react-icons/ri";
// import { RiPencilFill } from "react-icons/ri";


function RecentCard() {
  const [list, setList] = useState(false);
  const [referralLink, setReferralLink] = useState(
    "https://r.com/12212-1212-1212",
  );
  const [copy, setCopy] = useState(false);
  const copyFile = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      console.log("Text copied to clipboard", referralLink);
      setCopy(true);
      setTimeout(() => {
        setCopy(false);
        setReferralLink("https://r.com/12212-1212-1212");
      }, 3000);
    } catch (err) {
      console.error("Could not copy text: ", err);
    }
  };
  return (
    <div className="bg-white  border rounded-lg p-2">
      <div className="flex justify-center items-center gap-5 ">
        <div className="pt-5">
          <div className=" flex relative mb-3">
            <div className="w-28 rounded-full overflow-hidden border-4 border-gray-300">
              <img src="user-1.png" alt="" width={"100%"} />
            </div>
            <div className="absolute bg-gray-200 rounded-full border-gray-300 border-4 p-2 bottom-0 right-10 flex">
              <RiPencilFill />
            </div>
          </div>
          <div>
            <h5 className="mb-1">Emmanuel yakubu</h5>
            <p className="text-gray-500 text-sm">Emmanuel@gmial.com</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-5 mb-5 px-5">
        <h5>Referral Link</h5>
        <div className="border p-1 gap-2 hidden lg:flex rounded-md">
          <button
            className={`text-lg ${
              !list ? "hover:bg-gray-100 bg-gray-100" : ""
            }`}
            onClick={() => setList(false)}
          >
            <div className="px-2 py-1">
              <RiListCheck />
            </div>
          </button>
          <button
            className={`text-lg ${
              list ? "hover:bg-gray-100 bg-gray-100" : ""
            }  px-1`}
            onClick={() => setList(true)}
          >
            <div className="px-2 py-1">
              <RiGalleryView2 />
            </div>
          </button>
        </div>
      </div>
      {!list ? (
        <div className="px-5 mb-10">
          <div className="flex justify-between items-center">
            <h6>{referralLink}</h6>{" "}
            <span
              className="flex items-center cursor-pointer"
              onClick={copyFile}
            >
              <i className="ri-file-copy-line text-xl"></i>
              {copy && <p>copied!!</p>}{" "}
            </span>
          </div>
        </div>
      ) : (
        <div className="flex justify-center px-2 mb-5">
          <div className="w-40">
            <img src="qr-code.svg" alt="" width={"100%"} />
          </div>
        </div>
      )}

      <div className="flex justify-center items-center gap-6 mb-5">
        <div className="w-10  rounded-full overflow-hidden">
          <img src="whatsapp-icon.png" alt="" width={"100%"} />
        </div>
        <div className="w-10  rounded-full overflow-hidden">
          <img src="instagram-icon.avif" alt="" width={"100%"} />
        </div>
        <div className="w-10 mix-blend-normal rounded-full overflow-hidden">
          <img src="linkedin-icon.png" alt="" width={"100%"} />
        </div>
        <div className="w-10  rounded-full overflow-hidden">
          <img
            src="facebook-icon-transparent-free-png.webp"
            alt=""
            width={"100%"}
          />
        </div>
        <div className="w-7  rounded-full overflow-hidden">
          <img src="x-icon.png" alt="" width={"100%"} />
        </div>
      </div>

      {/* <div className="flex px-3 py-4 items-center justify-between border-b">
                  <div className=" w-10/12">
                    <div className="flex items-center justify-between">
                      <div className="flex">
                        <div className="w-4 border border-gray-200 p-0.5 rounded-full">
                          <img src="user-1.png" alt="" width={"100%"} />
                        </div>
                        <div className="w-4 border border-gray-200 p-0.5 rounded-full">
                          <img src="user-1.png" alt="" width={"100%"} />
                        </div>
                        <div className="w-4 border border-gray-200 p-0.5 rounded-full">
                          <img src="user-1.png" alt="" width={"100%"} />
                        </div>
                        <div>
                          <svg
                            className="relative border rounded-full border-background-100 bg-background-100 border-solid"
                            data-testid="geist-icon"
                            height="16"
                            strokeLinejoin="round"
                            viewBox="0 0 16 16"
                            width="16"
                            style={{
                              width: "18px",
                              height: "18px",
                              color: "var(--ds-gray-600)",
                            }}
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8.75 4.25V5V7.25H11H11.75V8.75H11H8.75V11V11.75L7.25 11.75V11V8.75H5H4.25V7.25H5H7.25V5V4.25H8.75Z"
                              fill="gray"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="font-bold">First App Created</p>{" "}
                        <div>
                          <p className="text-gray-400 font-bold">
                            first option
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-2">
                      <div className="border  rounded-xl px-2">
                        <i className="ri-arrow-right-s-line"></i>{" "}
                        <span className="text-gray-500 font-medium">9+</span>{" "}
                        <span className="text-gray-500 font-medium">
                          Projects
                        </span>
                      </div>
                      <div className="flex items-center gap-3 border px-1 rounded-lg">
                        {" "}
                        <div className="w-4 border rounded-full p-0.5">
                          <img src="user-1.png" alt="" width={"100%"} />
                        </div>{" "}
                        <span className="text-gray-500 font-bold"># 70</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Dropdown title={<i className="ri-more-line"></i>} noCaret>
                      <Dropdown.Item>Sort by activity</Dropdown.Item>
                    </Dropdown>
                  </div>
                </div> */}

      {/* <div className="flex px-3 py-4 items-center justify-between">
                  <div className=" lg:w-10/12">
                    <div className="flex items-center justify-between">
                      <div className="flex">
                        <div className="w-4 border border-gray-200 p-0.5 rounded-full">
                          <img src="user-1.png" alt="" width={"100%"} />
                        </div>
                        <div className="w-4 border border-gray-200 p-0.5 rounded-full">
                          <img src="user-1.png" alt="" width={"100%"} />
                        </div>
                        <div className="w-4 border border-gray-200 p-0.5 rounded-full">
                          <img src="user-1.png" alt="" width={"100%"} />
                        </div>
                        <div>
                          <svg
                            className="relative border rounded-full border-background-100 bg-background-100 border-solid"
                            data-testid="geist-icon"
                            height="16"
                            strokeLinejoin="round"
                            viewBox="0 0 16 16"
                            width="16"
                            style={{
                              width: "18px",
                              height: "18px",
                              color: "var(--ds-gray-600)",
                            }}
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8.75 4.25V5V7.25H11H11.75V8.75H11H8.75V11V11.75L7.25 11.75V11V8.75H5H4.25V7.25H5H7.25V5V4.25H8.75Z"
                              fill="gray"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="font-bold">First App Created</p>
                        <div>
                          <p className="text-gray-400 font-bold">
                            first option
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-2">
                      <div className="border  rounded-xl px-2">
                        <i className="ri-arrow-right-s-line"></i>
                        <span className="text-gray-500 font-medium">9+</span>
                        <span className="text-gray-500 font-medium">
                          Projects
                        </span>
                      </div>
                      <div className="flex items-center gap-3 border px-1 rounded-lg">
                        <div className="w-4 border rounded-full p-0.5">
                          <img src="user-1.png" alt="" width={"100%"} />
                        </div>{" "}
                        <span className="text-gray-500 font-bold"># 70</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Dropdown title={<i className="ri-more-line"></i>} noCaret>
                      <Dropdown.Item>Sort by activity</Dropdown.Item>
                    </Dropdown>
                  </div>
                </div> */}
    </div>
  );
}
export default RecentCard;

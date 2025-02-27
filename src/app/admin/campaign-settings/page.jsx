"use client";
import React from "react";
import AdminHeader from "@/components/admin-components/header";
import { Input, Checkbox } from "rsuite";
import { Separator } from "@/components/ui/separator";
import { ImagePlus, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GoDotFill } from "react-icons/go";

export default function page() {
  const styles = {
    // marginBottom: 10
  };
  const [checked, setChecked] = React.useState(false);
  const [textColor, setTextColor] = React.useState("#2e2e3b");
  const [buttonColor, setButtonColor] = React.useState("#f23323");
  const [secondaryColor, setSecondaryColor] = React.useState("#2eeeeb");
  const [backgroundColor, setBackgroundColor] =React.useState("#f2ee3b");



  const CustomInput = ({ ...props }) => <Input {...props} style={styles} />;

  return (
    <div className=" bg-white rounded-lg border h-full">
      <div className="flex justify-between bg-muted/50 items-center p-4">
        <div>
          <h4>Campaign Settings</h4>
          <p>Settings and options for your application</p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="bg-white rounded-lg"
            onClick={() => {
              setChecked(!checked);
            }}
          >
            {checked ? (
              <GoDotFill fill="rgb(34 197 94 / var(--tw-text-opacity, 1))" />
            ) : null}{" "}
            Campaign Details{" "}
          </Button>
          <Button
            variant="outline"
            className="bg-white rounded-lg"
            onClick={() => {
              setChecked(!checked);
            }}
          >
            {!checked ? (
              <GoDotFill fill="rgb(34 197 94 / var(--tw-text-opacity, 1))" />
            ) : null}{" "}
            Portal Details{" "}
          </Button>
        </div>
      </div>
      {checked ? (
        <div className="p-2 pt-3">
          <div className="bg-muted/50 pt-2 px-2 mx-2 border rounded-lg">
            <AdminHeader
              header={"Your Application is free on this plan"}
              description="Paid plan offers higher useage limits, additional branches and much more. learn more here."
              btnMessage="Upgrade plan"
            />
          </div>
          <div className="p-2">
            <h4>Create a Campaign</h4>
            <p>Enter the details of your campaign below.</p>
            <Separator className="my-4" />
            <div>
              <div className="flex items-center">
                <div className="w-3/12">
                  <h5>Campaign Name</h5>
                  <p>Changes will update the name</p>
                </div>
                <div className="w-3/12 flex items-center my-4">
                  <CustomInput size="md" placeholder="Campaign Name" />
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-3/12">
                  <h5>Subdomain</h5>
                  <p>You can enter a sub domain later</p>
                </div>
                <div className="w-3/12 flex items-center">
                  <CustomInput size="md" placeholder="subdomain" />
                </div>
              </div>
              <div className="flex items-center my-4">
                <div className="w-3/12">
                  <h5>Website</h5>
                  {/* <p>Changes will update name</p> */}
                </div>
                <div className="w-3/12 flex items-center">
                  <CustomInput size="md" placeholder="Campaign website" />
                </div>
              </div>
              <div className="flex items-cente r">
                <div className="w-3/12">
                  <h5>Canpaign currency</h5>
                </div>
                <div className="w-3/12 flex items-center">
                  <CustomInput size="md" placeholder="Campaign currency" />
                </div>
              </div>
              <div className="flex items-start gap-2 my-4">
                <div className="relative">
                  <p>
                    Approve Affiliate Automatically
                    <span className="text-red-500 font-bold text-lg">*</span>
                  </p>
                </div>
                <div>
                  <Checkbox />
                </div>
              </div>
              <div className="flex border rounded-lg w-6/12 overflow-hidden">
                <div className="flex items-center justify-center bg-muted/50 w-7/12 py-2">
                  <GoDotFill fill="rgb(34 197 94 / var(--tw-text-opacity, 1))" />{" "}
                  Pacentage
                </div>
                <div className="flex-1 flex justify-center items-center bg-white">
                  <div>Flate Rate</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 w-6/12 mt-3">
              <div className="">
                <div>
                  <label htmlFor="">Commision Rate</label>
                </div>
                <div className=" flex items-center my-2">
                  <CustomInput size="md" placeholder="USD - US Dollars" />
                </div>
              </div>
              <div className="">
                <div>
                  <label htmlFor="">Commision Rate</label>
                </div>
                <div className=" flex items-center my-2">
                  <CustomInput size="md" placeholder="USD - US Dollars" />
                </div>
              </div>
              <div className="">
                <div>
                  <label htmlFor="">Commision Rate</label>
                </div>
                <div className="flex items-center my-2">
                  <CustomInput size="md" placeholder="USD - US Dollars" />
                </div>
              </div>
              <div className="">
                <div>
                  <label htmlFor="">Commision Rate</label>
                </div>
                <div className="flex items-center my-2">
                  <CustomInput size="md" placeholder="USD - US Dollars" />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center w-6/12 mt-5">
              <div></div>
              <div>
                <Button variant="primary" className="bg-blue-400" size="lg">
                  <Save /> Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-2 pt-3">
          <div className="bg-muted/50 pt-2 px-2 mx-2 border rounded-lg">
            <AdminHeader
              header={"Your Application is free on this plan"}
              description="Paid plan offers higher useage limits, additional branches and much more. learn more here."
              btnMessage="Upgrade plan"
            />
          </div>
          <div className="p-2">
            <h4>Create a Campaign</h4>
            <p>Enter the details of your campaign below.</p>
            <Separator className="my-4" />
          </div>

          <div className="w-9/12 grid grid-cols-2 gap-5 p-2">
          <div className="flex gap-3 items-center">
            <div className="p-5 rounded-lg border">
              <ImagePlus />
            </div>
            <div>
              <h5>Choose main logo</h5>
              <p>PNG or JPG file, max size of 4MB</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="p-5 rounded-lg border">
              <ImagePlus />
            </div>
            <div>
              <h5>Choose favicon</h5>
              <p>PNG or JPG file, max size of 2MB</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="p-5 rounded-lg border">
              <ImagePlus />
            </div>
            <div>
              <h5>Choose Dashboard logo</h5>
              <p>Upload a logo (PNG or JPG file, max size of 4MB) for your <br/> affiliate portal dashboard.</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="p-5 rounded-lg border">
              <ImagePlus />
            </div>
            <div>
              <h5>Choose Dashboard collapsed logo</h5>
              <p>PNG or JPG file, max size of 4MB. This logo shows on your <br/> affiliate portal dashboard when it is collapsed.</p>
            </div>
          </div>

          </div>
          <div className="grid grid-cols-2 w-9/12 gap-5 mt-5 p-2">
            <div>
              <h6>Background color</h6>
              <div className="flex justify-between items-center py-1 px-3  border rounded-lg">
                <div><input type="text" className="border-0 outline-none" value={backgroundColor} placeholder="#f23323" onChange={(e)=> setBackgroundColor(e.target.value)} /></div>
                <div className="w-2/12 border px-2 py-4 rounded-xl" style={{backgroundColor: `${backgroundColor}`}}></div>
              </div>
            </div>
            <div>
              <h6>Text color</h6>
              <div className="flex justify-between items-center py-1 px-3  border rounded-lg">
                <div><input type="text" className="border-0 outline-none" value={textColor} placeholder="#f23323" onChange={(e)=> setTextColor(e.target.value)} /></div>
                <div className="w-2/12 border px-2 py-4 rounded-xl" style={{backgroundColor: `${textColor}`}}></div>
              </div>
            </div>
            <div>
              <h6>Button color</h6>
              <div className="flex justify-between items-center py-1 px-3  border rounded-lg">
                <div><input type="text" className="border-0 outline-none" value={buttonColor} placeholder="#f23323" onChange={(e)=> setButtonColor(e.target.value)} /></div>
                <div className="w-2/12 border px-2 py-4 rounded-xl" style={{backgroundColor: `${buttonColor}`}}></div>
              </div>
            </div>
            <div>
              <h6>Secondary color</h6>
              <div className="flex justify-between items-center py-1 px-3  border rounded-lg">
                <div><input type="text" className="border-0 outline-none" value={secondaryColor} placeholder="#f23323" onChange={(e)=> setSecondaryColor(e.target.value)} /></div>
                <div className="w-2/12 border px-2 py-4 rounded-xl" style={{backgroundColor: `${secondaryColor}`}}></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <AdminHeader header='Create a Campaign' description="Enter the details of your campaign below."/> */}
    </div>
  );
}

"use client";

import AdminHeader from "@/components/admin-components/header";
import { Input, Checkbox } from "rsuite";
import { Separator } from "@/components/ui/separator";
import { Dot } from "lucide-react";

export default function page() {
  const styles = {
    // marginBottom: 10
  };

  const CustomInput = ({ ...props }) => <Input {...props} style={styles} />;

  return (
    <div className="bg-white p-2 rounded-lg border h-full">
      <div className="bg-muted/50 p-2 ">
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
          <div className="flex border rounded-lg w-6/12">
            <div className="flex items-center justify-center bg-muted/50 w-7/12">
              <Dot size={40} className="text-green-500" /> Pacentage
            </div>
            <div className="flex justify-center items-center w-4/12">
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
      </div>
      {/* <AdminHeader header='Create a Campaign' description="Enter the details of your campaign below."/> */}
    </div>
  );
}

"use client";
import AdminCampaignCard from "@/components/project-card/admin-campaign-card";
import img1 from "../assets/user-1.png";


export default function page() {
    const category = ["category1", "category2", "category3", "category4"];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

        <AdminCampaignCard icon={"/user-1.png"} title="Campaign 1" subtitle="This is campaign 1" category={category} />
        <AdminCampaignCard icon={"/user-1.png"} title="Campaign 1" subtitle="This is campaign 1" category={category} />
        <AdminCampaignCard icon={"/user-1.png"} title="Campaign 1" subtitle="This is campaign 1" category={category} />
        <AdminCampaignCard icon={"/user-1.png"} title="Campaign 1" subtitle="This is campaign 1" category={category} />
        <AdminCampaignCard icon={"/user-1.png"} title="Campaign 1" subtitle="This is campaign 1" category={category} />
        <AdminCampaignCard icon={"/user-1.png"} title="Campaign 1" subtitle="This is campaign 1" category={category} />
        <AdminCampaignCard icon={"/user-1.png"} title="Campaign 1" subtitle="This is campaign 1" category={category} />
        <AdminCampaignCard icon={"/user-1.png"} title="Campaign 1" subtitle="This is campaign 1" category={category} />
        <AdminCampaignCard icon={"/user-1.png"} title="Campaign 1" subtitle="This is campaign 1" category={category} />
        <AdminCampaignCard icon={"/user-1.png"} title="Campaign 1" subtitle="This is campaign 1" category={category} />
        <AdminCampaignCard icon={"/user-1.png"} title="Campaign 1" subtitle="This is campaign 1" category={category} />
        <AdminCampaignCard icon={"/user-1.png"} title="Campaign 1" subtitle="This is campaign 1" category={category} />
        <AdminCampaignCard icon={"/user-1.png"} title="Campaign 1" subtitle="This is campaign 1" category={category} />
        <AdminCampaignCard icon={"/user-1.png"} title="Campaign 1" subtitle="This is campaign 1" category={category} />
        <AdminCampaignCard icon={"/user-1.png"} title="Campaign 1" subtitle="This is campaign 1" category={category} />
        <AdminCampaignCard icon={"/user-1.png"} title="Campaign 1" subtitle="This is campaign 1" category={category} />
        <AdminCampaignCard icon={"/user-1.png"} title="Campaign 1" subtitle="This is campaign 1" category={category} />
        <AdminCampaignCard icon={"/user-1.png"} title="Campaign 1" subtitle="This is campaign 1" category={category} />
        <AdminCampaignCard icon={"/user-1.png"} title="Campaign 1" subtitle="This is campaign 1" category={category} />
        <AdminCampaignCard icon={"/user-1.png"} title="Campaign 1" subtitle="This is campaign 1" category={category} />
    </div>
  )
}
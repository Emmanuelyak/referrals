"use client"
import { createContext, useState } from "react";

export const GlobalNav = createContext();

export default function NavProvider ({ children }){
    const [activeTab, setActiveTab] = useState("home");
return(
    <GlobalNav.Provider value={{activeTab, setActiveTab}}>
        {children}
    </GlobalNav.Provider>
)
}
"use client"

import Image from "next/image";
import {useContext, useEffect} from "react";
import {UserContext} from "@/context/UserContext";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";
import {Button} from "@mui/material";

export default function Home() {
    console.log(process.env.DEV_PORT)
    const router = useRouter()

    useEffect(() => {
        const data = localStorage.getItem("curr_user");
        console.log(data);
        if (!data) {
            toast.error("User not logged in");
            router.push("/login");
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("curr_user");
        router.refresh();
        router.push("/login");
        toast.success("Logout successfull");
    }

    // console.log(data)
    const {user} = useContext(UserContext);

    useEffect(() => {
    }, [])
    return (
        <>
            Hello {user.email}
            <Button onClick={handleLogout}>Logout</Button>
        </>
    );
}

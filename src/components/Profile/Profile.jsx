import React, { useEffect, useState } from "react";
import './profile.css';
import { useAuth } from "../Contexts/ContextsSesion";

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User, Skeleton } from "@nextui-org/react";

export default function Profile() {
    const port = JSON.parse(import.meta.env.VITE_SERVER);
    const [user, setUser] = useState({});
    const {logOut} = useAuth();
    let ws;

    useEffect(() => {
        ws = new Worker('/src/workers/worker.js');

        ws.addEventListener('message', (data) => {
            //console.log("data de regreso", data.data);
            setUser(data.data);
        });
        ws.postMessage({ data: port, function: "user" });

        return () => {
            ws.terminate();
        };
    }, []);



    return (user.id) ? (
        <div className="flex items-center gap-4 mr-14 ml-5">
            <Dropdown size="lg" placement="bottom-start">
                <DropdownTrigger>
                    <User
                        as="button"
                        avatarProps={{
                            isBordered: true,
                            src: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`,
                        }}
                        className="transition-transform text-white"
                        description={`@${user.username}`}
                        name={user.global_name}
                    />
                </DropdownTrigger>
                <DropdownMenu aria-label="User Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2" textValue="User Actions">
                        <p className="font-bold text-xl">Signed in as</p>
                    </DropdownItem>
                    <DropdownItem key="settings">
                        My Settings
                    </DropdownItem>
                    <DropdownItem key="team_settings">Team Settings</DropdownItem>
                    <DropdownItem key="analytics">
                        Analytics
                    </DropdownItem>
                    <DropdownItem key="system">System</DropdownItem>
                    <DropdownItem key="configurations">Configurations</DropdownItem>
                    <DropdownItem key="help_and_feedback">
                        Help & Feedback
                    </DropdownItem>
                    <DropdownItem key="logout" color="danger" onClick={logOut}>
                        Log Out
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>) : (
        <div className="max-w-[300px] w-full flex items-center gap-3">
            <div>
                <Skeleton className="flex rounded-full w-12 h-12" />
            </div>
            <div className="w-full flex flex-col gap-2">
                <Skeleton className="h-3 w-3/5 rounded-lg" />
                <Skeleton className="h-3 w-4/5 rounded-lg" />
            </div>
        </div>)

}

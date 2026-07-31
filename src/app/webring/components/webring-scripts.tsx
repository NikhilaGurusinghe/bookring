"use client"

import { useEffect, useState } from "react";
import members from "../membership-lists/default";
import WebringAutoNavigate from "./webring-auto-navigate";
import WebringGetImage from "./webring-get-image";
import type { Member } from "../members";

export type WebringScriptProps = { members: Member[], referrer: string | undefined };

export default function WebringScripts() {
    const [referrer, setReferrer] = useState<string>();
    useEffect(() => {
        setReferrer(document.referrer);
    });


    return (
        <> 
            <WebringAutoNavigate members={members} referrer={referrer} />
        </>
    );
}
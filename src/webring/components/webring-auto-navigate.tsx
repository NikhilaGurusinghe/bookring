// Based entirely on Webring Script by PetraPixel (https://petrapixel.neocities.org/coding/webringu)
// thank you to them for making this script :)
"use client"

import { useSearchParams } from "next/navigation";
import { Member } from "../members";
import { useEffect, useState } from "react";

type WebringAutoNavigateProps = { members: Member[] };

const ACTION_PARAM_KEYWORD: string = "action";

export default function WebringAutoNavigate({ members } : WebringAutoNavigateProps) {
    const [referrer, setReferrer] = useState<string>();
    useEffect(() => {
        setReferrer(document.referrer);
    })



    const searchParams = useSearchParams();

    const navigateAction: string | null = searchParams.get(ACTION_PARAM_KEYWORD);

    // if (members === null) {
    //     return null;
    // }

    // const index = members.findIndex((member: Member) => {
    //     // member.baseURL.includes
    // });

    // members.

     return (
    <div>
      Referrer: {referrer}
    </div>
  );
}
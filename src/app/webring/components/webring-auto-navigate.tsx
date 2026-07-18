// Based entirely on Webring Script by PetraPixel (https://petrapixel.neocities.org/coding/webringu)
// thank you to them for making this script :)
"use client"

import { redirect, RedirectType, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import type { Member } from "../members";

type WebringAutoNavigateProps = { membersJSON: string };

const ACTION_PARAM_KEYWORD: string = "action";
enum NavigationActions {
    NEXT = "next",
    PREVIOUS = "previous",
    RANDOM = "random",
};

export default function WebringAutoNavigate({ membersJSON } : WebringAutoNavigateProps) {
    // members list
    const members: Member[] = JSON.parse(membersJSON);

    // getting query params from url
    const searchParams = useSearchParams();
    const navigateAction: string | null = searchParams.get(ACTION_PARAM_KEYWORD);

    // getting our "referer"
    const [referrer, setReferrer] = useState<string>();
    useEffect(() => {
        setReferrer(document.referrer);
    })

    console.log(members)
    console.log(referrer)

    if (referrer !== undefined && navigateAction !== null) {
        // getting the hostname:portNumber of our referer (if there is any portNumber, otherwise just hostname)
        // https://stackoverflow.com/questions/1420881/how-to-extract-base-url-from-a-string-in-javascript
        const referrerHost: string = referrer.split("/")[2];


        const referrerMemberIndex: number = members.findIndex((member: Member) => {
            // URL.host returns the hostname:portNumber (if there is any portNumber, otherwise just hostname)
            console.log(member.baseURL.toString(), referrer,  member.baseURL.host === referrerHost)

            return member.baseURL.host === referrerHost;
        });
        console.log(referrerMemberIndex);

        if (referrerMemberIndex === -1) {
            console.log("bad!");
            return (
        <div>
            referrer: {referrer}
        </div>
    ); // do nothing
        }

        // if the referrer is one of our members
        let memberIndexToRedirectTo = 0;
        switch (navigateAction.toLowerCase()) {
            case NavigationActions.NEXT:
                memberIndexToRedirectTo = referrerMemberIndex + 1 === members.length ? 0 : referrerMemberIndex + 1;
                break;
            case NavigationActions.PREVIOUS:
                memberIndexToRedirectTo = referrerMemberIndex - 1 === -1 ? members.length - 1 : referrerMemberIndex - 1;
                break;
            case NavigationActions.RANDOM:
                memberIndexToRedirectTo = referrerMemberIndex;
                while (memberIndexToRedirectTo === referrerMemberIndex) {
                    memberIndexToRedirectTo = Math.floor(Math.random() * members.length);
                }
                break;
            default:
                return (
        <div>
            referrer: {referrer}
        </div>
    );  // do nothing
        }

        console.log("redirecting to ", memberIndexToRedirectTo);
        // goodbye 🙋‍♀️
        // redirect(members[memberIndexToRedirectTo].baseURL.toString(), RedirectType.replace);    
    }
    
    return (
        <div>
            referrer: {referrer}
        </div>
    ); // do nothing
}
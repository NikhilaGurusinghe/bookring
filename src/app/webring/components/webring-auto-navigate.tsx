// Based entirely on Webring Script by PetraPixel (https://petrapixel.neocities.org/coding/webringu)
// thank you to them for making this script :)
"use client"

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import type { Member } from "../members";
import type { WebringScriptProps } from "./webring-scripts";

// this is the name of the parameter we are looking for when a webring participant queries this site
const ACTION_PARAM_KEYWORD: string = "action";
// these are the valid parameter values that a webring participant can send this site
enum NavigationActions {
    NEXT = "next",
    PREVIOUS = "previous",
    RANDOM = "random",
};

export default function WebringAutoNavigate({ members, referrer } : WebringScriptProps) {
    // members list
    console.log(members)

    // getting query params from url
    const searchParams = useSearchParams();
    const navigateAction: string | null = searchParams.get(ACTION_PARAM_KEYWORD);
    // https://stackoverflow.com/questions/43804805/check-if-value-exists-in-enum-in-typescript
    const isNavigateActionValid: boolean = navigateAction !== null && Object.values(NavigationActions).includes(navigateAction as NavigationActions);
    console.log("navigateAction was", navigateAction)
    // console.log("was navigateAction in enum was", Object.values(NavigationActions).includes(navigateAction))

    // getting our "referer"
    useEffect(() => {
        if (referrer !== undefined && isNavigateActionValid) {
            console.log("referer was:", referrer);
            const referrerHost: string = (new URL(referrer)).host;

            const referrerMemberIndex: number = members.findIndex((member: Member) => {
                // see members var declaration for why we do this
                const currMemberHost: string = member.baseURL.host;

                // URL.host returns the hostname:portNumber (if there is any portNumber, otherwise just hostname)
                console.log("referer vs members url comps:", currMemberHost, referrerHost, currMemberHost === referrerHost)

                return currMemberHost === referrerHost;
            });
            console.log(referrerMemberIndex);

            // if the referrer is one of our members
            if (referrerMemberIndex !== -1) {
                let memberIndexToRedirectTo = -1;
                // navigateAction can't be null here as we check isNavigateActionValid which checks nullity
                switch ((navigateAction as string).toLowerCase()) {
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
                        // invalid request
                        memberIndexToRedirectTo = -1;
                }

                console.log("redirecting to ", members[memberIndexToRedirectTo].baseURL.href);
                // goodbye 🙋‍♀️ 
                window.location.replace(members[memberIndexToRedirectTo].baseURL.href);
            }
        }
    })
    
    return null; // do nothing
}
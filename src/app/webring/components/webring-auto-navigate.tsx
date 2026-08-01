// Based entirely on Webring Script by PetraPixel (https://petrapixel.neocities.org/coding/webringu)
// thank you to them for making this script :)
"use client"

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { findMemberIndex } from "../members";
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
    // getting query params from url
    const searchParams = useSearchParams();
    const navigateAction: string | null = searchParams.get(ACTION_PARAM_KEYWORD);
    // https://stackoverflow.com/questions/43804805/check-if-value-exists-in-enum-in-typescript
    const isNavigateActionValid: boolean = navigateAction !== null && Object.values(NavigationActions).includes(navigateAction as NavigationActions);

    // getting our "referer"
    useEffect(() => {
        // TODO better can referrer become url checking here
        if (referrer !== undefined && referrer !== null && referrer !== "" && isNavigateActionValid) {
            const referrerURL: URL = new URL(referrer);
            const referrerMemberIndex: number = findMemberIndex(members, referrerURL);

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
                        window.location.replace("https://nikhilagurusinghe.github.io/bookring/400");
                }

                // goodbye 🙋‍♀️ 
                window.location.replace(members[memberIndexToRedirectTo].baseURL.href);
            } else {
                // forbidden - referrer isn't a member, but is trying to be redirected like a member
                // window.location.replace("https://nikhilagurusinghe.github.io/bookring/403");
            }
        }
    })
    
    return null; // do nothing
}
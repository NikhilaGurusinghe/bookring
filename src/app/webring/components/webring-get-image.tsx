"use client"

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { findMemberIndex } from "../members";
import type { WebringScriptProps } from "./webring-scripts";


const IMAGE_PARAM_KEYWORD: string = "image";
enum ImageQueryOptions {
    CURRENT = "current",
};


export default function WebringGetImage({ members, referrer } : WebringScriptProps) {
    // getting query params from url
    const searchParams = useSearchParams();
    const imageQuery: string | null = searchParams.get(IMAGE_PARAM_KEYWORD);
    // https://stackoverflow.com/questions/43804805/check-if-value-exists-in-enum-in-typescript
    console.log("IMAGE| navigateAction was", imageQuery)
    const isImageQueryValid: boolean = imageQuery !== null && Object.values(ImageQueryOptions).includes(imageQuery as ImageQueryOptions);
    console.log(isImageQueryValid)
    console.log("referrer was: ", referrer)

    useEffect(() => {
        if (referrer !== undefined && referrer !== "" && isImageQueryValid) {
            const referrerURL: URL = new URL(referrer);
            const referrerMemberIndex: number = findMemberIndex(members, referrerURL);

            if (referrerMemberIndex !== -1) {
                if ((imageQuery as string) === ImageQueryOptions.CURRENT) {
                    // TODO need to load image as an arraybuffer and then send this as a Response of type image/ something
                    window.location.replace(members[referrerMemberIndex].imageURL.href);
                }
            }
        }
    }, [members, referrer]);


    return null;
}
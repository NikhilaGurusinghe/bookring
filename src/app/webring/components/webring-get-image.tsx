"use client"

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import type { Member } from "../members";
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
    
    useEffect(() => {
        if (referrer !== undefined && isImageQueryValid) {
            
        }
    });


    return null;
}
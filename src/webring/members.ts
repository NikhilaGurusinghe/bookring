// Based entirely on Webring Script by PetraPixel (https://petrapixel.neocities.org/coding/webringu)
// thank you to them for making this script :)

import { URL } from "node:url";

export class Member {
    name: string;
    baseURL: URL;
    imageURL: URL;
    description: string;
}

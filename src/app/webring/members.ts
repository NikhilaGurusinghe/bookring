// Based entirely on Webring Script by PetraPixel (https://petrapixel.neocities.org/coding/webringu)
// thank you to them for making this script :)

import { URL } from "node:url";

export class Member {
    public readonly name: string;
    public readonly baseURL: URL;
    public readonly imageURL: URL | null;
    public readonly description: string;

    public constructor(name: string, baseURL: URL, imageURL: URL | null, description: string) {
        this.name = name;
        this.baseURL = baseURL;
        this.imageURL = imageURL;
        this.description = description;
    }
    
}

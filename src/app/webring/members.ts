// Based entirely on Webring Script by PetraPixel (https://petrapixel.neocities.org/coding/webringu)
// thank you to them for making this script :)

export class Member {
    public readonly name: string;
    public readonly baseURL: URL;
    public readonly imageURL: URL;
    public readonly description: string;

    public constructor(name: string, baseURL: URL, imageURL: URL, description: string) {
        this.name = name;
        this.baseURL = baseURL;
        this.imageURL = imageURL;
        this.description = description;
    }
}
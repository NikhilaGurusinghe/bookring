// Based entirely on Webring Script by PetraPixel (https://petrapixel.neocities.org/coding/webringu)
// thank you to them for making this script :)
type MemberJSON = {name: string, baseURL: string, imageURL: string, description: string};

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

function parseMemberJSON(json: MemberJSON): Member {
    return {
        ...json,
        baseURL: new URL(json.baseURL),
        imageURL: new URL(json.imageURL),
    }
}

export function parseMembersJSON(json: string): Member[] {
    const membersJSON: MemberJSON[] = JSON.parse(json);
    return membersJSON.map(parseMemberJSON);
}

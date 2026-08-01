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

export function findMemberIndex(members: Member[], referrerURL: URL) {
    const referrerHref: string = referrerURL.href;

    return members.findIndex((member: Member) => {
        const currMemberHref: string = member.baseURL.href;

        // we're checking here if the referrers href contains our current member's href
        // this means that if referrer is "https://mysite.com/my-specific-webring-site/webrings.html"
        // will evaluate to true for a member's baseURL of "https://mysite.com/my-specific-webring-site"
        return referrerHref.includes(currMemberHref);
    });
}
import { Member } from "./members";

export class BookringMember extends Member {
    public readonly goodreadsURL: URL;

    public constructor(name: string, baseURL: URL, imageURL: URL, description: string, goodreadsURL: URL) {
        super(name, baseURL, imageURL, description);
        this.goodreadsURL = goodreadsURL;
    }
}
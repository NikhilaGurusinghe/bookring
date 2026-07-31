import { Member } from "../members"

const members: Member[] = [
    new Member("Test prev", new URL("https://google.com"), new URL("https://google.com"), "Taiwan Travelogue"),
    new Member("Nikhila", new URL("https://localhost:3000"), new URL("https://google.com"), "Taiwan Travelogue"),
    new Member("Test next", new URL("https://bing.com"), new URL("https://google.com"), "Taiwan Travelogue"),
    new Member("Test next", new URL("https://bing1.com"), new URL("https://google.com"), "Taiwan Travelogue"),
    new Member("Test next", new URL("https://bing2.com"), new URL("https://google.com"), "Taiwan Travelogue"),
    new Member("Test next", new URL("https://bing3.com"), new URL("https://google.com"), "Taiwan Travelogue"),
];

export default members;
import members from "./webring/membership-lists/default";
import WebringAutoNavigate from "./webring/components/webring-auto-navigate";
import Link from "next/link";

export default function Home() {
  return (
      <main className="font-bold">
        <WebringAutoNavigate membersJSON={JSON.stringify(members)} />
      </main>
  );
}

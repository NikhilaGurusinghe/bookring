import members from "./webring/membership-lists/default";
import WebringAutoNavigate from "./webring/components/webring-auto-navigate";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
      <main className="font-bold">
        <Suspense>
          <WebringAutoNavigate membersJSON={JSON.stringify(members)} />
        </Suspense>
      </main>
  );
}

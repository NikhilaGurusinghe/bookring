import members from "./webring/membership-lists/default";
import WebringAutoNavigate from "./webring/components/webring-auto-navigate";
import { Suspense } from "react";

export default function Home() {
  return (
      <main className="font-bold">
        <Suspense>
          <WebringAutoNavigate membersJSON={JSON.stringify(members)} />
        </Suspense>

        <div>Next.js test</div>
      </main>
  );
}

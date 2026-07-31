import { Suspense } from "react";
import WebringScripts from "./webring/components/webring-scripts";

export default function Home() {
  return (
      <main>
        <Suspense>
          <WebringScripts />
        </Suspense>
        <div className="font-bold">Bookring</div>
      </main>
  );
}

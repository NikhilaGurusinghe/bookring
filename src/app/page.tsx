import { Suspense } from "react";
import WebringScripts from "./webring/components/webring-scripts";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Suspense>
        <WebringScripts />
      </Suspense>
      <main className="flex flex-row min-h-screen justify-center items-center">
        <div className="font-bold inline-flex items-center gap-3">
          <Image src="https://nikhilagurusinghe.github.io/bookring/images/webring_widget/book.png" width={48} height={48} alt="Bookring Logo"/>
          <span className="pt-2">Bookring</span>
        </div>
      </main>
    </>
  );
}

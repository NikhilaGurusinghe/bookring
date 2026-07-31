export default function Home() {
  return (
      <main className="font-bold">
        <a href="/?action=next">go next test</a>
        <br/>
        <a href="/?action=previous">go previous test</a>
        <br/>
        <a href="/?action=random">go random test</a>
        <br />
        <a href="/?image=current">go to current image</a>
        <div>Next.js test</div>
      </main>
  );
}

import Image from "next/image";

export default function Home() {
  const data = [{name: "Muhammad Samar Saeed", age: 18}];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Redux Tool</h1>
      {data[0].name}
    </main>
  );
}

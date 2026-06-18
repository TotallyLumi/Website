import Image from "next/image";

export default function Home() {
  return (
    <div className="px-4 w-full">
      <header className="h-[70vh] bg-cover bg-center flex items-center text-left justify-center">
        <div className="bg-black/65 border border-pink-500 p-8 rounded-lg text-left shadow-xl">
          <h1 className="text-xl md:text-2xl">Hello</h1>
        </div>
      </header>
    </div>
  );
}

import Image from "next/image";

export default function Home() {
  return <>
    <h1 className="text-xl md:text-2xl">totallylumi.top</h1>
    <p>
      Hello there, I'm Lumi and welcome to my website! <br/>
      I've always had a passion in technology, programming, gaming and music. <br/>
      I've been programming since I was 12 years old and mainly know HTML, JavaScript/TypeScript and CSharp.
    </p>
    <br/>
    <h1 className="text-xl md:text-2xl">Contact</h1>
    <p>These are the different ways, you can contact me for any reasons.</p>
    <p>Discord: <a className="hover:text-zinc-400 transition" href="https://discord.com/users/1257791775523868735">@totallylumi</a> | Alt Account: <a className="hover:text-zinc-400 transition" href="https://discord.com/users/1504915933452570634">@xexblooms</a></p>
    <p>Email: <a className="hover:text-zinc-400 transition" href="mailto:totallylumi@proton.me">@totallylumi@proton.me</a></p>
    <p>GitHub: <a className="hover:text-zinc-400 transition" href="https://github.com/totallylumi">@TotallyLumi</a></p>
  </>
}

import Link from "next/link";

export default function Home() {
  return <>
  <div className="h-[50vh] flex flex-col justify-center">
    <h1 className="text-5xl text-center font-semibold m-8">Welcome Guest!</h1>
    <div className="flex items-center justify-center">
      <Link  href='/profile' className="border border-black px-6 py-2 cursor-pointer hover:bg-black hover:text-white transition-all duration-300" >Visit Your Profile</Link>
    </div>
  </div>
  </>;
}

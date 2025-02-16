import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-12 bg-[#95b71d] flex justify-center items-center gap-8 p-4 font-bold text-lg">
      <Link href="/">Home</Link>
      <Link href="/quotes">Shrek Quotes</Link>
      <Link href="/donkey">Donkey</Link>
      <Link href="/gallery">Gallery</Link>
      <Link href="/meme">Meme</Link>
      <Link href="/meme-generator">Meme Generator</Link>
      <Link href="/magicbox">MagicBox</Link>
    </nav>
  );
};

export default Navbar;

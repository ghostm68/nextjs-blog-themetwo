import Link from 'next/link';

export default function Header({ inkrealm }) {
  return (
    <header className="pt-20 pb-12">
      <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" />
      <p className="text-2xl dark:text-white text-center">
        <Link href="https://www.wordstar.gq">
          <a>{inkrealm}</a>
        </Link>
      </p>
    </header>
  );
}

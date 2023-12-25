import Image from 'next/image';
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Hello World. <br />
        under construction. open source. contribute on github.
        <br />
        <br />
        actions/
        <br />
        .auth.ts
        <br />
        .search.ts
        <br />
        .order.ts
        <br />
        <br />
        app/
        <br />
        /coupleroutes/
        <br />
        .page.tsx
        <br />
        /api/
        <br />
        ./apiroute/
        <br />
        <br />
        dev by jordwan
      </div>
    </main>
  );
}

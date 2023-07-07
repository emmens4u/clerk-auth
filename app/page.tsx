import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col p-24">
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              User Authentication with<strong className="font-extrabold text-green-700 sm:block">Clerk and Next.js 13</strong>
            </h1>
            <p className="mt-4 sm:text-xl/relaxed">
              Authentication has never been this easy with Clerk!
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/protect" className="block w-full rounded bg-green-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto">
                Go to protected page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
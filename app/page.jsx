export default function Home() {
  return (
    <main>
      <div className="flex gap-4 m-2">
        <BigButton text="Create workout plan"></BigButton>
        <BigButton text="Record new workout"></BigButton>
      </div>
    </main>
  )
}

function BigButton({ text }) {
  return (
    <button className="bg-slate-900 break-on-spaces border-2 border-slate-600 hover:border-yellow-300 font-bold py-10 px-4 rounded text-3xl text-slate-400 hover:text-slate-300">
      {text}
    </button>
  )
}
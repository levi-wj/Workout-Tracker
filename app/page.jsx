import Image from 'next/image'

function BigButton({ props }) {
  const { text } = props;

  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {text}
    </button>
  )
}

export default function Home() {
  return (
    <main className="">
      <h1>Workout Tracker</h1>
      <BigButton text="Create workout plan"></BigButton>
      <BigButton text="Record new workout"></BigButton>
    </main>
  )
}
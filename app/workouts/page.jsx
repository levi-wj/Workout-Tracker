import Image from 'next/image'

export default function Page2({ workout }) {
  return (
    <main className="">
      <h1>You are viewing a workout</h1>
      <p>{workout}</p>
    </main>
  )
}

import Image from 'next/image'

export default function Page2({ plan }) {
  return (
    <main className="">
      <h1>You are viewing a workout plan</h1>
      <p>{plan}</p>
    </main>
  )
}

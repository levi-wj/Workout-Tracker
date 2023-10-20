'use client';

import Link from "next/link";
import cn from "classnames";
import { useState } from 'react';

export default function Header() {
  const [selectedTab, setSelectedTab] = useState('workouts');

  return (
    <header className="flex justify-between items-center bg-slate-900 p-3">
      <Link href="/" onClick={() => setSelectedTab('')}>
        <h1 className="text-2xl">Workout Tracker</h1>
      </Link>
      <div>
        <Link href="/workouts" onClick={() => setSelectedTab('workouts')} className={cn({"bg-slate-800 p-2 m-2 rounded": true, "border-b-2 border-yellow-300": selectedTab === 'workouts'})}>Past Workouts</Link>
        <Link href="/plans" onClick={() => setSelectedTab('plans')} className={cn({"bg-slate-800 p-2 m-2 rounded": true, "border-b-2 border-yellow-300": selectedTab === 'plans'})}>Workout Plans</Link>
      </div>
    </header>
  )
}
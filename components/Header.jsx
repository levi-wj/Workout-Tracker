'use client';

import Link from "next/link";
import cn from "classnames";
import { useState } from 'react';

function HeaderButton({name, selectedTab, setSelectedTab}) {
  return <Link href={"/" + name.toLowerCase()} onClick={() => setSelectedTab(name)} className={cn({"bg-slate-800 p-4 m-2 rounded": true, "bg-slate-500 font-semibold": selectedTab === name})}>{name}</Link>
}

export default function Header() {
  const [selectedTab, setSelectedTab] = useState('');

  return (
    <header className="flex justify-between items-center bg-slate-900 p-5">
      <Link href="/" onClick={() => setSelectedTab('')}>
        <h1 className="text-2xl">Workout Planner</h1>
      </Link>
      <div>
        <HeaderButton name="Exercises" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <HeaderButton name="Plans" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>
    </header>
  )
}
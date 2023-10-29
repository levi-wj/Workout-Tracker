'use client'

import AddPlan from "@/components/AddPlan";
import { getCollection } from "../localstore";
import { useState } from "react";
import PlanList from "@/components/PlanList";

export default function Page() {
  let [plans, setPlans] = useState(getCollection('plans'));
  let [addingPlan, setAddingPlan] = useState(false);

  return (
    <main className="w-2/3 min-w-[35em] mt-6 m-auto">
      <div className="flex justify-between mb-5">
        <h1 className="text-2xl">My workout plans</h1>
        <button className="btn-primary" onClick={() => setAddingPlan(true)}>Create new plan</button>
      </div>
      {addingPlan && <AddPlan setAddingPlan={setAddingPlan} setPlans={setPlans} />}
      <PlanList plans={plans} setPlans={setPlans} />
    </main>
  )
}

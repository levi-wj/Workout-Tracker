'use client';

import Plan from "./Plan";

export default function PlanList({ plans, setPlans }) {
    let listitems = plans.map(plan => {
        return (<Plan key={plan.id} plan={plan} setPlans={setPlans} />)
    });

    return (
        <div className="flex flex-col">
            {listitems}
        </div>
    )
}
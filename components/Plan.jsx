import { deleteItem } from "@/app/localstore"

function ExerciseEntry({ exercise }) {
    return (
        <div className="bg-slate-700 rounded p-2">
            <p className="font-semibold">{exercise.name}</p>
        </div>
    );
}

export default function Plan({ plan, setPlans }) {
    const exerciseEntries = plan.exercises.map(exercise => {
        return (<ExerciseEntry key={plan.id} exercise={exercise} />)
    });
    function clickDelete() {
        setPlans(deleteItem('plans', plan.id)) 
    }

    return (
        <div className="grid grid-cols-4 bg-slate-900 rounded p-4 mb-2">
            <div>
                <p className="text-gray-400">Name</p>
                <h2 className="font-bold text-l">{plan.name}</h2>
            </div>
            <div>
                <p className="text-gray-400">Difficulty</p>
                <p className="font-semibold">{plan.difficulty}</p>
            </div>
            <div>
                <p className="text-gray-400">Length</p>
                <p className="font-semibold">{plan.length}</p>
            </div>
            <div className="text-right">
                <button className="btn-danger max-w-[10em]" onClick={clickDelete}>Delete</button>
            </div>
            <div className="col-span-4 mt-3">
                <p className="text-gray-400 mb-1">Exercises</p>
                <div className="grid grid-cols-2 gap-2 bg-slate-800 p-3 rounded">
                    {exerciseEntries}
                </div>
            </div>
        </div>
    )
}
import { deleteItem } from "@/app/localstore";

export default function Exercise({ exercise, setExercises, deleteFunc }) {
    function clickDelete() {
        if (deleteFunc) {
            deleteFunc(exercise.id);
        } else {
            setExercises(deleteItem('exercises', exercise.id)) 
        }
    }

    return (
        <div className="grid grid-cols-3 bg-slate-900 rounded p-4 mb-2">
            <div>
                <p className="text-gray-400">Title</p>
                <h2 className="font-bold text-l">{exercise.name}</h2>
            </div>
            <div>
                <p className="text-gray-400">Description</p>
                <p className="font-semibold">{exercise.description}</p>
            </div>
            <div className="text-right">
                <button className="btn-danger max-w-[10em]" onClick={clickDelete}>Delete</button>
            </div>
        </div>
    )
}
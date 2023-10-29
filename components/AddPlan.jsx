import { addItem, getCollection } from "@/app/localstore";
import { useState } from "react";
import ExerciseList from "./ExerciseList";

function submit(setExercises, form, planExercises) {
    const data = new FormData(form);
    setExercises(
        addItem('plans', {
            name: data.get('name'),
            difficulty: data.get('difficulty'),
            length: data.get('length'),
            exercises: planExercises
        })
    );
}

function ExerciseSelect ({ exercises, onchange }) {
    return (
        <select name="exercises" className="inline-block dropdown" onChange={onchange}>
            <option hidden value="">Select an exercise</option>
            {exercises.map(exercise => <option key={exercise.id} value={exercise.id}>{exercise.name}</option>)}
        </select>
    );
}


export default function AddPlan ({ setPlans, setAddingPlan }) {
    const exercises = getCollection('exercises');
    let [addingExercise, setAddingExercise] = useState(false);
    let [planExercises, setPlanExercises] = useState([]);
    function deletePlanExercise(id) {
        setPlanExercises(planExercises.filter(exercise => exercise.id != id));
    }
    function addPlanExercise(e) {
        const id = e.target.value;
        planExercises.push(exercises.find(exercise => exercise.id == id));
        setPlanExercises(planExercises);
    }

    return (
        <form className="bg-slate-900 rounded p-4 mb-2" onSubmit={(e) => { submit(setPlans, e.target, planExercises); e.preventDefault(); setAddingPlan(false); }}>
            <h3 className="text-gray-400 text-l mb-1 text-lg">Details</h3>
            <div className="grid grid-cols-4 gap-3 ">
                <input type="text" name="name" className="w-full field col-span-2" placeholder="Plan Name" required />
                <input type="text" name="difficulty" className="w-full field" placeholder="Workout difficulty" />
                <input type="text" name="length" className="w-full field" placeholder="Workout length" />
            </div>
            <div className="mt-5">
                <h3 className="text-gray-400 text-l mb-1 text-lg">Exercises</h3>
                <div className="bg-slate-700 p-3 rounded">
                    <ExerciseList exercises={planExercises} setExercises={setPlanExercises} deleteFunc={deletePlanExercise} />
                    <button className="btn-secondary mr-3" type="button" onClick={() => setAddingExercise(true)}>+ Add exercise</button>
                    {addingExercise && <ExerciseSelect exercises={exercises} onchange={e => { addPlanExercise(e); setAddingExercise(false) }} />}
                </div>
            </div>
            <div className="flex align-middle justify-center mt-5">
                <button className="btn-primary mr-4" type="submit">Save</button>
                <button type="button" onClick={() => setAddingPlan(false)}>Cancel</button>
            </div>
        </form>
    );
}
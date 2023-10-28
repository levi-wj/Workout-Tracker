'use client';

import Exercise from "./Exercise";

export default function ExerciseList({ exercises, setExercises }) {
    let listitems = exercises.map(exercise => {
        return (<Exercise key={exercise.id} exercise={exercise} setExercises={setExercises} />)
    });

    return (
        <div className="flex flex-col">
            {listitems}
        </div>
    )
}
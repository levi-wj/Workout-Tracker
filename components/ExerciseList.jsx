'use client';

import Exercise from "./Exercise";

export default function ExerciseList({ exercises, setExercises, deleteFunc }) {
    let listitems = exercises.map(exercise => {
        return (<Exercise key={exercise.id} exercise={exercise} setExercises={setExercises} {...(deleteFunc ? {deleteFunc: deleteFunc} : {})}  />)
    });

    return (
        <div className="flex flex-col">
            {listitems}
        </div>
    )
}
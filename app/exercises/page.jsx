'use client'

import ExerciseList from "@/components/ExerciseList";
import AddExercise from "@/components/AddExercise";
import { getCollection } from "../localstore";
import { useState } from "react";

export default function Page() {
  let [exercises, setExercises] = useState(getCollection('exercises'));
  let [addingExercise, setAddingExercise] = useState(false);

  return (
    <main className="w-2/3 min-w-[35em] mt-6 m-auto">
      <div className="flex justify-between mb-5">
        <h1 className="text-2xl">My exercises</h1>
        <button className="btn-primary" onClick={() => setAddingExercise(true)}>Create new exercise</button>
      </div>
      {addingExercise && <AddExercise setExercises={setExercises} setAddingExercise={setAddingExercise} />}
      <ExerciseList exercises={exercises} setExercises={setExercises} />
    </main>
  )
}

import { addItem } from "@/app/localstore";

function submit(setExercises, form) {
    const data = new FormData(form);
    setExercises(
        addItem('exercises', {
            name: data.get('name'),
            description: data.get('description')
        })
    );
}

export default function AddExercise({ setExercises, setAddingExercise }) {
    return (
        <form className="grid grid-cols-3 align-middle bg-slate-900 rounded p-4 mb-2" onSubmit={(e) => { submit(setExercises, e.target); e.preventDefault(); setAddingExercise(false); }}>
            <div>
                <p className="text-gray-400">Title</p>
                <input type="text" name="name" className="w-8/9 field" />
            </div>
            <div>
                <p className="text-gray-400">Description</p>
                <input type="text" name="description" className="w-8/9 mr-5 field" />
            </div>
            <div className="flex align-middle justify-end">
                <button className="btn-primary mr-4" type="submit">Create</button>
                <button className="btn-secondary" type="button" onClick={() => setAddingExercise(false)}>Cancel</button>
            </div>
        </form>
    )
}
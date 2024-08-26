export default function TaskActions() {
    return (
        <div className="mb-14 items-center justify-between sm:flex">
            <h2 className="text-2xl font-semibold text-[#FF9100] max-sm:mb-4">Your Tasks</h2>
            <div className="flex items-center space-x-5">
                <button className="rounded-md bg-[#387F39] px-3.5 py-2.5 text-sm font-semibold">Add Task</button>
                <button className="rounded-md bg-[#A02334] px-3.5 py-2.5 text-sm font-semibold">Delete All</button>
            </div>
        </div>
    );
}

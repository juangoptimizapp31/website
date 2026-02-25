export default function CalendarPicker({ selectedDate, onSelect }) {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="space-y-4">
      <p className="text-sm text-white/70">
        1️⃣ Escoge una fecha
      </p>

      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => onSelect(day)}
            className={`h-10 rounded-lg text-sm transition
              ${
                selectedDate === day
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-white/10 hover:bg-white/20"
              }
            `}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}

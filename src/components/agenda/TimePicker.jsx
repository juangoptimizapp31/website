export default function TimePicker({ selectedTime, onSelect }) {
  const times = [
    "09:00", "10:00", "11:00",
    "14:00", "15:00", "16:00"
  ];

  return (
    <div className="space-y-4">
      <p className="text-sm text-white/70">
        2️⃣ Escoge una hora
      </p>

      <div className="grid grid-cols-3 gap-3">
        {times.map((time) => (
          <button
            key={time}
            onClick={() => onSelect(time)}
            className={`py-2 rounded-lg text-sm transition
              ${
                selectedTime === time
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-white/10 hover:bg-white/20"
              }
            `}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}

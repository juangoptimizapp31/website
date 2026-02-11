export default function ConfirmStep({ date, time, onConfirm }) {
  return (
    <div className="space-y-6 text-center">
      <p className="text-white/80">
        Vas a agendar:
      </p>

      <div className="text-blue-400 font-semibold">
        Día {date} · {time}
      </div>

      <button
        onClick={onConfirm}
        className="
          w-full py-3 rounded-xl
          bg-blue-600 hover:bg-blue-500
          text-white font-medium shadow-lg
        "
      >
        Confirmar agenda
      </button>
    </div>
  );
}

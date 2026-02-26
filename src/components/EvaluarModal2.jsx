import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  X,
  Wrench,
  Cog,
  DollarSign,
  BarChart3,
  Clock,
  Lock,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const EvaluarModal2 = ({ open, setOpen, onBack, onNext }) => {
  const hologramaImg = "/assets/holograma.png";

  const [goals, setGoals] = useState({
    ventas: true,
    eficiencia: true,
    costos: true,
    reportes: true,
  });

  const [comentarios, setComentarios] = useState("");

  const toggle = (key) => setGoals((prev) => ({ ...prev, [key]: !prev[key] }));

  const handleNext = () => {
    const payload = {
      objetivos: goals,
      comentarios,
    };
    onNext?.(payload);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-0 w-full max-w-xs max-h-[85vh] overflow-y-auto rounded-2xl border border-slate-200 shadow-2xl">
        <div className="relative bg-white">
          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-full bg-slate-200/70 text-slate-600 hover:bg-slate-200"
            aria-label="Cerrar"
          >
            <X size={22} />
          </button>

          <div className="px-6 pt-6 pb-5">
            {/* TITLE */}
            <h2 className="text-xl font-extrabold text-slate-800">
              Evalúa tu escenario{" "}
              <span className="font-medium text-slate-500">en pocos pasos</span>
            </h2>

            {/* STEP + PROGRESS */}
            <div className="mt-4 flex items-center gap-4">
              <span className="text-sm font-semibold text-slate-500">
                Paso 2 de 3
              </span>

              <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-2/3 rounded-full bg-blue-600" />
              </div>
            </div>

            {/* MAIN CARD */}
            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              {/* LEFT CONTENT */}
              <div>
                <p className="text-sm leading-relaxed text-slate-700">
                  Describe los{" "}
                  <span className="font-extrabold">
                    principales objetivos y retos
                  </span>{" "}
                  de tu negocio que te gustaría resolver con automatización e
                  inteligencia artificial:
                </p>

                <div className="mt-4 space-y-3">
                  <ToggleRow
                    icon={<Wrench size={18} />}
                    label="Aumentar ventas o conversiones"
                    value={goals.ventas}
                    onClick={() => toggle("ventas")}
                  />
                  <ToggleRow
                    icon={<Cog size={18} />}
                    label="Mejorar la eficiencia operativa"
                    value={goals.eficiencia}
                    onClick={() => toggle("eficiencia")}
                  />
                  <ToggleRow
                    icon={<DollarSign size={18} />}
                    label="Reducir costos o errores humanos"
                    value={goals.costos}
                    onClick={() => toggle("costos")}
                  />
                  <ToggleRow
                    icon={<BarChart3 size={18} />}
                    label="Generar reportes y análisis avanzados"
                    value={goals.reportes}
                    onClick={() => toggle("reportes")}
                  />
                </div>

                <div className="mt-5">
                  <p className="mb-2 font-semibold text-slate-700">
                    ¿Algo más que quieras lograr con IA?
                  </p>

                  <textarea
                    value={comentarios}
                    onChange={(e) => setComentarios(e.target.value)}
                    placeholder="Escribe tus comentarios aquí..."
                    className="h-20 w-full resize-none rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => onBack?.()}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200"
              >
                <ArrowLeft size={18} />
                Regresar
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-2 text-sm font-bold text-white shadow-md hover:bg-blue-700"
              >
                Siguiente <ArrowRight size={18} />
              </button>
            </div>

            {/* FOOTER */}
            <div className="mt-3 flex items-center justify-center gap-4 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-2">
                <Clock size={16} /> Toma menos de 3 minutos
              </span>
              <span className="flex items-center gap-2">
                <Lock size={16} /> Información confidencial.
              </span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

function ToggleRow({ icon, label, value, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 text-left hover:bg-slate-50"
    >
      <div className="flex items-center gap-3">
        <div className="text-blue-600">{icon}</div>
        <span className="font-semibold text-slate-700">{label}</span>
      </div>

      {/* Toggle */}
      <div
        className={[
          "relative h-7 w-14 rounded-full transition",
          value ? "bg-blue-600" : "bg-slate-300",
        ].join(" ")}
      >
        <div
          className={[
            "absolute top-1 h-5 w-5 rounded-full bg-white shadow transition",
            value ? "left-8" : "left-1",
          ].join(" ")}
        />
      </div>
    </button>
  );
}

export default EvaluarModal2;
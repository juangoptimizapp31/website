import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Clock, Lock, ArrowRight, ArrowLeft, ChevronDown } from "lucide-react";

const EvaluarModal3 = ({ open, setOpen, onBack, onSubmit }) => {
  const hologramaImg = "/assets/holograma.png";

  const [numEmpleados, setNumEmpleados] = useState("");
  const [sector, setSector] = useState("");
  const [usaAutomatizacion, setUsaAutomatizacion] = useState("");
  const [mensaje, setMensaje] = useState("");

  const opcionesEmpleados = [
    "1–5",
    "6–10",
    "11–25",
    "26–50",
    "51–100",
    "101–250",
    "251–500",
    "500+",
  ];

  const opcionesSector = [
    "Servicios",
    "Retail / Comercio",
    "Salud",
    "Finanzas",
    "Educación",
    "Logística",
    "Manufactura",
    "Tecnología",
    "Construcción",
    "Restaurantes",
    "Otro",
  ];

  const opcionesAutomatizacion = [
    "No",
    "Sí, básico (Excel / WhatsApp / plantillas)",
    "Sí, intermedio (Zapier / Make / CRM)",
    "Sí, avanzado (Integraciones / APIs / BI)",
  ];

  const handleSubmit = () => {
    const payload = {
      numEmpleados,
      sector,
      usaAutomatizacion,
      mensaje,
    };
    onSubmit?.(payload);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-0 max-w-4xl overflow-hidden rounded-2xl border-0">
        <div className="relative bg-white">
          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-full bg-slate-200/70 text-slate-600 hover:bg-slate-200"
            aria-label="Cerrar"
          >
            <X size={22} />
          </button>

          <div className="px-10 pt-10 pb-8">
            {/* TITLE */}
            <h2 className="text-3xl font-extrabold text-slate-800">
              Evalúa tu escenario{" "}
              <span className="font-medium text-slate-500">en pocos pasos</span>
            </h2>

            {/* STEP + PROGRESS */}
            <div className="mt-4 flex items-center gap-4">
              <span className="text-sm font-semibold text-slate-500">
                Paso 3 de 3
              </span>

              <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-full rounded-full bg-blue-600" />
              </div>
            </div>

            {/* MAIN CARD */}
            <div className="mt-6 grid grid-cols-1 gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:grid-cols-[1fr_260px]">
              {/* LEFT CONTENT */}
              <div>
                <p className="text-[17px] leading-relaxed text-slate-700">
                  Proporciona <span className="font-extrabold">detalles adicionales</span>{" "}
                  para personalizar la propuesta a las necesidades de tu negocio:
                </p>

                <div className="mt-5 space-y-4">
                  <Field label="Número de empleados de tu empresa">
                    <Select
                      value={numEmpleados}
                      onChange={setNumEmpleados}
                      placeholder="Selecciona..."
                      options={opcionesEmpleados}
                    />
                  </Field>

                  <Field label="Sector de la industria">
                    <Select
                      value={sector}
                      onChange={setSector}
                      placeholder="Selecciona..."
                      options={opcionesSector}
                    />
                  </Field>

                  <Field label="¿Ya utilizas herramientas de automatización?">
                    <Select
                      value={usaAutomatizacion}
                      onChange={setUsaAutomatizacion}
                      placeholder="Selecciona..."
                      options={opcionesAutomatizacion}
                    />
                  </Field>

                  <Field label="Mensaje o detalles adicionales">
                    <textarea
                      value={mensaje}
                      onChange={(e) => setMensaje(e.target.value)}
                      placeholder="Incluye cualquier comentario especial o requerimiento de tu negocio aquí..."
                      className="h-28 w-full resize-none rounded-xl border border-slate-200 bg-white p-4 text-slate-800 outline-none placeholder:text-slate-400"
                    />
                  </Field>
                </div>
              </div>

              {/* RIGHT HOLOGRAM PANEL */}
              <div className="relative overflow-hidden rounded-2xl border border-blue-200/60 bg-blue-900/10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.35),transparent_55%)]" />
                <img
                  src={hologramaImg}
                  alt="Holograma"
                  className="absolute inset-0 h-full w-full object-cover opacity-95"
                  draggable="false"
                />
                <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.18),transparent_55%)]" />
              </div>
            </div>

            {/* ACTIONS */}
            <div className="mt-6 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => onBack?.()}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-8 py-3 font-semibold text-slate-700 hover:bg-slate-200"
              >
                <ArrowLeft size={18} />
                Regresar
              </button>

              <button
                type="button"
                onClick={handleSubmit}
                className="flex min-w-[220px] items-center justify-center gap-2 rounded-xl bg-blue-600 px-10 py-3 font-bold text-white shadow-md hover:bg-blue-700"
              >
                Enviar <ArrowRight size={18} />
              </button>
            </div>

            {/* FOOTER */}
            <div className="mt-5 flex items-center justify-center gap-6 text-sm font-semibold text-slate-500">
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

function Field({ label, children }) {
  return (
    <div>
      <p className="mb-2 font-semibold text-slate-700">{label}</p>
      {children}
    </div>
  );
}

function Select({ value, onChange, placeholder, options }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 pr-10 font-semibold text-slate-700 outline-none hover:bg-slate-50"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((op) => (
          <option key={op} value={op}>
            {op}
          </option>
        ))}
      </select>

      <ChevronDown
        size={18}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
      />
    </div>
  );
}

export default EvaluarModal3;

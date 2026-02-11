import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  X,
  User,
  Mail,
  Building2,
  BriefcaseBusiness,
  Clock,
  Lock,
  ArrowRight,
} from "lucide-react";

const EvaluarModal = ({ open, setOpen, onNext }) => {
  // Cambia rutas si tus assets tienen otro nombre
  const bannerImg = "/assets/evaluar-banner.png";
  const hologramaImg = "/assets/holograma.png";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    // si ya tienes el 2do modal, puedes dispararlo aquí:
    // onNext?.(payload);
    // setOpen(false);

    console.log("Paso 1 payload:", payload);
    onNext?.(payload);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-0 w-[820px] max-w-[92vw] overflow-hidden rounded-2xl border border-slate-200 shadow-2xl">
        {/* WRAP */}
        <div className="relative bg-white">
          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-full bg-slate-200/70 text-slate-600 hover:bg-slate-200"
            aria-label="Cerrar"
          >
            <X size={22} />
          </button>

          {/* HEADER */}
          <div className="px-10 pt-10">
            <h2 className="text-3xl font-extrabold text-slate-800">
              Evalúa tu escenario{" "}
              <span className="font-medium text-slate-500">en pocos pasos</span>
            </h2>

            {/* STEP + PROGRESS */}
            <div className="mt-4 flex items-center gap-4">
              <span className="text-sm font-semibold text-slate-500">
                Paso 1 de 3
              </span>

              <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200">
                {/* Ajusta el width para el progreso */}
                <div className="h-full w-1/3 rounded-full bg-blue-600" />
              </div>
            </div>

            {/* BANNER */}
            <div className="mt-5 relative h-[220px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              {/* LEFT (banner image) */}
              <div className="absolute inset-y-3 left-3 right-[210px] overflow-hidden rounded-xl border border-slate-200 bg-white">
                <img
                  src={bannerImg}
                  alt="Banner"
                  className="h-full w-full object-cover"
                  draggable="false"
                />
              </div>

              {/* RIGHT (hologram panel) */}
              <div className="absolute inset-y-3 right-3 w-[190px] overflow-hidden rounded-2xl border border-blue-200/60 bg-blue-900/10">
                {/* glow */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.35),transparent_55%)]" />

                {/* hologram image */}
                <img
                  src={hologramaImg}
                  alt="Holograma"
                  className="absolute inset-0 h-full w-full object-cover opacity-95"
                  draggable="false"
                />

                {/* OPTIONAL: light noise overlay (más “holograma”) */}
                <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.18),transparent_55%)]" />
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-6 text-[17px] leading-relaxed text-slate-600">
              <span className="font-bold text-slate-800">Cuéntanos</span> sobre
              tu negocio para{" "}
              <span className="font-bold text-slate-800">
                identificar oportunidades reales
              </span>{" "}
              <br />
              de automatización e inteligencia artificial.
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="mt-5 space-y-3 pb-8">
              <InputRow icon={<User size={18} />} name="nombre" placeholder="Nombre" />
              <InputRow icon={<Mail size={18} />} name="email" placeholder="Email" type="email" />
              <InputRow
                icon={<Building2 size={18} />}
                name="empresa"
                placeholder="Nombre de la empresa"
              />
              <InputRow
                icon={<BriefcaseBusiness size={18} />}
                name="cargo"
                placeholder="Cargo / Rol"
              />

              {/* ACTIONS */}
              <div className="mt-5 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-slate-200 bg-slate-100 px-8 py-3 font-semibold text-slate-700 hover:bg-slate-200"
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  className="flex min-w-[220px] items-center justify-center gap-2 rounded-xl bg-blue-600 px-10 py-3 font-bold text-white shadow-md hover:bg-blue-700"
                >
                  Siguiente <ArrowRight size={18} />
                </button>
              </div>

              {/* FOOTER HINTS */}
              <div className="mt-5 flex items-center justify-center gap-6 text-sm font-semibold text-slate-500">
                <span className="flex items-center gap-2">
                  <Clock size={16} /> Toma menos de 3 minutos
                </span>
                <span className="flex items-center gap-2">
                  <Lock size={16} /> Información confidencial.
                </span>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

function InputRow({ icon, name, placeholder, type = "text" }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3">
      <div className="text-slate-500">{icon}</div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent text-slate-800 outline-none placeholder:text-slate-400"
      />
    </div>
  );
}

export default EvaluarModal;

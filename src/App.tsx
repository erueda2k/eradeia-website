import { Bell, Building2, FileSpreadsheet, LayoutDashboard, LogOut, Search } from "lucide-react";
import { Button } from "./components/ui/button";

const kpis = [
  { label: "Total Cartera", value: "$12.4B", trend: "+2.1% vs ayer" },
  { label: "Cartera Vencida", value: "$3.1B", trend: "+0.8%" },
  { label: "Índice de Morosidad", value: "25.1%", trend: "-0.4pp" },
  { label: "Pagos Recibidos Hoy", value: "$482M", trend: "al 10:45" }
];

const filters = [
  "Categoría de cartera",
  "Estado",
  "Ciudad",
  "Clientes preferenciales",
  "Top 10 cartera vencida"
];

const rows = [
  {
    nit: "900123456",
    razonSocial: "Distribuidora Andina",
    salud: "Al día",
    aging: ["$1.2B", "$420M", "$185M", "$62M", "$18M"],
    vencida: "$685M",
    total: "$1.9B",
    eventos: 2
  },
  {
    nit: "901987654",
    razonSocial: "Comercial Caribe",
    salud: "Seguimiento",
    aging: ["$820M", "$390M", "$210M", "$95M", "$64M"],
    vencida: "$759M",
    total: "$1.6B",
    eventos: 1
  },
  {
    nit: "830456789",
    razonSocial: "Bebidas Capital",
    salud: "Crítico",
    aging: ["$420M", "$310M", "$220M", "$190M", "$160M"],
    vencida: "$880M",
    total: "$1.3B",
    eventos: 3
  }
];

const healthStyles: Record<string, string> = {
  "Al día": "bg-emerald-100 text-emerald-700",
  Seguimiento: "bg-amber-100 text-amber-700",
  Crítico: "bg-rose-100 text-rose-700"
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="flex min-h-screen">
        <aside className="hidden w-64 flex-col border-r border-slate-800 bg-slate-950 p-6 lg:flex">
          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 text-lg font-semibold">CC</div>
            <div>
              <p className="text-sm text-slate-400">Proyecto Cyres</p>
              <p className="text-lg font-semibold">Cobranzas</p>
            </div>
          </div>
          <nav className="space-y-2 text-sm">
            <button className="flex w-full items-center gap-3 rounded-lg bg-slate-900 px-3 py-2 text-white">
              <LayoutDashboard className="h-4 w-4" /> Cartera
            </button>
            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-slate-400 hover:bg-slate-900 hover:text-white">
              <FileSpreadsheet className="h-4 w-4" /> Ingresos
            </button>
            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-slate-400 hover:bg-slate-900 hover:text-white">
              <Building2 className="h-4 w-4" /> Admin
            </button>
          </nav>
          <div className="mt-auto rounded-xl border border-slate-800 bg-slate-900 p-4 text-xs text-slate-300">
            Última actualización de datos
            <div className="mt-2 text-sm font-semibold text-white">Hoy 10:45 AM</div>
          </div>
        </aside>

        <main className="flex-1 bg-slate-950">
          <header className="flex flex-col gap-4 border-b border-slate-800 px-6 py-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm text-slate-400">Bienvenido,</p>
              <h1 className="text-2xl font-semibold text-white">Dashboard de Cartera</h1>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-300">
                <Search className="h-4 w-4" />
                <input
                  className="w-56 bg-transparent text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none"
                  placeholder="Buscar NIT o Razón Social"
                />
              </div>
              <button className="relative rounded-xl border border-slate-800 bg-slate-900 p-2 text-slate-300 hover:text-white">
                <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
                <Bell className="h-5 w-5" />
              </button>
              <Button variant="outline" className="border-slate-700 bg-slate-900 text-slate-100">
                <LogOut className="mr-2 h-4 w-4" /> Cerrar sesión
              </Button>
            </div>
          </header>

          <section className="space-y-6 px-6 py-8">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {kpis.map((kpi) => (
                <div key={kpi.label} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                  <p className="text-sm text-slate-400">{kpi.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{kpi.value}</p>
                  <p className="mt-3 text-xs text-emerald-400">{kpi.trend}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.2fr_2fr]">
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                <h2 className="text-lg font-semibold text-white">Filtros inteligentes</h2>
                <div className="mt-4 space-y-3">
                  {filters.map((filter) => (
                    <div key={filter} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-300">
                      <span>{filter}</span>
                      <span className="text-xs text-slate-500">Seleccionar</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-lg font-semibold text-white">Detalle de cartera</h2>
                  <Button className="bg-red-600 text-white hover:bg-red-500">Exportar CSV</Button>
                </div>
                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="text-left text-xs uppercase text-slate-500">
                        <th className="pb-3 pr-4">NIT / Razón Social</th>
                        <th className="pb-3 pr-4">Estado</th>
                        <th className="pb-3 pr-4">Aging</th>
                        <th className="pb-3 pr-4">Cartera vencida</th>
                        <th className="pb-3 pr-4">Cartera total</th>
                        <th className="pb-3">Eventos</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {rows.map((row) => (
                        <tr key={row.nit} className="text-slate-200">
                          <td className="py-4 pr-4">
                            <p className="font-medium text-white">{row.nit}</p>
                            <p className="text-xs text-slate-400">{row.razonSocial}</p>
                          </td>
                          <td className="py-4 pr-4">
                            <span className={`rounded-full px-3 py-1 text-xs font-medium ${healthStyles[row.salud]}`}>{row.salud}</span>
                          </td>
                          <td className="py-4 pr-4">
                            <div className="flex flex-wrap gap-2 text-xs">
                              {row.aging.map((value, index) => (
                                <span
                                  key={`${row.nit}-${index}`}
                                  className="rounded-lg bg-rose-500/10 px-2 py-1 text-rose-200"
                                >
                                  {value}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="py-4 pr-4 text-rose-300">{row.vencida}</td>
                          <td className="py-4 pr-4 text-white">{row.total}</td>
                          <td className="py-4">
                            <div className="flex items-center gap-2 text-xs text-slate-300">
                              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-sm">
                                {row.eventos}
                              </span>
                              eventos
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export function ModalShell({ children }) {
  return (
    <>
      <div className="bg-slate-400/50 h-screen w-screen absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 backdrop-blur-sm"></div>
      <div className="bg-slate-900 text-white absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 p-4 min-w-300">
        {children}
      </div>
    </>
  )
}

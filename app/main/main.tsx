interface MainProps {
  children: React.ReactNode
}

function Main({ children }: MainProps) {
  return <div className=' w-full min-h-[100vh] flex flex-col gap-20 p-12 pt-6'>{children}</div>
}

export default Main

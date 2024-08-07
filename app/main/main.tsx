interface MainProps {
 children: React.ReactNode
}

function Main({ children }: MainProps) {
 return <div className=' w-full min-h-[var(--view-height)] flex flex-col p-12 pt-6 pb-0'>{children}</div>
}

export default Main

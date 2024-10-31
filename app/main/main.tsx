interface MainProps {
 children: React.ReactNode
}

function Main({ children }: MainProps) {
 return <div className=' w-full min-h-[var(--view-height)] flex flex-col p-8 pt-20 '>{children}</div>
}

export default Main

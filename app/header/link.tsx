import { cn } from '@/lib/utils'

interface Link {
  name: string
  url: string
}
interface MenuLinkProps {
  link: Link
  index: number
}

function MenuLink({ link, index }: MenuLinkProps) {
  return (
    <div className=' menu-animation opacity-0 bg-[#2b2c2c]' style={{ '--i': index } as React.CSSProperties}>
      <a
        rel='noreferrer noopener'
        id={index.toString()}
        target='_blank'
        href={link.url}
        key={link.name}
        className={cn(`block text-white text-start py-1 px-2 hover:bg-[#4A4A4A] m-auto`)}>
        {link.name}
      </a>
      <div className='h-[1px] bg-slate-300 opacity-50 m-auto' />
    </div>
  )
}

export default MenuLink

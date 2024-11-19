import { cn } from '@/../lib/utils'

interface Link {
 name: string
 url: string
}
interface MenuLinkProps {
 link: Link
 index: number
 len: number
}

function MenuLink({ len, link, index }: MenuLinkProps) {
 return (
  <div
   className={cn(
    'border-x border-slate-300 relative menu-animation opacity-0 bg-[#2b2c2c]',
    index === len - 1 ? 'border-b rounded-b-sm' : '',
    index === 0 ? 'rounded-t-sm' : ''
   )}
   style={{ '--i': index, zIndex: 10000 } as React.CSSProperties}>
   <a
    id={index.toString()}
    href={link.url}
    key={link.name}
    className={cn(`block text-white text-start py-1 px-2 hover:bg-[#4A4A4A] transition-all m-auto`)}>
    {link.name}
   </a>
   <div className={cn('h-[1px] bg-slate-300 opacity-50 m-auto', index === len - 1 ? 'hidden' : '')} />
  </div>
 )
}

export default MenuLink

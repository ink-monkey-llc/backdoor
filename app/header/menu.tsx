import MenuLink from './link'

interface MenuProps {
 links: { name: string; url: string }[] | undefined
}

const Menu = ({ links }: MenuProps) => {
 return (
  <div className='border-t rounded-sm border-slate-300 w-full absolute my-2 bg-transparent z-50'>
   {links &&
    links.map((link, index) => (
     <MenuLink
      len={links.length}
      link={link}
      index={index}
      key={link.name}
     />
    ))}
  </div>
 )
}

export default Menu

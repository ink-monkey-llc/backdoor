import { cn } from '@/../lib/utils'
import MenuLink from './link'

interface MenuProps {
  links: { name: string; url: string }[] | undefined
}

const Menu = ({ links }: MenuProps) => {
  return (
    <div className='w-full absolute py-4 bg-transparent z-20'>
      {links && links.map((link, index) => <MenuLink link={link} index={index} key={link.name} />)}
    </div>
  )
}

export default Menu

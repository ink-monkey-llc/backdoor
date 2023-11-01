interface MenuProps {
    links: { name: string; url: string; }[] | undefined
    }

const Menu = ({ links}: MenuProps) => {
  return (
    <div className='w-full absolute bg-[#2b2c2c]'>
      {links &&
        links.map((link) => (
          <a href={link.url} key={link.name} className='block text-white text-center py-2 hover:bg-[#8e4f0a] hover:text-black'>
            {link.name}
          </a>
        ))}
    </div>
  )
}

export default Menu

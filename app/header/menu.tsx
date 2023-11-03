import { cn } from '@/lib/utils'

interface MenuProps {
  links: { name: string; url: string }[] | undefined
}

const Menu = ({ links }: MenuProps) => {
  return (
    <div className='w-full absolute py-4 bg-[#2b2c2c] z-20'>
      {/* <div className='h-[1px] bg-white w-full' /> */}
      {links &&
        links.map((link, index) => (
          <>
            <a
              rel='noreferrer noopener'
              id={index.toString()}
              target='_blank'
              href={link.url}
              key={link.name}
              className={`block text-white text-start py-1 px-4 hover:bg-[#4A4A4A] origin-center animate-`}>
              {link.name}
            </a>
          </>
        ))}
    </div>
  )
}

export default Menu

import CalMain from './cal-main'

async function Cal({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
 return <CalMain searchParams={searchParams} />
}
export default Cal

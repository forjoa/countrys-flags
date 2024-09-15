export default function Filters() {
  const CONTINENTS = ['África', 'America', 'Asia', 'Europa', 'Oceania']
  return (
    <nav className='w-[800px] max-w-4xl flex justify-between items-center m-auto bg-skin-fill text-skin-base transition-colors duration-200'>
      <input
        type='text'
        placeholder='Search for a country...'
        className='border border-zinc-400 rounded-lg py-2 px-6'
      />
      <select className='border border-zinc-400 rounded-lg p-2'>
        <option>Filter by Region</option>
        {CONTINENTS.map((continent, index) => (
          <option key={index} value={continent}>
            {continent}
          </option>
        ))}
      </select>
    </nav>
  )
}

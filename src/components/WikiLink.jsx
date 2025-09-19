import wikiArrow from '../assets/wikiArrow.png'

const WikiLink = () => {
  return (
     <div className='w-fit mx-auto flex gap-1 items-center mb-7 md:m-0'>
        <p className='font-regular text-xs/[25px] text-white opacity-50'>spurce: <span className='ml-1 underline font-bold text-xs/[25px] text-white '>Wikipedia</span></p>
        <img className='w-3 h-3' src={wikiArrow}/>
    </div>
  )
}

export default WikiLink
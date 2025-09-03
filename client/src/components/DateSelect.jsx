import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import BlurCircle from "./BlurCircle"
import { useState } from "react"
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom"

const DateSelect = ({dateTime, id}) => {

  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate()

  const onBookHandler = () => {
    if(!selectedDate) {
      return toast('Please select a date',{
        style:{
          padding: '16px 24px',
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#fff',
          background: '#f87171', // 红色背景
          border: '2px solid #b91c1c',
          borderRadius: '12px',
        },
        duration: 4000,
      })
    }
    navigate(`/movies/${id}/${selectedDate}`)
    scrollTo(0,0)

  }
    
  return (
    <div id="dateSelect" className="pt-30">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 
      relative p-8 bg-primary/10 border border-primary/20 rounded-lg">
        <BlurCircle top="100px" right="0px"/>
        <BlurCircle />
        <div>
            {/* choose date */}
            <p className="text-lg font-semibold">Choose Date</p>
            <div  className="flex items-center gap-6 text-sm mt-5">
                <ChevronLeftIcon  width={28}/>
                <span className="grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4">
                    {Object.keys(dateTime).map((date)=> (
                        <button key={date} 
                        onClick={()=>setSelectedDate(date)}
                        className={`flex flex-col items-center justify-center h-14 w-14 aspect-square rounded cursor-pointer duration-300
                        ${date === selectedDate ?'bg-primary text-white':'border border-primary/70'}`}>
                            <span>{new Date(date).getDate()}</span>
                            <span>{new Date(date).toLocaleDateString("en-US",{month: "short"})}</span>
                        </button>
                    ))}
                </span>
                <ChevronRightIcon width={28}/>
            </div>
        </div>
        <button onClick={onBookHandler} className="bg-primary text-white font-medium px-8 py-2 rounded mt-6
        hover:bg-primary/90 transition-all active:scale-95 cursor-pointer">
          Book Now
        </button>
      </div>
    </div>
  )
}

export default DateSelect

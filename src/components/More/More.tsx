import './More.css'
import Question from '../../assets/question-mark.png'
import Meeting from '../../assets/meeting 1.png'
import Scehdule from '../../assets/schedule.png'

const More = () => {
  return (
    <div className='more'>
        <div className='more-options'>
            <img src={Question} alt="help" />
        </div>
        <div className='more-options'>
            <img src={Meeting} alt="meeting" />
        </div>
        <div className='more-options'>
            <img src={Scehdule} alt="schedule" />
        </div>

    </div>
  )
}

export default More
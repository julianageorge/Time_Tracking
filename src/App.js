import data from './data.json';
import { useEffect, useState } from 'react';
import jeremyImage  from './image/image-jeremy.png';
import exc from './image/icon-exercise.svg';
import work from'./image/icon-work.svg';
import play from'./image/icon-play.svg';
import selfCare from'./image/icon-self-care.svg';
import study from'./image/icon-study.svg';
import social from'./image/icon-social.svg';
import ellips from './image/icon-ellipsis.svg';
import './App.css';
function App(){

  const [tasks,setTask]=useState([]);
  const [timer,setTimer]=useState('daily');

    useEffect(()=>{
    getTaskhandler(timer);
  },[timer]
);
  const getTaskhandler=(time)=>{
    setTask(data.map((task)=>({...task,
      current:task.timeframes[time].current,
      previous:task.timeframes[time].previous,
    })));

  };
 
const timeChangehandler=(time)=>{
  setTimer(time);
};
const getLastTime = () => {
  if (timer === 'daily')
    {
      return 'Yesterday';
    }
  if (timer === 'weekly') {
    return 'Last Week';
  }
  if (timer === 'monthly') {
    return 'Last Month'
  };
};
const geticon=(title)=>{
  if(title==='Work'){
    return {icon:work,color:'hsl(15, 100%, 70%)'};
  }
  else if(title==='Play'){
    return {icon:play,color:' hsl(195, 74%, 62%)'};
  }
  
  else if(title==='Study'){
    return {icon:study,color:' hsl(348, 100%, 68%)'};
  }
  else if(title==='Exercise'){
    return {icon:exc,color: 'hsl(145, 58%, 55%)'};
  }
  else if(title==='Social'){
    return {icon:social,color:'hsl(264, 64%, 52%)'};
  }
  else{
    return {icon:selfCare,color: 'hsl(43, 84%, 65%)'};
  }

}
return(
  <div className='App'>
    <div className='header'>
      <div className='customer_info'>
        <img src={jeremyImage} alt="Jeremy" height={60}/>
      <div className='customer_name'>
        <p> Report for</p>
        <h2>Jeremy<br/> Robson</h2></div>
      </div>
      <div className='time_selector'>
        <button onClick={()=>{timeChangehandler('daily')}} className={timer === 'daily' ? 'selected' : ''}>Daily</button>
        <button onClick={()=>{timeChangehandler('weekly')}}className={timer === 'weekly' ? 'selected' : ''}>Weekly</button>
        <button onClick={()=>{timeChangehandler('monthly')}}className={timer === 'monthly' ? 'selected' : ''}> Monthly</button>
      </div>
    </div>
    <div className='Tasks'>
      {
        tasks.map((task,index) => { 
          const { icon, color } = geticon(task.title);
          return(
          <div key={index} className="task">
            <div className='icon' style={{backgroundColor:color}}>
              {<img src={icon} alt={task.title}/>}
            </div>
            <div className='detailes'>
              <div className='details_header'>
                <h5>{task.title}</h5>
                <img src={ellips} alt="ellips"/></div>
                <div className='details_buttom'>
                <h1>{task.current}hrs</h1>
                <p>{getLastTime()}-{task.previous}hrs</p>
                </div>
            </div>
          
          </div>);

})
      }
    </div>
   
  </div>
)

}
export default App;

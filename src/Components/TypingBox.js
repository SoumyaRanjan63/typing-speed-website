import React,{useState,useEffect, useRef,useCallback} from 'react';


const textbox=[
   " blind they lose wish giving back spread pretty church evening grandmother join wolf length paint upward here cup meal anywhere teacher managed through stock kids diameter little change example report neck later available applied chicken fewer yesterday dull forgotten watch circus needs fruit reader before atmosphere labor snake scared progress."
]
const words=textbox[0].split('');
const TypingBox = (props) => {
    const { setTimer, setCounting ,timer} = props;
    const [currKey,setCurrKey]=useState(null);
    const [currChar,setCurrChar]=useState('');
    const [currCharIndex,setCurrCharIndex]=useState(0);
    const [correct,setCorrect]=useState(0)
    const [inCorrect,setInCorrect]=useState(0)
    const [cursorIndex, setCursorIndex] = useState(0);
    const textInput=useRef(null);

     
    // const handleKeyDown=(char)=>{
    // //   if(currCharIndex===currInput.trim()){
    // //     setCorrect(correct+1);
    // //     if(currCharIndex!==textbox.length){
    // //        setCurrCharIndex(currCharIndex+1);
    // //     }
    // //     if(timer===0){
    // //         setCurrCharIndex(0);
    // //         setCurrInput('');
    // //         setCounting(false);
    // //     }
    // //   }
    // }
    // const handleInput=(e)=>{
    //     setCurrChar(e.target.value);
    //     console.log(currChar);
    //     // setCounting(true);
    // } 
    

    // const handleKeyDown = useCallback((event) => {

    //   console.log(`Key pressed: ${event.key}`);
    // }, []);

  const handleCursor = useCallback((e) => {
    if (e.key === 'ArrowRight' && cursorIndex < words.length) {
      setCursorIndex(cursorIndex + 1);
    } else if (e.key === 'ArrowLeft' && cursorIndex > 0) {
      setCursorIndex(cursorIndex - 1);
    }
  }, [cursorIndex]);
    
      useEffect(() => {
        if (textInput.current) {
          textInput.current.focus();
        }
      }, []);


    return (
        <div>
            
            <div className='text-box' tabIndex="0"  onKeyDown={handleCursor}>
           
            <span className="pointer-paragraph" style={{ left: `${cursorIndex * 8}px` }}></span>
            {
               
                words.map((char, i)=>(
                
                <span key={i}>{char}</span>
            ))
            
            }
            </div>
       </div>
    );

}

export default TypingBox;

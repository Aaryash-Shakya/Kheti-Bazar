import {useState,useEffect} from 'react'

function useWindowResize(){
    const [windowSize,setWindowSize]=useState({
        height: undefined,
        width: undefined,
    })
    useEffect(()=>{
        function handleResize(){
            setWindowSize({
                height: window.innerHeight,
                width: window.innerWidth,
            })
        }
        window.addEventListener('resize',handleResize)
        handleResize()
        return () => window.removeEventListener('resize',handleResize)
    },[])
    return windowSize
}
export default useWindowResize

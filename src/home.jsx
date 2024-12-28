import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { Driver } from "./driver"
import { driverdata, pessangerdata } from "./userslice"

export function Home(){

    let privacy = useSelector(state =>state.second.type)
    console.log(privacy);
    
    let navi = useNavigate()
    let dispatch = useDispatch()
    function driver(){
        dispatch(driverdata())
        navi('/driver')
    }
    function pessanger(){
        dispatch(pessangerdata())
        navi('/passnger')
    }
    return<>
    <button onClick={driver}>Driver</button>
    <button  onClick={pessanger}>passanger</button>
    </>
}
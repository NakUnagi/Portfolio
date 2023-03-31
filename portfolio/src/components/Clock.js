import React, {useEffect, useState} from "react"


const Clock = ({time, PM_AM}) => {
    
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const zeroH = 0
    const zeroM = 0
    const zeroS = 0
    useEffect(() => {
        setHours(parseInt(time[0]))
        setMinutes(parseInt(time[1]))
        setSeconds(parseInt(time[2]))

        let timer = setInterval(() => countSeconds(), 1000)
        console.log(1)

        return () => {
            clearInterval(timer)
        }
    }, [time])
    useEffect(() => {
        if(seconds === 60) {
            setSeconds(0)
            setMinutes(prev => prev +=1)
        }
    }, [seconds])
    useEffect(() => {
        if(seconds === 13) {
            setHours(1)
        }
    }, [hours])
    useEffect(() => {
        if(minutes === 60) {
            setMinutes(0)
            setHours(prev => prev +=1)
        }
    }, [minutes])
    const countSeconds = () => {
        setSeconds(prev => prev += 1)
        
    }
    
    const clockZeroHours = () => {
        if(hours <= 9) {
            return zeroH
        }
    }

    const clockZeroMinutes = () => {
        if(minutes <= 9) {
            return zeroM
        }
    }

    const clockZeroSeconds = () => {
        if(seconds <= 9) {
            return zeroS
        }
    }
    return (
        <em className="font-600">{clockZeroHours()}{hours}:{clockZeroMinutes()}{minutes}:{clockZeroSeconds()}{seconds} {PM_AM}</em>
    )
}

export default Clock
import moment from 'moment'

const salutation = (hour?: number) => {
    moment.locale()
    
    const time = hour || moment().hour()
    
    const timeOfDay = (t: number): string => {

        let timeString = 'night'

        // If it's between 23:00 and 06:00 then it's night time
        if (t > 22 || t < 5 || t === 0) timeString = 'night'
        // If it's between 06:00 and 09:00 then it's early morning
        if (t >= 5 && t < 10) timeString = 'early-morning'
        // If it's between 10:00 and 11:00 then it's mid morning
        if (t >= 10 && t < 12) timeString = 'mid--morning'
        // If it's between 12:00 and 18:00 then it's the afternoon
        if (t >= 12 && t < 18) timeString = 'afternoon'
        // If it's between 19L00 and 22:00 then it's the evening
        if (t >= 18 && t < 22) timeString = 'evening'

        return timeString
    }

    // Determine which segment of the day it is
    let segment = (t: number): string => {
        switch(timeOfDay(time)) {
            case 'early-morning':
            case 'mid-morning':
                return `Good morning!`
                break
            case 'afternoon':
            default:
                return `Good Afternoon!`
                break
            case 'evening':
                return `Good evening!`
                break
            case 'night':
                return `Hi, you're up late!`
                break
        }
    }

    // Determine an approximate light level
    let lightLevel = (t: number): string => {
        switch(timeOfDay(time)) {
            case 'early-morning':
                return 'sunrise'
                break
            case 'mid-morning':
            case 'afternon':
            default: 
                return 'daylight'
                break
            case 'evening':
                return 'sunset'
                break
            case 'night':
                return 'darkness'
                break
        }
    }

    return { 
        segment: segment(time),
        lightLevel: lightLevel(time)
    }
}

export default salutation;
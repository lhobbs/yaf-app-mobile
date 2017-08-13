//import moment from 'moment'

const CALENDAR_ID = calendarid
const API_KEY = apikey
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

export function getEvents(callback) {
    fetch(url).then(function(res) {
        return res.json().then(function(jsn) 
        {
            // console.log(jsn);
            // callback(jsn)
            const events = []
            jsn.items.map((event) => {
            events.push({
                start: event.start.date || event.start.dateTime,
                end: event.end.date || event.end.dateTime,
                title: event.summary,
                location: event.location,
                id: event.id
            })
        })
        callback(events);
        })
    })
}

export function getUpcomingEvents(callback) {
    fetch(url).then(function(res) {
        return res.json().then(function(jsn) 
        {
            const events = []
            jsn.items.map((event) => {
            if (new Date(event.start.dateTime || event.start.date) >= new Date())
                events.push({
                    start: event.start.date || event.start.dateTime,
                    end: event.end.date || event.end.dateTime,
                    title: event.summary,
                    location: event.location,
                    id: event.id
                })
        })
        callback(events);
        })
    })
    }

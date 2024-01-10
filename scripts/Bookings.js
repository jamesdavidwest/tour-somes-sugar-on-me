import { getBookings, getBands, getVenues } from "./database.js"


const venues = getVenues()
const bands = getBands()
const bookings = getBookings()

//function to find the venue of booking
const findVenue = (booking, venues) => {
    const venueIds = Array.isArray(booking.venueId) ? booking.venueId : [booking.venueId]
    for (const venue of venues) {
        if (venueIds.some(id => id.id === venue.id)) {
            return venue;
        }
    }
    throw new Error(`Venue with ID ${booking.venueId} not found.`)
}

// function to find the band of a booking
const findBand = (booking, bands) => {
    for (let i = 0; i < bands.length; i++) {
        if (bands[i].id === booking.bandId) {
            return bands[i];
        }
    }
    throw new Error(`Band with ID ${booking.bandId} not found.`)
};

export const Bookings = ()=> {
    let bookingsHTML ='<ul>'
    
    for (const booking of bookings) {
        const venue = findVenue(booking, venues);
        const band = findBand(booking, bands);

        bookingsHTML += `<li>${band.name} are playing at ${venue.name} on ${booking.date} at ${booking.venueId.time}.</li>`
    }

    bookingsHTML += '</ul>';

    return bookingsHTML
}
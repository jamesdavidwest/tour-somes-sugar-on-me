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

const formatDate = (dateStr) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' }
    const formattedDate = new Date(dateStr).toLocaleDateString('en-US', options)
    return formattedDate
}

export const Bookings = ()=> {
    let bookingsHTML ='<ul>'
    
    for (const booking of bookings) {
        const venue = findVenue(booking, venues);
        const band = findBand(booking, bands);
        const formattedDate = formatDate(booking.date)

        bookingsHTML += `<li data-type="booking"
        data-booking-id="${booking.id}">${band.name} are playing at ${venue.name} on ${formattedDate} at ${booking.venueId[0].time}pm.</li>`
    }

    bookingsHTML += '</ul>';

    return bookingsHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target;

        if (itemClicked.dataset.type === "booking") {
            const bookingId = parseInt(itemClicked.dataset.bookingId)
            const clickedBooking = bookings.find(booking => booking.id === bookingId)

            if (clickedBooking) {
                const band = findBand(clickedBooking, bands);

                const alertText = `${band.name}\n${band.genre}\nFormed in ${band.formedYear}\n${band.members} band members.`
                alert(alertText)
            } else {
                console.error('Booking with ID ${bookingId} not found.')
            }
        }
    }
)
import { getVenues, getBookings, getBands } from "./database.js";

const venues = getVenues()
const bookings = getBookings()
const bands = getBands()

const findVenue = (venueId) => {
    return venues.find(venue => venue.id === venueId)
}

const findBandsByVenue = (venueId) => {
    const bandsForVenue = []

    for (const booking of bookings) {
        if (Array.isArray(booking.venueId)) {
            for (const venue of booking.venueId) {
                if (venue.id === venueId) {
                    const band = bands.find(b => b.id === booking.bandId)

                    if (band && !bandsForVenue.includes(band)) {
                        bandsForVenue.push(band)
                    }
                }
            }
        } else {
            if (booking.venueId.id === venueId) {
                const band = bands.find(b => b.id === booking.bandId)

                if (band && !bandsForVenue.includes(band)) {
                    bandsForVenue.push(band)
                }
            }
        }
    }
    return bandsForVenue
}

export const Venues = () => {
    let venuesHTML = '<ul>'
    
    for (const venue of venues) {
        venuesHTML += `
        <li data-type="venue"
        data-venue-id="${venue.id}"
        >${venue.name}</li>
        `
    }

    venuesHTML += '</ul>'

    return venuesHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickedVenue = clickEvent.target
        
        if (clickedVenue.dataset.type === "venue") {
            const venueId = parseInt(clickedVenue.dataset.venueId)
            const venue = findVenue(venueId)
            const bandsForVenue = findBandsByVenue(venueId)

            let alertText = `Bands playing at ${venue.name}:\n\n`

            for (const band of bandsForVenue) {
                alertText += `${band.name}\n`
            }
            alert(alertText.trim())
        }
    }
)
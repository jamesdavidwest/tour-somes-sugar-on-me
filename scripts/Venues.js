import { getVenues } from "./database.js";

const venues = getVenues()

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
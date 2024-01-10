import { getBands, getBookings, getVenues } from "./database.js";

const bands = getBands();
const venues = getVenues();
const bookings = getBookings();

export const Bands = () => {
	let bandsHTML = "<ul>";

	for (const band of bands) {
		bandsHTML += `
        <li data-type="band"
        data-band-id="${band.id}"
        >${band.name}</li>
        `;
	}

	bandsHTML += "</ul>";

	document.addEventListener("click", (clickEvent) => {
		if (clickEvent.target.dataset.type === "band") {
			const bandId = parseInt(clickEvent.target.dataset.bandId);
			const venuesForBand = bookings
				.filter((booking) => booking.bandId === bandId)
				.map((booking) => {
					return venues.find(
						(venue) => venue.id === booking.venueId[0].id
					);
				});

			const venueNames = venuesForBand
				.map((venue) => venue.name)
				.join(", ");
			alert(
				`Venues for ${clickEvent.target.innerText} are playing at the following venue(s): \n\n${venueNames}`
			);
		}
	});

	return bandsHTML;
};

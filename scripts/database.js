//Venue, Band, and Booking Data with functions that return copies of each array.

const database = {
	venues: [
		{
			id: 1,
			name: "The Cellar Moss",
			address: "123 Elm St",
			squareFootage: 2000,
			maxOccupancy: 150,
		},
		{
			id: 2,
			name: "The Electric Lounge",
			address: "456 Oak Ave",
			squareFootage: 1800,
			maxOccupancy: 130,
		},
		{
			id: 3,
			name: "Moonlight Tavern",
			address: "789 Pine Rd",
			squareFootage: 2200,
			maxOccupancy: 160,
		},
		{
			id: 4,
			name: "Sunset Club",
			address: "101 Lakeview Dr",
			squareFootage: 1900,
			maxOccupancy: 140,
		},
		{
			id: 5,
			name: "Rock Haven",
			address: "202 Stone St",
			squareFootage: 2100,
			maxOccupancy: 155,
		},
		{
			id: 6,
			name: "Jazz Lounge",
			address: "303 Melody Ln",
			squareFootage: 1950,
			maxOccupancy: 135,
		},
		{
			id: 7,
			name: "Blues Bar",
			address: "404 Rhythm Rd",
			squareFootage: 2050,
			maxOccupancy: 145,
		},
		{
			id: 8,
			name: "Fusion Place",
			address: "505 Beat Blvd",
			squareFootage: 2150,
			maxOccupancy: 160,
		},
		{
			id: 9,
			name: "Country Inn",
			address: "606 Twang St",
			squareFootage: 2250,
			maxOccupancy: 165,
		},
		{
			id: 10,
			name: "Pop Arena",
			address: "707 Harmony Dr",
			squareFootage: 2350,
			maxOccupancy: 170,
		},
	],
	bands: [
		{
			id: 1,
			name: "Rocket Pumpkins",
			members: 4,
			genre: "Rock",
			formedYear: 2019,
		},
		{
			id: 2,
			name: "Neon Shadows",
			members: 3,
			genre: "Electronic",
			formedYear: 2018,
		},
		{
			id: 3,
			name: "Metallic Storm",
			members: 5,
			genre: "Metal",
			formedYear: 2020,
		},
		{
			id: 4,
			name: "Acoustic Waves",
			members: 2,
			genre: "Acoustic",
			formedYear: 2017,
		},
		{
			id: 5,
			name: "Rhythmic Beats",
			members: 3,
			genre: "Hip Hop",
			formedYear: 2016,
		},
		{
			id: 6,
			name: "Soulful Harmony",
			members: 4,
			genre: "Soul",
			formedYear: 2015,
		},
		{
			id: 7,
			name: "Classical Strings",
			members: 6,
			genre: "Classical",
			formedYear: 2014,
		},
		{
			id: 8,
			name: "Folk Fusion",
			members: 3,
			genre: "Folk",
			formedYear: 2013,
		},
		{
			id: 9,
			name: "Indie Vibes",
			members: 4,
			genre: "Indie",
			formedYear: 2012,
		},
		{
			id: 10,
			name: "Punk Pulse",
			members: 3,
			genre: "Punk",
			formedYear: 2011,
		},
	],
	bookings: [
		{
			id: 1,
			bandId: 7,
			venueId: [
				{ id: 3, time: 8 },
				{ id: 11, time: 9 },
			],
			date: "2023-12-13",
		},
		{
			id: 2,
			bandId: 3,
			venueId: [{ id: 8, time: 10 }],
			date: "2023-12-14",
		},
		{
			id: 3,
			bandId: 9,
			venueId: [
				{ id: 1, time: 7 },
				{ id: 9, time: 8 },
			],
			date: "2023-12-15",
		},
		{
			id: 4,
			bandId: 1,
			venueId: [
				{ id: 10, time: 9 },
				{ id: 12, time: 10 },
			],
			date: "2023-12-16",
		},
		{
			id: 5,
			bandId: 6,
			venueId: [
				{ id: 4, time: 7 },
				{ id: 13, time: 8 },
			],
			date: "2023-12-16",
		},
		{
			id: 6,
			bandId: 5,
			venueId: [
				{ id: 2, time: 9 },
				{ id: 14, time: 10 },
			],
			date: "2023-12-15",
		},
		{
			id: 7,
			bandId: 4,
			venueId: [
				{ id: 7, time: 7 },
				{ id: 15, time: 8 },
			],
			date: "2023-12-13",
		},
		{
			id: 8,
			bandId: 8,
			venueId: [
				{ id: 6, time: 9 },
				{ id: 16, time: 10 },
			],
			date: "2023-12-17",
		},
		{
			id: 9,
			bandId: 2,
			venueId: [
				{ id: 9, time: 7 },
				{ id: 17, time: 8 },
			],
			date: "2023-12-15",
		},
		{
			id: 10,
			bandId: 10,
			venueId: [
				{ id: 5, time: 9 },
				{ id: 18, time: 10 },
			],
			date: "2023-12-18",
		},
	],
};
export const getVenues = () => {
	return database.venues.map((venue) => ({ ...venue }));
};

export const getBands = () => {
	return database.bands.map((band) => ({ ...band }));
};

export const getBookings = () => {
	return database.bookings.map((booking) => ({ ...booking }));
};

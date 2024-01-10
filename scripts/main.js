import { Bands } from "./Bands.js";
import { Venues } from "./Venues.js";
import { Bookings } from "./Bookings.js";

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Tour Some Sugar On Me</h1>
<article class="details">
    <section class="details__column">
        <h2>Bands</h2>
        ${Bands()}
    </section>
    <section class="details__column">
        <h2>Venues</h2>
        ${Venues()}
    </section>
</article>

<article class="bookings">
    <h2>Bookings</h2>
    ${Bookings()}
</article>
`

mainContainer.innerHTML = applicationHTML
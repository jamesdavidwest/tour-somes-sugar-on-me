import { getBands } from "./database.js"

const bands = getBands()

export const Bands = () => {
    let bandsHTML = '<ul>'
    
    for (const band of bands) {
        bandsHTML += `
        <li data-type="band"
        data-band-id="${band.id}"
        >${band.name}</li>
        `
    }
    
    bandsHTML += '</ul>'

    return bandsHTML
}
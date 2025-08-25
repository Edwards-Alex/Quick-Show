
const timeFormat = (mintes) => {
    const hours =  Math.floor(mintes / 60);
    const mintesRemainder = Math.floor(mintes % 60);
    return `${hours}h ${mintesRemainder}m`
}

export default timeFormat
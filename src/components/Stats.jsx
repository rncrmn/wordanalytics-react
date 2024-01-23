export default function Stats({
    stats: {
        numbersOfWords,
        numberOfCharacters,
        instagramCharactersLeft,
        facebookCharactersLeft,
    },
}) {
    return (
        <sidebar className="stats">
            <Stat number={numbersOfWords} label="Words" />
            <Stat number={numberOfCharacters} label="Characters" />
            <Stat number={instagramCharactersLeft} label="Instagram" />
            <Stat number={facebookCharactersLeft} label="Facebook" />
        </sidebar>
    )
}

function Stat({ number, label }) {
    return (
        <div className="stat">
            <span
                className={`stat__number ${
                    number < 0 && "stat__number--limit"
                }`}
            >
                {number}
            </span>
            <h2 className="second-heading">{label}</h2>
        </div>
    )
}

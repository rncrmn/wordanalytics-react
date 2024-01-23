import { useState } from "react"
import Stats from "./Stats"
import Textarea from "./TextArea"
import {
    FACEBOOK_MAX_CHARACTERS,
    INSTAGRAM_MAX_CHARACTERS,
} from "../lib/constants"

export default function Container() {
    const [text, setText] = useState("")

    const stats = {
        numbersOfWords: text.split(/\s/).filter((word) => word !== "").length,
        numberOfCharacters: text.length,
        instagramCharactersLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
        facebookCharactersLeft: FACEBOOK_MAX_CHARACTERS - text.length,
    }

    return (
        <main>
            <section className="container">
                <Textarea text={text} setText={setText} />
                <Stats stats={stats} />
            </section>
        </main>
    )
}

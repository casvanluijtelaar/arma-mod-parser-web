


export const parseMods = (html, allowedCharacters) => {
    const mods = Array.from(html.querySelectorAll("td[data-type='DisplayName']"));

    const escapedAllowedCharacters = allowedCharacters.split("").map(char => "\\" + char).join("")
    const allowedCharacterRegex = new RegExp(`[^a-zA-Z0-9${escapedAllowedCharacters}]+`);
    const optimizeSpacesRegex = /[ \t]+/;

    const parsedMods = mods.map(mod => mod.innerText.replace(allowedCharacterRegex, "").replace(optimizeSpacesRegex, " "));
    return parsedMods.map(mod => `@${mod};`).join("")
}
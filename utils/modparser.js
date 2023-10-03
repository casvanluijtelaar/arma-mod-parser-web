


export const parseMods = (html) => {
    const mods = Array.from(html.querySelectorAll("td[data-type='DisplayName']"));

    const allowedCharacterRegex = /[^a-zA-Z0-9_'\[\]\(\) -]+/g;
    const optimizeSpacesRegex = /[ \t]+/;

    const parsedMods = mods.map(mod => mod.innerText.replace(allowedCharacterRegex, "").replace(optimizeSpacesRegex, " "));
    return parsedMods.map(mod => `@${mod};`).join("")
}
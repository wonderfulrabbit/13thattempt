import { updateCharacterSelect, changeCharacter } from "./character.js";
import 'https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js';

export let characters = {};
export let classes = {};
export let abilities = {};
export let assets = {};

export async function loadData() {
    const response = await fetch("https://raw.githubusercontent.com/Muchizuki/DnD/refs/heads/master/characters.yaml");
    const classResponse = await fetch("https://raw.githubusercontent.com/Muchizuki/DnD/refs/heads/master/classes.yaml");
    const abilityResponse = await fetch("https://raw.githubusercontent.com/Muchizuki/DnD/refs/heads/master/abilities.yaml");
    const assetResponse = await fetch("https://raw.githubusercontent.com/Muchizuki/DnD/refs/heads/master/assets.yaml");

    const characterData = await response.text();
    const classData = await classResponse.text();
    const abilityData = await abilityResponse.text();
    const assetData = await assetResponse.text();

    characters = jsyaml.load(characterData);
    classes = jsyaml.load(classData);
    abilities =  jsyaml.load(abilityData);
    assets = jsyaml.load(assetData);

    const characterList = Object.keys(characters);
    updateCharacterSelect(characterList);
    changeCharacter(characterList[0]);
}
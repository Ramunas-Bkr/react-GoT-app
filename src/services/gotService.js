export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }
        return await res.json();
    }

    getAllBooks() {
        return this.getResource(`/books/`);
    }

    getBook(id) {
        return this.getResource(`/books/${id}/`);
    }

    async getAllCharacters() {
        const result = await this.getResource(`/characters?page=5&pageSize=10`);
        return result.map(this._transfomCharacter);
    }

    async getCharacter(id) {
        const character = await this.getResource(`/characters/${id}`);
        return this._transfomCharacter(character);
    }

    getAllHouses() {
        return this.getResource(`/houses/`);
    }

    getHouse(id) {
        return this.getResource(`/houses/${id}/`);
    }

    _transfomCharacter(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture,
            aliases: char.aliases
        }
    }

    _transfomHouse(house) {
        return {
            name: house.name,
            region: house.region,
            coatOfArms: house.coatOfArms,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transfomBooks(book) {
        return {
            name: book.name,
            authors: book.authors,
            numberOfPages: book.numberOfPages,
            released: book.released,
            publisher: book.publisher
        }
    }
}
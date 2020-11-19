export class Vampire5thND extends Die {
    constructor(termData) {
        termData.faces=10;
        super(termData);
    }

    /* -------------------------------------------- */

    /** @override */
    static DENOMINATION = "n";
}

export class Vampire5thHD extends Die {
    constructor(termData) {
        termData.faces=10;
        super(termData);
    }

    /* -------------------------------------------- */

    /** @override */
    static DENOMINATION = "h";
}
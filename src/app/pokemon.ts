import { Injectable } from "@angular/core";

export class Pokemon {

    id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

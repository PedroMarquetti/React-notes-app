export interface Dropdowntype {
    isEnabled:boolean,
    type:string
}

export interface List {
    title:string,
    content:string
}

export interface Modal {
    isOpen:boolean,
    mode:string,
    id?:number,
    title?:string,
    content?:string
}

export interface Note {
    title:string,
    content:string,
    id?:number
}
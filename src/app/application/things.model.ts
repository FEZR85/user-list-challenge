export class Things {
    name: string;
    value?: boolean = false;
    expand?: boolean = false;
    children?: Array<Things> = [];
}

export class Lists {
    name: string;
    items: Array<Things>;
}

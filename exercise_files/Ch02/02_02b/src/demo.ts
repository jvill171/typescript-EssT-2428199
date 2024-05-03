interface Contact extends Address{
    id: number;
    name: string;
    birthDate?: Date;
}

interface Address {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;
}

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson",
    birthDate: new Date("01/01/2000"),
    postalCode: 
}
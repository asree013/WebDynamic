export class Profile {
    image: any;
    firstName: string = '';
    lastName: string = '';
    idStudent: string = '';
    idCard: string = '';
    tellNumber: string = '';
    nameDad: string = '';
    nameMon: string = '';
    homeNumber: string = '';
    moo: string = '';
    soi: string = '';
    road: string = '';
    subDistrict: string = '';
    district: string = '';
    province: string = '';
    zipCode: string = '';
    role: number = 0;
}

export interface profileResponse {
    id:          string;
    image:       string;
    firstName:   string;
    lastName:    string;
    idStudent:   string;
    idCard:      string;
    tellNumber:  string;
    nameDad:     string;
    nameMon:     string;
    homeNumber:  string;
    moo:         string;
    soi:         string;
    road:        string;
    subDistrict: string;
    district:    string;
    province:    string;
    zipCode:     string;
    role:        string;
    faculy:      string;
    branch:      string;
    createdAt:   Date;
    updatedAt:   Date;
}


export interface Country {
    name: Name;
    ccn3: string;
    flag: string;
    population: number;
  }

  interface Name {
    common: string;
    official: string;
    nativeName: string;
  }
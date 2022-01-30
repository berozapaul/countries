interface Country {
  borders: [string];
  capital: [string];
  currencies: {[key: string]: {name: string}};
  flags: {png: string};
  languages: {[key: string]: string};
  name: {
    common: string,
    nativeName: {
      [key: string]: {
        official: string
      },
    }
  };
  population: string;
  region: string;
  subregion: string;
  tld: [string];
}



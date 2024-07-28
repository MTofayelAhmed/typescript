{
  // interface Generic

  interface Developer<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
  }

  interface Watch {
    brand: string;
    model: string;
    display: string;
  }

  const poorDeveloper: Developer<Watch> = {
    name: "Persian Bhai",
    computer: {
      brand: "DEll",
      model: "XXX",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "Casio",
      model: "YYY",
      display: "LED",
    },
  };

  type AppleWatch = {
    brand: string,
      model: string,
      display: string,
      sleepTrack: boolean,
      heartTrack: boolean
  }

  const SmartDeveloper: Developer<AppleWatch> = {
    name: " Bhai",
    computer: {
      brand: "Apple",
      model: "XXXXXX",
      releaseYear: 2022,
    },
    smartWatch: {
      brand: "Apple",
      model: "XXXYYY",
      display: "OLED",
      sleepTrack: true,
      heartTrack: true
    },
  };


















}

{
  // interface Generic

  interface Developer<T, W> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: W;
  }

  interface Watch {
    brand: string;
    model: string;
    display: string;
  }

  const poorDeveloper: Developer<Watch, null> = {
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

  interface Bike {
    model: string,
    engine: string
  }

  const SmartDeveloper: Developer<AppleWatch, Bike> = {
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
    bike: {
        model: "Yahoo",
        engine: "100cc"
    }
  };


















}

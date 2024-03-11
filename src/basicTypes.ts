// number, string, boolean
let temperature: number = 3.3;
let welcomeString: string = "welcome";
let isLoggedIn: boolean = true;

// Arrays, Tuples
let colors: string[] = ["blue", "red"];
let userInfo: [string, number] = ["ayoub", 22];

// Enum, Any, Void, Null, and Undefined
enum Season {
  Spring,
  Summer,
  Autum,
  Winter,
}
let s: Season = Season.Winter;

const logValue = (something: any) => {
  console.log(something);
};

const noReturn = (): void => {
  console.log("No return.");
};

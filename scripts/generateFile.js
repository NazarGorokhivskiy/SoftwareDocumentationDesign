import fs from "fs";
import path from "path";

const FILE_NAME = "file_data.csv";
const FILE_PATH = path.join("./files/", FILE_NAME);
const LINE_NUMBER = 1000;

const COMA = ",";
const DEFAULT_VALUES = {
  NAMES: [
    "Anastasia",
    "Beau",
    "In",
    "Kassandra",
    "Halina",
    "Asha",
    "Glynda",
    "Ross",
    "Noma",
    "Juanita",
    "Shin",
    "Debora",
    "Priscila",
    "Ann",
    "Lois",
    "Katheryn",
    "Jules",
    "Nicole",
    "Aileen",
    "Bruno",
    "Abraham",
    "Alyson",
    "Deirdre",
    "Major",
    "Mora",
    "Venita",
    "Terri",
    "Reid",
    "Camilla",
    "Etta",
  ],
  SURNAMES: [
    "Toto",
    "Bartolo",
    "Tighe",
    "Mcdonnell",
    "Falconer",
    "Turlington",
    "Bowling",
    "Clover",
    "Veloz",
    "Stamps",
    "Hora",
    "Buttner",
    "Deere",
    "Tookes",
    "Beckler",
    "Drucker",
    "Basquez",
    "Mynatt",
    "Bumgardner",
    "Hardee",
    "Aho",
    "Bonenfant",
    "Schnur",
    "Tiffany",
    "Twedt",
    "Vanduzer",
    "Holts",
    "Russo",
    "Engelbrec",
    "Wycoff",
  ],
  POSITIONS: ["manager", "developer", "devOps", "tester"],
  DATES: [
    "1940-04-08",
    "1940-07-18",
    "1941-05-28",
    "1942-09-10",
    "1950-12-07",
    "1952-12-02",
    "1953-05-25",
    "1955-05-23",
    "1955-12-27",
    "1959-07-23",
    "1960-12-08",
    "1970-04-21",
    "1971-09-10",
    "1973-09-06",
    "1975-03-12",
    "1979-09-07",
    "1980-03-06",
    "1980-06-09",
    "1983-03-30",
    "1983-11-04",
    "1984-12-25",
    "1986-07-25",
    "1991-12-26",
    "1995-04-11",
    "2002-11-06",
    "1941-08-25",
    "1948-04-29",
    "1948-07-01",
    "1951-09-14",
    "1953-03-11",
  ],
  EMAILS: [
    "staffelb@yahoo.ca",
    "boein@msn.com",
    "miyop@comcast.net",
    "pkplex@comcast.net",
    "ninenine@hotmail.com",
    "janneh@gmail.com",
    "murty@optonline.net",
    "lamky@att.net",
    "gommix@msn.com",
    "ozawa@icloud.com",
    "dhwon@att.net",
    "drolsky@outlook.com",
    "north@outlook.com",
    "smallpaul@msn.com",
    "esbeck@yahoo.ca",
    "parksh@me.com",
    "shawnce@gmail.com",
    "retoh@yahoo.com",
    "steveli@yahoo.com",
    "ivoibs@icloud.com",
    "sakusha@icloud.com",
    "chronos@att.net",
    "fangorn@mac.com",
    "guialbu@me.com",
    "jonathan@mac.com",
    "formis@verizon.net",
    "geeber@comcast.net",
    "subir@sbcglobal.net",
    "rgarcia@yahoo.ca",
    "martink@me.com",
  ],
};

const getItemFromArray = (array, index) => array[index % array.length];

const data = [];
for (let i = 0; i < LINE_NUMBER; i++) {
  const line =
    getItemFromArray(DEFAULT_VALUES.NAMES, i) +
    COMA +
    getItemFromArray(DEFAULT_VALUES.SURNAMES, i) +
    COMA +
    getItemFromArray(DEFAULT_VALUES.POSITIONS, i) +
    COMA +
    getItemFromArray(DEFAULT_VALUES.DATES, i) +
    COMA +
    getItemFromArray(DEFAULT_VALUES.EMAILS, i);

  data.push(line);
}

fs.writeFile(FILE_PATH, data.join("\n"), (err) => {
  if (err) throw err;

  console.log("File was created successfully.");
  console.log(`Path to file is: ${FILE_PATH}`);
});

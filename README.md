# MediMove

The steps required for the provision of the website and local tests are described here

`node` with its package manager `npm` must be installed
to get node: https://nodejs.org/en/download

After the initial cloning of the git-repository:

### Install dependencies

The following command installs all dependencies:
```bash
npm install
```

### Start server

the server is started locally with the following command
```bash
npm start
```

## Logging

We use winston for backend logging. The logger is built in Server.js.
If possible, please provide every JS function and branch with a logging.

for more information: https://www.npmjs.com/package/winston

## Testing
Vitest is used for tests during development. Every *.js file should have a *.test.js file.
Each function requires a test. The tests cover all possible events that happen to the functions, intentionally or unintentionally.

The following command runs all tests:
```bash
npm run test
```

Example:
```js
// sum.js
export function sum(a, b) {
  return a + b
}
```
```js
// sum.test.js
import { expect, test } from 'vitest'
import { sum } from './sum'

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})
```

for more information https://vitest.dev/guide/

## Database

To set up the database, a MySQL server must first be installed.
The access data must be adapted in the file `server.js` in line 22.
The database runs on port 3306.

Make sure that the database name and the username in the project match those of the created database.

### Create Tables

To generate these tables, the database `medimove` must be created and used.
The code below can then be copied in its entirety and executed.

```mysql
CREATE TABLE Fahrgast (
                          FahrgastID INT PRIMARY KEY,
                          Vorname VARCHAR(50),
                          Nachname VARCHAR(50),
                          Telefonnummer VARCHAR(20)
);

CREATE TABLE Fahrten (
                         FahrtID INT PRIMARY KEY,
                         Startpunkt VARCHAR(100),
                         Zielpunkt VARCHAR(100),
                         FahrgastID INT,
                         Datum DATETIME,
                         FOREIGN KEY (FahrgastID) REFERENCES Fahrgast(FahrgastID)
);

CREATE TABLE Fahrzeuge (
                           FahrzeugID INT PRIMARY KEY,
                           Marke VARCHAR(50),
                           Kennzeichen VARCHAR(20),
                           Sitzkapazitaet INT,
                           Barrierefrei VARCHAR(20)
);

CREATE TABLE Fahrer (
                        FahrerID INT PRIMARY KEY,
                        Vorname VARCHAR(50),
                        Nachname VARCHAR(50)
);

CREATE TABLE Routen (
                        RouteID INT PRIMARY KEY
);

CREATE TABLE RoutenFahrten (
                               RoutenFahrtenID INT PRIMARY KEY,
                               RouteID INT,
                               FahrtID INT,
                               FahrerID INT,
                               FahrzeugID INT,
                               FOREIGN KEY (RouteID) REFERENCES Routen(RouteID),
                               FOREIGN KEY (FahrtID) REFERENCES Fahrten(FahrtID),
                               FOREIGN KEY (FahrerID) REFERENCES Fahrer(FahrerID),
                               FOREIGN KEY (FahrzeugID) REFERENCES Fahrzeuge(FahrzeugID)
);

INSERT INTO Fahrgast (FahrgastID, Vorname, Nachname, Telefonnummer)
VALUES
    (1, 'Anna', 'Müller', '+49123456789'),
    (2, 'Max', 'Schmidt', '+49876543210'),
    (3, 'Lisa', 'Schulz', '+49111222333');


INSERT INTO Fahrzeuge (FahrzeugID, Marke, Kennzeichen, Sitzkapazitaet, Barrierefrei)
VALUES
    (1, 'Mercedes V-KLasse', 'LB-HT-2000', 6, 'Ja'),
    (2, 'Tesla Model X', 'S-MM-7780', 5, 'Nein'),
    (3, 'VW Van', 'VAI-NK-999', 6, 'Ja');


INSERT INTO Fahrer (FahrerID, Vorname, Nachname)
VALUES
    (1, 'Tom', 'Schulz'),
    (2, 'Maria', 'Meier'),
    (3, 'Hans', 'Fischer');


INSERT INTO Routen (RouteID)
VALUES
    (1),
    (2),
    (3);


INSERT INTO Fahrten (FahrtID, Startpunkt, Zielpunkt, FahrgastID, Datum)
VALUES
    (1, 'Gerlingen', 'Olga Krankenhaus', 1, '2023-11-01 08:30:00'),
    (2, 'Ditzingen', 'Olga Krankenhaus', 2, '2023-11-01 18:00:00'),
    (3, 'Degerloch', 'Orthopäde', 3, '2023-11-02 12:15:00');

INSERT INTO RoutenFahrten (RoutenFahrtenID, RouteID, FahrtID, FahrerID, FahrzeugID)
VALUES
    (1, 1, 1, 1, 2),
    (2, 1, 2, 1, 2),
    (3, 2, 3, 3, 3);

INSERT INTO Fahrgast (FahrgastID, Vorname, Nachname, Telefonnummer)
VALUES
    (4, 'Paul', 'Schweizer', '+49123456789'),
    (5, 'Adrian', 'Muehleisen', '+49876543215'),
    (6, 'Patrick', 'Star', '+49111222736'),
    (7, 'Eden', 'Hazard', '+49123456789'),
    (8, 'John', 'Cena', '+49876543210'),
    (9, 'Peter', 'Parker', '+49171242303'),
    (10, 'Megan', 'Fox', '+49123456449'),
    (11, 'Margott', 'Robbie', '+49876543200'),
    (12, 'Kylie', 'Jenner', '+49011227373');


INSERT INTO Fahrzeuge (FahrzeugID, Marke, Kennzeichen, Sitzkapazitaet, Barrierefrei)
VALUES
    (4, 'Mercedes S-KLasse', 'S-MS-63', 4 ,'Nein'),
    (5, 'Ford Tourneo', 'S-FF-3000', 6, 'Ja'),
    (6, 'Hyndai Staria', 'S-HY-010', 6, 'Ja');

INSERT INTO Fahrer (FahrerID, Vorname, Nachname)
VALUES
    (4, 'Garry', 'Himmelsbach'),
    (5, 'Bernhard', 'Noe'),
    (6, 'Timm', 'Sigg');

INSERT INTO Routen (RouteID)
VALUES
    (4),
    (5),
    (6);


INSERT INTO Fahrten (FahrtID, Startpunkt, Zielpunkt, FahrgastID, Datum)
VALUES
    (4, 'Feuerbach', 'Klinikum Stuttgart', 4, '2023-11-03 09:45:00'),
    (5, 'Möhringen', 'Klinikum Stuttgart', 5, '2023-11-03 15:30:00'),
    (6, 'Vaihingen', 'Orthopäde', 6, '2023-11-04 11:00:00'),
    (7, 'Feuerbach', 'Rathaus Stuttgart', 1, '2023-11-04 19:45:00'),
    (8, 'Möhringen', 'Olga Krankenhaus', 2, '2023-11-05 14:20:00'),
    (9, 'Bad Cannstatt', 'Klinikum Stuttgart', 3, '2023-11-06 08:15:00'),
    (10, 'Degerloch', 'Klinikum Stuttgart', 4, '2023-11-06 16:30:00'),
    (11, 'Feuerbach', 'Orthopäde', 5, '2023-11-07 10:45:00'),
    (12, 'Möhringen', 'Olga Krankenhaus', 6, '2023-11-07 20:00:00'),
    (13, 'Bad Cannstatt', 'Klinikum Stuttgart', 1, '2023-11-08 14:30:00'),
    (14, 'Degerloch', 'Klinikum Stuttgart', 2, '2023-11-08 18:15:00'),
    (15, 'Feuerbach', 'Orthopäde', 3, '2023-11-09 11:30:00'),
    (16, 'Möhringen', 'Olga Krankenhaus', 4, '2023-11-09 19:45:00');


INSERT INTO RoutenFahrten (RoutenFahrtenID, RouteID, FahrtID, FahrerID, FahrzeugID)
VALUES
    (4, 2, 5, 3, 3),
    (5, 3, 4, 6, 4),
    (6, 3, 10, 6, 4),
    (7, 3, 9, 6, 4),
    (8, 4, 11, 5, 6),
    (9, 4, 15, 5, 6),
    (10, 5, 14, 4, 5);
```
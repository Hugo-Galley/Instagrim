CREATE TABLE User (
    IdUser INTEGER PRIMARY KEY AUTOINCREMENT,
    Username TEXT,
    Pseudo TEXT,
    NbrFollower INT,
    NbrSuivis INT,
    NbrPublications INT,
    Description TEXT,
    ProfilePicture BLOB
);

CREATE TABLE Post (
    IdPost INTEGER PRIMARY KEY AUTOINCREMENT,
    NbrLike INT,
    NbrComment INT,
    TimeStampPost TIMESTAMP,
    IdUser INT,
    FOREIGN KEY (IdUser) REFERENCES User(IdUser)
);

CREATE TABLE Story (
    IdStory INTEGER PRIMARY KEY AUTOINCREMENT,
    IdUser INT,
    TimeStampPost TIMESTAMP,
    FOREIGN KEY (IdUser) REFERENCES User(IdUser)
);

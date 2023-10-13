CREATE TABLE IF NOT EXISTS Files (
    ID TEXT PRIMARY KEY,
    FileName VARCHAR(255) NOT NULL,
    Content TEXT,
    FileType VARCHAR(50),
    CreationDate TIMESTAMP,
    Permissions VARCHAR(10)
);

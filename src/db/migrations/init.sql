CREATE TABLE Users
(
    user_id                SERIAL PRIMARY KEY,
    tg_id                  INTEGER UNIQUE NOT NULL,
    name                   VARCHAR(50)    NOT NULL,
    surname                VARCHAR(50)    NOT NULL,
    age                    SMALLINT       NOT NULL,
    gender                 CHAR(1)        NOT NULL,
--     social_networks        VARCHAR(255),
--     city                   VARCHAR(100)   NOT NULL,
--     profession             VARCHAR(100)   NOT NULL,
--     experience             VARCHAR(220)   NOT NULL,
--     professional_interests VARCHAR(30)[],
--     hobbies                VARCHAR(30)[],
--     description            VARCHAR(220)   NOT NULL,
--     useful                 VARCHAR(220)   NOT NULL,
--     meeting_preferences    VARCHAR(220)   NOT NULL,
    timestamp              TIMESTAMP      NOT NULL DEFAULT now() -- Should not be set manually
);


CREATE TABLE Searchers
(
    id        SERIAL PRIMARY KEY,
    user_id   INT,
    name      VARCHAR(16) NOT NULL,
    timestamp TIMESTAMP   NOT NULL DEFAULT now() -- Should not be set manually
);

CREATE TABLE Interests
(
    id        SERIAL PRIMARY KEY,
    name      VARCHAR(16) NOT NULL,
    timestamp TIMESTAMP   NOT NULL DEFAULT now() -- Should not be set manually
);



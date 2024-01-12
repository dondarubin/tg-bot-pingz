CREATE TABLE Users
(
    user_id              SERIAL PRIMARY KEY,
    tg_id                BIGINT UNIQUE NOT NULL,
    user_name            VARCHAR(50)   NOT NULL,
    user_surname         VARCHAR(50)   NOT NULL,
    user_age             SMALLINT      NOT NULL,
    user_gender          CHAR(1)       NOT NULL,
    user_social_networks VARCHAR(255),
    user_city            VARCHAR(100)  NOT NULL,
--     profession             VARCHAR(100)   NOT NULL,
--     experience             VARCHAR(220)   NOT NULL,
--     professional_interests VARCHAR(30)[],
--     hobbies                VARCHAR(30)[],
--     description            VARCHAR(220)   NOT NULL,
--     useful                 VARCHAR(220)   NOT NULL,
--     meeting_preferences    VARCHAR(220)   NOT NULL,
    timestamp            TIMESTAMP     NOT NULL DEFAULT now() -- Should not be set manually
);

CREATE TABLE Interest
(
    interest_id   SERIAL PRIMARY KEY,
    interest_name VARCHAR(30) NOT NULL,
    timestamp     TIMESTAMP   NOT NULL DEFAULT now() -- Should not be set manually
);

CREATE TABLE UsersInterests
(
    id        SERIAL PRIMARY KEY,
--     user_id
--     interest_id
    name      VARCHAR(16) NOT NULL,
    timestamp TIMESTAMP   NOT NULL DEFAULT now() -- Should not be set manually
);

CREATE TABLE Searchers
(
    id        SERIAL PRIMARY KEY,
    user_id   INT,
    name      VARCHAR(16) NOT NULL,
    timestamp TIMESTAMP   NOT NULL DEFAULT now() -- Should not be set manually
);





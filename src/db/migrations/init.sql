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
    profession           VARCHAR(100)  NOT NULL,
    experience           VARCHAR(220)  NOT NULL,
    description          VARCHAR(220)  NOT NULL,
    useful               VARCHAR(220)  NOT NULL,
    meeting_preferences  VARCHAR(220),
    timestamp            TIMESTAMP     NOT NULL DEFAULT now() -- Should not be set manually
);

CREATE TABLE Interests
(
    interest_id   SERIAL PRIMARY KEY,
    interest_name VARCHAR(50) NOT NULL,
    timestamp     TIMESTAMP   NOT NULL DEFAULT now() -- Should not be set manually
);

CREATE TABLE UsersInterests
(
    users_interests_id SERIAL PRIMARY KEY,
    user_id            INTEGER   NOT NULL,
    interest_id        INTEGER   NOT NULL,
    timestamp          TIMESTAMP NOT NULL DEFAULT now(), -- Should not be set manually
    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
            REFERENCES users (user_id),
    CONSTRAINT fk_interest
        FOREIGN KEY (interest_id)
            REFERENCES interests (interest_id)
);


-- CREATE TABLE Searchers
-- (
--     id        SERIAL PRIMARY KEY,
--     user_id   INT,
--     name      VARCHAR(16) NOT NULL,
--     timestamp TIMESTAMP   NOT NULL DEFAULT now() -- Should not be set manually
-- );





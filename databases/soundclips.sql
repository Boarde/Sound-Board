-- This file creates and adds the rows to the files
-- here is the psql url to the database ----> postgres://fbhhtjnu:7nX6UUwB6gHXtEweTcwOjYXX2bm4ZtEW@fanny.db.elephantsql.com/fbhhtjnu
-- User and Default database -----> fbhhtjnu
-- Password ----> 7nX6UUwB6gHXtEweTcwOjYXX2bm4ZtEW
-- Server -----> fanny.db.elephantsql.com


SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.pokemon (
  "_id" serial NOT NULL,
  "name" varchar NOT NULL,
  "link" varchar NOT NULL,
  CONSTRAINT "pokemon_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.instruments (
  "_id" serial NOT NULL,
  "name" varchar NOT NULL,
  "link" varchar NOT NULL,
  CONSTRAINT "instruments_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.gaffes (
  "_id" serial NOT NULL,
  "name" varchar NOT NULL,
  "link" varchar NOT NULL,
  CONSTRAINT "gaffes_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);


INSERT INTO public.pokemon Values (1, 'pikachu', 'https://www.pokezorworld.com/anime/wav/pikach.wav');
INSERT INTO public.pokemon Values (2, 'machoke', 'https://www.pokezorworld.com/anime/wav/machoke.wav');
INSERT INTO public.pokemon Values (3, 'charmander', 'https://www.pokezorworld.com/anime/wav/charmander.wav');
INSERT INTO public.pokemon Values (4, 'brock', 'https://www.pokezorworld.com/anime/wav/brock.wav');
INSERT INTO public.pokemon Values (5, 'bulbasaur', 'https://www.pokezorworld.com/anime/wav/bulbasaur.wav');
INSERT INTO public.pokemon Values (6, 'vulpix', 'https://www.pokezorworld.com/anime/wav/vulpix.wav');
INSERT INTO public.pokemon Values (7, 'raichu', 'https://www.pokezorworld.com/anime/wav/raiiiiiichu.wav');
INSERT INTO public.pokemon Values (8, 'who_is_that_pokemon', 'https://www.pokezorworld.com/anime/wav/whosthatpokemon.wav');
INSERT INTO public.pokemon Values (9, 'ash_boogy', 'https://www.pokezorworld.com/anime/wav/ash.wav');
INSERT INTO public.pokemon Values (10, 'meowth', 'https://www.pokezorworld.com/anime/wav/meowth.wav');

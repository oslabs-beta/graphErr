CREATE TABLE "empty_table_avi" (
  "_id" serial NOT NULL
);

CREATE TABLE "delete_me_avi" (
  "title" varchar
);

-- This is for pull all authors, which is empty_table
CREATE TABLE "empty_table" (
  "title" varchar
);



-- Example Table
-- CREATE TABLE "public.Media" (
-- 	"_id" serial NOT NULL,
-- 	"type" varchar NOT NULL,
-- 	"title" varchar(255) NOT NULL,
-- 	CONSTRAINT "Media_pk" PRIMARY KEY ("_id")
-- ) WITH (
--   OIDS=FALSE
-- );
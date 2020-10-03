-- :name patients-all :? :*
SELECT * FROM patients;

-- :name create :! :raw
CREATE TABLE IF NOT EXISTS patients(
       firstname varchar(45) PRIMARY KEY,
       gender varchar(1) NOT NULL,
       bday varchar(10) NOT NULL,
       adress varchar(100) NOT NULL,
       oms integer NOT NULL
);


-- :name get-user :? :1
SELECT * FROM patients
       WHERE firstname = :fname
       
-- :name add-user :i! :raw
INSERT INTO patients
       VALUES (:fname, :gender, :bday, :adress, :oms);

-- :name delete-user :! :raw
DELETE FROM patients
       WHERE firstname = :fname

-- :name drop :! :raw
DROP TABLE IF EXISTS patients;

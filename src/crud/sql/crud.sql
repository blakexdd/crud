-- :name get-all-patients :? :*
SELECT * FROM patients;

-- :name create-patients-table :! :raw
CREATE TABLE IF NOT EXISTS patients(
       firstname varchar(45) PRIMARY KEY,
       gender varchar(1) NOT NULL,
       bday date NOT NULL,
       adress varchar(100) NOT NULL,
       oms integer NOT NULL
);

-- :name update-patient-by-name :! :raw
UPDATE patients
       SET gender = :gender,
           bday = :bday,
           adress = :adress,
           oms = :oms
       WHERE firstname = :fname

-- :name get-patient-by-name :? :1
SELECT * FROM patients
       WHERE firstname = :fname

-- :name add-patient :i! :raw
INSERT INTO patients
       VALUES (:fname, :gender, to_date(:bday, 'YYYY-MM-DD'), :adress, :oms);

-- :name delete-patient-by-name :! :raw
DELETE FROM patients
       WHERE firstname = :fname

-- :name drop-patients-table :! :raw
DROP TABLE IF EXISTS patients;

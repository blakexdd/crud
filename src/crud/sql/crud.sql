-- :name get-all-patients :? :*
SELECT * FROM patients;

-- :name create-patients-table :! :raw
CREATE TABLE IF NOT EXISTS patients(
       id SERIAL PRIMARY KEY,
       firstname text NOT NULL UNIQUE,
       gender char(1) NOT NULL,
       bday date NOT NULL,
       adress text NOT NULL,
       oms bigint NOT NULL
);

-- :name update-patient-by-id :! :raw
UPDATE patients
       SET
           firstname = :fname,
           gender = :gender,
           bday = to_date(:bday, 'YYYY-MM-DD'),
           adress = :adress,
           oms = :oms
       WHERE id = :id

-- :name get-patient-by-name :? :1
SELECT * FROM patients
       WHERE firstname = :fname

-- :name get-patient-by-id :? :1
SELECT * FROM patients
       WHERE id = :id

-- :name get-patient-by-oms :? :1
SELECT * FROM patients
        WHERE oms = :oms

-- :name add-patient :i! :raw
INSERT INTO patients
       (firstname, gender, bday, adress, oms)
       VALUES (:fname, :gender, to_date(:bday, 'YYYY-MM-DD'), :adress, :oms);

-- :name delete-patient-by-name :! :raw
DELETE FROM patients
       WHERE firstname = :fname

-- :name drop-patients-table :! :raw
DROP TABLE IF EXISTS patients;

-- :name check-table :? :*
SELECT *
       FROM INFORMATION_SCHEMA.TABLES;

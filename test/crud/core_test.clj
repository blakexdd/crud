(ns crud.core-test
  (:require [clojure.test :refer :all]
            [clojure.spec.alpha :as s]
            [crud.sql :as sql]
            [crud.db :refer [db]]
            [crud.router :as router]))

(deftest db-test
  (testing "Database preinitialization"
    (is (not (nil? (sql/check-table db {:tname "patients"}))))
    )
  )

(defn create-test-patient
  [name oms]
  ((router/app db) {
                    :request-method :post
                    :uri "/patient/create"
                    :form-params {
                                  :fname name
                                  :gender "M"
                                  :bday "2020-10-10"
                                  :adress "aaa"
                                  :oms oms
                                  }}))

(defn delete-test-patient
 [name]
  ((router/app db) {
                    :request-method :post
                    :uri "/patient/delete"
                    :form-params {
                                  :fname name
                                  }
                    }))

(defn edit-test-patient
  [user]
  ((router/app db){
                    :request-method :post
                    :uri "/patient/edited"
                    :form-params {
                                   :id (str (:id user))
                                   :fname (:firstname user)
                                   :gender (:gender user)
                                   :bday (:bday user)
                                   :adress (:adress user)
                                   :oms (str (:oms user))
                                   }
                    }))

(deftest creating-test
  (testing "Creating patient"
           (def creation-status-code (:status (create-test-patient "test" "1234567891234567")))
           (delete-test-patient "test")

           ; 302 emerges because of redirection
           ; not good practice to do that, but for small
           ; project it's ok
           (is (= 302 creation-status-code))
           )

  (testing "Creating same user"
           (create-test-patient "test" "1234567891234567")
           (def second-creation-status (:status (create-test-patient "test" "1234567891234567")))
           (delete-test-patient "test")
           (is (= 202 second-creation-status))
    )

  (testing "Creating user with existing oms"
           (create-test-patient "test" "1234567891234567")
           (def creation-status (:status (create-test-patient "test1" "1234567891234567")))
           (delete-test-patient "test")
           (delete-test-patient "test1")
           (is (= 202 creation-status))
           )
  )

(deftest editing-test
 (testing "Editing user"
   (create-test-patient "test" "1234567891234567")
   (def patient (sql/get-patient-by-name db {:fname "test"}))
   (def editing-status (:status (edit-test-patient {
                                                     :id (:id patient)
                                                     :firstname "new test name"
                                                     :gender "F"
                                                     :bday "2001-03-03"
                                                     :adress "1234"
                                                     :oms (:oms patient)
                                                     })))
   (delete-test-patient "test")
   (delete-test-patient "new test name")

   ; 302 emerges because of redirection
   ; not good practice to do that, but for small
   ; project it's ok
   (is (= 302 editing-status)))

  (testing "Editing user giving existing username"
    (create-test-patient "test" "1234567891234567")
    (create-test-patient "test1" "1234567891234523")
    (def patient (sql/get-patient-by-name db {:fname "test"}))
    (def editing-status (:status (edit-test-patient {
                                                     :id (:id patient)
                                                     :firstname "test1"
                                                     :gender (:gedner patient)
                                                     :bday (:bday patient)
                                                     :adress (:adress patient)
                                                     :oms (:oms patient)
                                                     })))
    (delete-test-patient "test")
    (delete-test-patient "new test name")

    (is (= 202 editing-status))
    )

  (testing "Editing user giving existing oms"
    (create-test-patient "test" "1234567891234567")
    (create-test-patient "test1" "1234567891234523")
    (def patient (sql/get-patient-by-name db {:fname "test"}))
    (def editing-status (:status (edit-test-patient {
                                                     :id (:id patient)
                                                     :firstname "test"
                                                     :gender (:gedner patient)
                                                     :bday (:bday patient)
                                                     :adress (:adress patient)
                                                     :oms "1234567891234523"
                                                     })))
    (delete-test-patient "test")
    (delete-test-patient "new test name")

    (is (= 202 editing-status))
    )
  )

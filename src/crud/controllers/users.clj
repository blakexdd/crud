(ns crud.controllers.users
  (:use clojure.walk)
  (:require [crud.ui :as ui]
            [crud.sql :as sql]))

(defn default
  [req]
  {
   :status 200
   :headers {"Content-Type" "text/html"}
   :body ui/main-page
   })

(defn edit-patient
  [req db]
  (let [params (keywordize-keys (:form-params req))]
    (println (str "Params: " params))
    (def user (sql/get-patient-by-name db {:fname (:fname params)}))
    (println (str "Edit params: " user))
    {
     :status 200
     :headers {"Content-Type" "text/html"}
     :body (ui/edit-patient user)
     }
    ))

(defn edit-patient-core
  [req db]
  (let [params (keywordize-keys (:form-params req))]
    (println (str "editing user" params))
    (sql/update-patient-by-id db {
                         :id (read-string (:id params))
                         :fname (:fname params)
                         :gender (:gender params)
                         :bday (:bday params)
                         :adress (:adress params)
                         :oms (read-string (:oms params))
                         })
  ))

(defn delete-patient-core
  [req db]
  (let [params (keywordize-keys (:form-params req))]
    (println (str "Params " params))
    (sql/delete-patient-by-name db {:fname (:fname params)})
    (def users (sql/get-all-patients db))
    (clojure.pprint/pprint users)
    {
     :status 200
     :headers {"Content-Type" "text/html"}
     :body (ui/list-patients users)
     }
  ))

(defn list-patients
  [req db]
  (def users (sql/get-all-patients db))
  (println "ALL USERS")
  (clojure.pprint/pprint users)
  {
   :status 200
   :headers {"Content-Type" "text/html"}
   :body (ui/list-patients users)
   }
  )

(defn create-patient
  [req]
  {
   :status 200
   :headers {"Content-Type" "text/html"}
   :body ui/create-patient
   })

(defn create-patient-core
  [res db]
  (let [params (keywordize-keys (:form-params res))]
    (println (str "User name" params))
    (println "Dumping users")
    (def already-exists (sql/get-patient-by-name db {:fname (:fname params)}))
    (if (nil? already-exists)
      (sql/add-patient db {
                        :fname (:fname params)
                        :gender (:gender params)
                        :bday (:bday params)
                        :adress (:adress params)
                        :oms (read-string (:oms params))
                        })
      (println "exists")
   )))

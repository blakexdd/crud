(ns crud.controllers.users
  (:use clojure.walk)
  (:require [crud.ui :as ui]
            [crud.db :refer [db]]
            [crud.sql :as sql]))

(defn default
  [req]
  {
   :status 200
   :headers {"Content-Type" "text/html"}
   :body ui/main-page
   })

(defn edit-patient
  [req]
  (let [params (keywordize-keys (:form-params req))
        firstname (:fname params)]
    (def user (sql/get-patient-by-name db {:fname firstname}))
    (println (str "Edit params: " user))
    {
     :status 200
     :headers {"Content-Type" "text/html"}
     :body (ui/edit-patient user)
     }
    ))

(defn edit-patient-core
  [req]
  (let [params (keywordize-keys (:form-params req))
        firstname (:fname params)]
    (sql/update-patient-by-name db {
                         :fname firstname
                         :gender (:gender params)
                         :bday (:bday params)
                         :adress (:adress params)
                         :oms (read-string (:oms params))
                         })
  ))

(defn delete-patient-core
  [req]
  (let [params (keywordize-keys (:form-params req))
        firstname (:fname params)]
    (println (str "Fname: " params))
    (sql/delete-patient-by-name db {:fname (params :fname)})
    (def users (sql/get-all-patients db))
    (clojure.pprint/pprint users)
    {
     :status 200
     :headers {"Content-Type" "text/html"}
     :body (ui/list-patients users)
     }
  ))

(defn list-patients
  [req]
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
  [res]
  (let [params (keywordize-keys (:form-params res))
        firstname (:fname params)]
    (println (str "User name" firstname))
    (println "Dumping users")
    (def already-exists (sql/get-patient-by-name db {:fname firstname}))
    (if (nil? already-exists)
      (sql/add-patient db {
                        :fname firstname
                        :gender (:gender params)
                        :bday (:bday params)
                        :adress (:adress params)
                        :oms (read-string (:oms params))
                        })
      (println "exists")
   )))

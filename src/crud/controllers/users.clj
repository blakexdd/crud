(ns crud.controllers.users
  (:use clojure.walk)
  (:require [crud.ui :as ui]
            [crud.sql :as sql]
            [ring.util.response :as response]))

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
     :body (ui/patient-form user "/patient/edited" nil "Edit user")
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
    (response/redirect "/patient/list")
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
  ([req]
  {
   :status 200
   :headers {"Content-Type" "text/html"}
   :body (ui/patient-form {} "/patient/create" nil "Create user")
   })
  ([req user err]
   (println (str "Creating patient" err))
   {
     :status 200
     :headers {"Content-Type" "text/html"}
     :body (ui/patient-form user "/patient/create" err "Create user")
     }
   )
  )



(defn create-patient-core
  [res db]
  (let [params (keywordize-keys (:form-params res))]
    (println (str "User name" params))
    (println "Dumping users")

    (def patient-already-exists (sql/get-patient-by-name db {:fname (:fname params)}))
    (def oms-already-exists (sql/get-patient-by-oms db {:oms (read-string (:oms params))}))

    (cond
      (not (nil? patient-already-exists))
        (create-patient res params "User exists")
      (not (nil? oms-already-exists))
        (create-patient res params "Another patient has this oms")
      (nil? patient-already-exists)
        (do
          (sql/add-patient db {
                                :fname (:fname params)
                                :gender (:gender params)
                                :bday (:bday params)
                                :adress (:adress params)
                                :oms (read-string (:oms params))
                                })
          (response/redirect "/")
          ))
    ))

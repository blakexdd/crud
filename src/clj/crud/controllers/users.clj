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
  ([req db]
  (let [params (keywordize-keys (:form-params req))]
    (def user (sql/get-patient-by-name db {:fname (:fname params)}))
    {
     :status 200
     :headers {"Content-Type" "text/html"}
     :body (ui/patient-form user "/patient/edited" nil "Edit user")
     }
    ))
  ([req user err]
   {
    :status 202
    :headers {"Content-Type" "text/html"}
    :body (ui/patient-form user "/patient/edit" err "Edit user")
    }
   )
  )

(defn edit-patient-core
  [req db]
  (let [params (keywordize-keys (:form-params req))]
    (def patient-already-exists (sql/get-patient-by-name db {:fname (:fname params)}))
    (def oms-already-exists (sql/get-patient-by-oms db {:oms (read-string (:oms params))}))
    (def real-patient (sql/get-patient-by-id db {:id (read-string (:id params))}))

    (cond
      (and (not (nil? patient-already-exists)) (not= (read-string (:id params)) (:id patient-already-exists)))
       (edit-patient req real-patient "User with that name already exists")
      (and (not (nil? oms-already-exists)) (not= (read-string (:id params)) (:id oms-already-exists)))
       (edit-patient req real-patient "User with that oms already exists")
      :else
      (do
        (sql/update-patient-by-id db {
                                      :id (read-string (:id params))
                                      :fname (:fname params)
                                      :gender (:gender params)
                                      :bday (:bday params)
                                      :adress (:adress params)
                                      :oms (read-string (:oms params))
                                      })
        (response/redirect "/patient/list"))
      )
  ))

(defn delete-patient-core
  [req db]
  (let [params (keywordize-keys (:form-params req))]
    (sql/delete-patient-by-name db {:fname (:fname params)})
    (def users (sql/get-all-patients db))
    {
     :status 200
     :headers {"Content-Type" "text/html"}
     :body (ui/list-patients users)
     }
  ))

(defn list-patients
  [req db]
  (def users (sql/get-all-patients db))
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
   {
     :status 202
     :headers {"Content-Type" "text/html"}
     :body (ui/patient-form user "/patient/create" err "Create user")
     }
   )
  )



(defn create-patient-core
  [res db]
  (let [params (keywordize-keys (:form-params res))]
    (def patient-already-exists (sql/get-patient-by-name db {:fname (:fname params)}))
    (def oms-already-exists (sql/get-patient-by-oms db {:oms (read-string (:oms params))}))

    (cond
      (not (nil? patient-already-exists))
        (create-patient res params "User exists")
      (not (nil? oms-already-exists))
        (create-patient res params "Another patient has this oms")
      :else
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

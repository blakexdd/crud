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
   :body ui/main-options})

(defn delete-user
  [req]
  (let [params (keywordize-keys (:form-params req))
        firstname (:fname params)]
    (println (str "Fname: " params))
    (sql/delete-user db {:fname (params :fname)})
    (def users (sql/patients-all db))
    (clojure.pprint/pprint users)
    {
     :status 200
     :headers {"Content-Type" "text/html"}
     :body (ui/list-users users)
     }
  ))

(defn list-users
  [req]
  (def users (sql/patients-all db))
  (println "ALL USERS")
  (clojure.pprint/pprint users)
  {
   :status 200
   :headers {"Content-Type" "text/html"}
   :body (ui/list-users users)
   }
  )

(defn create-user
  [req]
  {
   :status 200
   :headers {"Content-Type" "text/html"}
   :body ui/user-create
   })

(defn dump-user
  [res]
  (let [params (keywordize-keys (:form-params res))
        firstname (:fname params)]
    (def already-exists (sql/get-user db {:fname firstname}))
    (if (nil? already-exists)
      (sql/add-user db {
                        :fname firstname
                        :gender (:gender params)
                        :bday (:bday params)
                        :adress (:adress params)
                        :oms (read-string (:oms params))
                        })
      (println "exists")
      )
   ))

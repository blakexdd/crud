(ns crud.controllers.users
  (:use clojure.walk)
  (:require [crud.sql :as sql]
            [ring.util.response :as response]))

(defn create-user
  [user]
  (println (str "Here " user))
  (def patient-exists (sql/get-patient-by-name {:fname (:fname user)}))
  (prn "Patient exists" patient-exists)
  {
    :status 200
    :headers {"Access-Control-Allow-Headers" "*",
              "Access-Control-Allow-Origin" "http://localhost:3449",
              "Access-Control-Allow-Credentials" "true"}
    :body "success"
    })
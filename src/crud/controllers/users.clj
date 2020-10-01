(ns crud.controllers.users
  (:require [crud.ui.main :as main]))

(defn default
  [req]
  ;(println str "Request: " req)
  {
   :status 200
   :headers {"Content-Type" "text/html"}
   :body main/main-options})

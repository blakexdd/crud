(ns crud.controllers.users
  (:require [crud.ui :as ui]))

(defn default
  [req]
  {
   :status 200
   :headers {"Content-Type" "text/html"}
   :body ui/main-options})

(defn create-user
  [req]
  {
   :status 200
   :headers {"Content-Type" "text/html"}
   :body ui/user-create
   })

(defn dump-user
  [res]
  (println (str "res: " (:form-params res)))
  {
   :status 200
   :headers {"Content-Type" "text/html"}
   :body "Users created"
   })

(ns crud.controllers.users
  (:require [crud.ui.main :as main]
            [crud.ui.user_create :as user-create]))

(defn default
  [req]
  {
   :status 200
   :headers {"Content-Type" "text/html"}
   :body main/main-options})

(defn create-user
  [req]
  {
   :status 200
   :headers {"Content-Type" "text/html"}
   :body user-create/user-create
   })

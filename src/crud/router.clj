(ns crud.router
  (:require [reitit.ring :as ring]
   [crud.controllers.users :as users-ctl]))

(def app
  (ring/ring-handler
   (ring/router
    [["/" {:handler users-ctl/default}]])
   (ring/routes
    (ring/create-resource-handler
     {:path "/"})
    (ring/create-default-handler
     {:not-found (constantly {:status 404 :body "Not found"})}))))

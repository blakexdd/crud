(ns crud.router
  (:require [reitit.ring :as ring]
   [crud.controllers.users :as users-ctl]))

(def app
  (ring/ring-handler
   (ring/router
    [["/" {:handler users-ctl/default}]])
  (ring/create-default-handler)))

;(defn app [req]
;  {:status  200
;   :headers {"Content-Type" "text/html"}
;   :body    "hello HTTP!"})

(ns crud.router
  (:require [reitit.ring :as ring]
            [crud.controllers.users :as users-ctl]
            [reitit.ring.coercion :as rrc]
            [reitit.coercion.schema]
            [reitit.ring.middleware.parameters]
            [schema.core :as s]
            [hiccup.page :as page]))

(def patient-params {
                       :fname s/Str
                       :gender s/Str
                       :bday s/Str
                       :adress s/Str
                       :oms s/Int
                      })

(defn app
  [db]
  (ring/ring-handler
   (ring/router
    [
      ["/" {:get {:handler (fn [req] (prn "REQ / " req))}}]
      ["/patient"
       ["/list"]
       ["/delete"]
       ["/edit"]
       ["/create" {:post {
                           :params patient-params
                           :handler (fn [req]
                                      (prn "Requested")
                                      (users-ctl/create-user req))}}]]]
    {:data {:middleware [rrc/coerce-exceptions-middleware
                         reitit.ring.middleware.parameters/parameters-middleware
                         rrc/coerce-request-middleware
                         rrc/coerce-response-middleware]}})
   (ring/routes
    (ring/create-resource-handler
     {:path "/"})
    (ring/create-default-handler
     {:not-found (constantly {:status 404 :body "Not found"})}))))

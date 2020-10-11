(ns crud.router
  (:require [reitit.ring :as ring]
            [crud.controllers.users :as users-ctl]
            [reitit.ring.coercion :as rrc]
            [reitit.coercion.schema]
            [reitit.ring.middleware.parameters]
            [schema.core :as s]
            [hiccup.page :as page]))


(def patient-fname-params
  {
    :form-data {
                 :fname s/Str
                 }
    })

(def patient-params {
                     :form-data {
                                   :id s/Int
                                   :fname s/Str
                                   :gender s/Str
                                   :bday s/Str
                                   :adress s/Str
                                   :oms s/Int
                                   }
                      })

(defn app
  [db]
  (ring/ring-handler
   (ring/router
    [["/patient"
       ["/list"]
       ["/delete"]
       ["/edit"]
       ["/create" {:post {
                           :params patient-params
                           :handler (fn [req]
                                      (users-ctl/create-user (:form-params req)))}}]]]
    {:data {:middleware [rrc/coerce-exceptions-middleware
                         reitit.ring.middleware.parameters/parameters-middleware
                         rrc/coerce-request-middleware
                         rrc/coerce-response-middleware]}})
   (ring/routes
    (ring/create-resource-handler
     {:path "/"})
    (ring/create-default-handler
     {:not-found (constantly {:status 404 :body "Not found"})}))))

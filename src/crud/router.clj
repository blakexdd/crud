(ns crud.router
  (:require [reitit.ring :as ring]
            [crud.controllers.users :as users-ctl]
            [reitit.ring.coercion :as rrc]
            [reitit.coercion.schema]
            [reitit.ring.middleware.parameters]
            [schema.core :as s]))

(def app
  (ring/ring-handler
   (ring/router
    [["/" {:handler users-ctl/default}]
     ["/user/list" {:get {
                          :handler users-ctl/list-users
                          }}]
     ["/user/create" {:get {
                            :handler users-ctl/create-user
                            }}]
     ["/create-user" {:post {
                             :coercion reitit.coercion.schema/coercion
                             :parameters {
                                          :form-data {
                                                 :fname s/Str
                                                 :gender s/Str
                                                 :bday s/Str
                                                 :adress s/Str
                                                 :oms s/Int
                                                 }
                                          }
                             :handler (fn [res]
                                        (users-ctl/dump-user res)
                                        (app {:request-method :get
                                              :uri "/"}))
                             }}]]
    {:data {:middleware [rrc/coerce-exceptions-middleware
                         reitit.ring.middleware.parameters/parameters-middleware
                         rrc/coerce-request-middleware
                         rrc/coerce-response-middleware]}})
   (ring/routes
    (ring/create-resource-handler
     {:path "/"})
    (ring/create-default-handler
     {:not-found (constantly {:status 404 :body "Not found"})}))))

(ns crud.router
  (:require [reitit.ring :as ring]
            [crud.controllers.users :as users-ctl]
            [reitit.ring.coercion :as rrc]
            [reitit.coercion.schema]
            [schema.core :as s]))

(def app
  (ring/ring-handler
   (ring/router
    [["/" {:handler users-ctl/default}]
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
                             :handler users-ctl/dump-user
                             }}]]
    {:data {:middleware [rrc/coerce-exceptions-middleware
                         rrc/coerce-request-middleware
                         rrc/coerce-response-middleware]}})
   (ring/routes
    (ring/create-resource-handler
     {:path "/"})
    (ring/create-default-handler
     {:not-found (constantly {:status 404 :body "Not found"})}))))

(app {:request-method :post
      :uri "/create-user"
      :form-params {
                    :fname "Vova"
                    :gender "Male"
                    :bday "06.08.2001"
                    :adress "Len"
                    :oms 112
                    }}) 

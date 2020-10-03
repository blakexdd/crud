(ns crud.router
  (:require [reitit.ring :as ring]
            [crud.controllers.users :as users-ctl]
            [reitit.ring.coercion :as rrc]
            [reitit.coercion.schema]
            [reitit.ring.middleware.parameters]
            [schema.core :as s]
            [ring.util.response :as response]))

(def first-name-params {
                         :form-data {
                                      :fname s/Str
                                      }
                         })

(def patient-params {
                      :form-data {
                                   :fname s/Str
                                   :gender s/Str
                                   :bday s/Str
                                   :adress s/Str
                                   :oms s/Int
                                   }
                      })

(def app
  (ring/ring-handler
   (ring/router
    [["/" {:handler users-ctl/default}]
     ["/patient"
       ["/list" {:get {
                        :handler users-ctl/list-patients
                        }}]
       ["/delete" {:post {
                           :coercion reitit.coercion.schema/coercion
                           :parameters first-name-params
                           :handler (fn [res]
                                      (users-ctl/delete-patient-core res)
                                      (response/redirect "/patient/list"))}}]
       ["/edit" {:post {
                         :coercion reitit.coercion.schema/coercion
                         :parameters first-name-params
                         :handler users-ctl/edit-patient}}]
       ["/create" {:get {
                          :handler users-ctl/create-patient
                          }
                   :post {
                            :coercion reitit.coercion.schema/coercion
                            :parameters patient-params
                            :handler (fn [res]
                                       (users-ctl/create-patient-core res)
                                       (response/redirect "/"))
                            }}]
       ["/edited" {
                      :post {
                             :coercion reitit.coercion.schema/coercion
                             :parameters patient-params
                             :handler (fn [res]
                                        (users-ctl/edit-patient-core res)
                                        (response/redirect "/patient/list"))
                             }
                    }]]]
    {:data {:middleware [rrc/coerce-exceptions-middleware
                         reitit.ring.middleware.parameters/parameters-middleware
                         rrc/coerce-request-middleware
                         rrc/coerce-response-middleware]}})
   (ring/routes
    (ring/create-resource-handler
     {:path "/"})
    (ring/create-default-handler
     {:not-found (constantly {:status 404 :body "Not found"})}))))

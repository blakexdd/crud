(ns crud.router
  (:require [reitit.ring :as ring]
            [crud.controllers.users :as users-ctl]
            [reitit.ring.coercion :as rrc]
            [reitit.coercion.schema]
            [reitit.ring.middleware.parameters]
            [schema.core :as s]
            [ring.util.response :as response]
            [hiccup.page :as page]))

(def patient-id-params
  {
    :form-data {
                  :id s/Int
                  }
 })

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
    [["/" {:handler users-ctl/default}]
     ["/patient"
       ["/list" {:get {
                       :handler (fn [req]
                                  (users-ctl/list-patients req db))
                        }}]
       ["/delete" {:post {
                           :coercion   reitit.coercion.schema/coercion
                           :parameters patient-id-params
                           :handler    (fn [req]
                                      (users-ctl/delete-patient-core req db)
                                      (response/redirect "/patient/list"))}}]
       ["/edit" {:post {
                         :coercion   reitit.coercion.schema/coercion
                         :parameters patient-fname-params
                        :handler     (fn [req]
                                   (users-ctl/edit-patient req db))}}]
       ["/create" {:get {
                          :handler users-ctl/create-patient
                          }
                   :post {
                            :coercion reitit.coercion.schema/coercion
                            :parameters patient-params
                            :handler (fn [req]
                                       (users-ctl/create-patient-core req db)
                                       (response/redirect "/"))
                            }}]
       ["/edited" {
                      :post {
                             :coercion reitit.coercion.schema/coercion
                             :parameters patient-params
                             :handler (fn [req]
                                        (users-ctl/edit-patient-core req db)
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

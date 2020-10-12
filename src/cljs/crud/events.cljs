(ns crud.events
  (:require [re-frame.core :as r]
            [crud.db :as db]
            [day8.re-frame.http-fx]
            [ajax.core :as ajax]))

(r/reg-event-fx
  :create-patient-event
 (fn [coeff [_ patient]]
   (prn "creating patient" patient)
   {
     :http-xhrio {
                   :method :post
                   :uri "http://localhost:8080/patient/create"
                   :params patient
                   :format (ajax/json-request-format {:keywords? true})
                   :response-format (ajax/text-response-format)
                   :on-success [:create-patient-success]
                   :on-failure [:create-patient-failure]
                   }
     }))

(r/reg-event-db
  :create-patient-success
 (prn "Successfully created")
 {})

(r/reg-event-db
 :create-patient-failure
 (prn "failed to create patient")
 {})

(r/reg-event-db
  :initialize-db
  (fn [_ _]
    db/state))


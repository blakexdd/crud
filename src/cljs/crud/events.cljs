(ns crud.events
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [re-frame.core :as r]
            [crud.db :as db]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))

(r/reg-event-db
  :create-patient-event
 (fn [db _]
   (.log js/console "name " (:name db) " oms " (:oms db))
   (go (let [response (<! (http/post "http://localhost:8080/patient/create"
                                     {:form-params
                                       {:fname (:name db)
                                        :gender (:gender db)
                                        :bday (:bday db)
                                        :adress (:adress db)
                                        :oms (:oms db)
                                        }
                                      }))]
         (.log js/console "res" (:body response))))
   {}))

(r/reg-event-db
  :name-changed
 (fn [db [_ name]]
   (.log js/console "Name " name)
   (assoc db :name name)))

(r/reg-event-db
 :gender-changed
 (fn [db [_ gender]]
   (.log js/console "Gender " gender)
   (assoc db :gender gender)))

(r/reg-event-db
 :bday-changed
 (fn [db [_ bday]]
   (.log js/console "bday " bday)
   (assoc db :bday bday)))

(r/reg-event-db
 :bday-changed
 (fn [db [_ bday]]
   (.log js/console "bday " bday)
   (assoc db :bday bday)))

(r/reg-event-db
 :adress-changed
 (fn [db [_ adress]]
   (.log js/console "adress " adress)
   (assoc db :adress adress)))

(r/reg-event-db
 :oms-changed
 (fn [db [_ oms]]
   (.log js/console "oms " oms)
   (assoc db :oms oms)))

(r/reg-event-db
  :initialize-db
  (fn [_ _]
    db/state))


(ns crud.subs
 (:require [re-frame.core :as r]))

(r/reg-sub
 :name
 (fn [db v]
  (:name db)))

(r/reg-sub
 :gender
 (fn [db v]
  (:gender db)))

(r/reg-sub
 :bday
 (fn [db v]
  (:bday db)))

(r/reg-sub
 :adress
 (fn [db v]
  (:adress db)))

(r/reg-sub
 :oms
 (fn [db v]
  (:oms db)))
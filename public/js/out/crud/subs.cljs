(ns crud.subs
 (:require [re-frame.core :as r]))

(r/reg-sub
 :name-error
 (fn [db v]
  (:name-error db)))
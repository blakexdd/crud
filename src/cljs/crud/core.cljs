(ns crud.core
    (:require
      [reagent.core :as r]
      [reagent.dom :as d]
      [crud.ui :as ui]))

(defn mount-root []
  (d/render [ui/main-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))

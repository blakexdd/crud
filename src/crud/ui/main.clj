(ns crud.ui.main
  (:require [hiccup.page :as page]))

(def main-options
  (page/html5
   [:div
    [:ui
     [:a {:href "/user/create"}
      [:li "Create user"]]
     [:a {:href "/user/edit"}
      [:li "Edit user"]]
     [:a {:href "/user/list"}
      [:li "List users"]]]]))

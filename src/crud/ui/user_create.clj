(ns crud.ui.user_create
  (:require [hiccup.page :as page]))

(defn gen-page-head
    [title]
    [:head
     [:title (str "Locations: " title)]
     (page/include-css "/css/styles.css")])

(def user-create
  (page/html5
   (gen-page-head "Create user")
   [:h1 "Create user"]
   [:form {:action "/create-user" :method "POST"}
    [:p "Full name: " [:input {:type "text" :name "fname"}]]
    [:p "Gender: " [:input {:type "text" :name "gender"}]]
    [:p "Date of birth: " [:input {:type "text" :name "bday"}]]
    [:p "Adress: " [:input {:type "text" :name "adress"}]]
    [:p "OMS: " [:input {:type "text" :name "oms"}]]
    [:p [:input {:type "submit" "value" "Create user"}]]]))

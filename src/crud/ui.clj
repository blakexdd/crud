(ns crud.ui
  (:require [hiccup.page :as page]))

(defn gen-page-head
  [title]
  [:head
   [:title (str "Locations: " title)]
   (page/include-css "/css/styles.css")])

(def main-options
  (page/html5
   (gen-page-head "Main page")
   [:div
    [:ui
     [:a {:href "/user/create"}
      [:li "Create user"]]
     [:a {:href "/user/edit"}
      [:li "Edit user"]]
     [:a {:href "/user/list"}
      [:li "List users"]]]]))

(def user-create
  (page/html5
   (gen-page-head "Create user")
   [:h1 "Create user"]
   [:form {:action "/create-user" :method "post"}
    [:p "Full name: " [:input {:type "text" :name "fname"}]]
    [:p "Gender: " [:input {:type "text" :name "gender"}]]
    [:p "Date of birth: " [:input {:type "text" :name "bday"}]]
    [:p "Adress: " [:input {:type "text" :name "adress"}]]
    [:p "OMS: " [:input {:type "number" :name "oms"}]]
    [:p [:input {:type "submit" "value" "Create user"}]]]))

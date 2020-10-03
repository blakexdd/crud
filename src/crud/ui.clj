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

(defn list-users
  [users]
  (page/html5
   (gen-page-head "See users")
   [:table
    [:tbody 
     [:tr
      [:td "First Name"]
      [:td "Gender"]
      [:td "Birth Date"]
      [:td "Adress"]
      [ :td "oms"]]
    (for [user users]
      [:tr
       [:td (:firstname user)]
       [:td (:gender user)]
       [:td (:bday user)]
       [:td (:adress user)]
       [:td (:oms user)]
       [:td
        [:form {:action "/user/delete" :method "post"}
         [:button {:type "submit"
                   :name "fname"
                   :value (:firstname user)} "delete"]]
        [:form {:action "/user/edit" :method "post"}
         [:button {:type "submit"
                   :name "fname"
                   :value (:firstname user)} "edit"]]]])]]
   ))

(defn edit-user
  [user]
  (page/html5
   (println (str "Gender M: " (if (= (:gender user) "F") "checked")))
   (gen-page-head "Edit user")
   [:h1 "Edit user"]
   [:form {:action "/edit-user" :method "post"}
    [:p "Full name: " [:input {:type "text" :name "fname" :value (:firstname user)}]]
    [:p "Gender: "
     [:span [:label [:input {:type "radio"
                             :name "gender"
                             :value "M"
                             :checked (if (= (:gender user) "M") "checked")}] "Male"]
      [:label [:input {:type "radio"
                       :name "gender"
                       :value "F"
                       :checked (if (= (:gender user) "F") "checked")
                       }] "Female"]]]
    [:p "Date of birth: " [:input {:type "date" :name "bday" :value (:bday user)}]]
    [:p "Adress: " [:input {:type "text" :name "adress" :value (:adress user)}]]
    [:p "OMS: " [:input {:type "number" :name "oms" :value (:oms user)}]]
    [:p [:input {:type "submit" "value" "Edit user"}]]]
   ))

(def user-create
  (page/html5
   (gen-page-head "Create user")
   [:h1 "Create user"]
   [:form {:action "/create-user" :method "post"}
    [:p "Full name: " [:input {:type "text" :name "fname"}]]
    [:p "Gender: "
     [:span [:label [:input {:type "radio" :name "gender" :value "M"}] "Male"]
           [:label [:input {:type "radio" :name "gender" :value "F"}] "Female"]]]
    [:p "Date of birth: " [:input {:type "date" :name "bday"}]]
    [:p "Adress: " [:input {:type "text" :name "adress"}]]
    [:p "OMS: " [:input {:type "number" :name "oms"}]]
    [:p [:input {:type "submit" "value" "Create user"}]]]))

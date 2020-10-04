(ns crud.ui
  (:require [hiccup.page :as page]))

(defn gen-page-head
  [title, path]
  [:head (page/include-css path)
   [:meta {:charset "utf-8"}]
   [:title (str "Locations: " title)]])

(def main-page
  (page/html5
   (gen-page-head "Main page" "main.css")
   [:h1 "Welcome"]
   [:div
     [:a {:href "/patient/create" :class "btn-grad"}
      [:span "Create patient"]]
     [:a {:href "/patient/list" :class "btn-grad"}
      [:span "List patients"]]]))

(defn list-patients
  [users]
  (page/html5
   (gen-page-head "See users" "../table.css")
   [:div {:class "table-title"}
      [:h3 {:class "table-title"} "Patients"]
       [:table {:class "table-fill"}
        [:tbody
         [:tr {:class "text-left"}
          [:th {:class "text-left"} "First Name"]
          [:th {:class "text-left"} "Gender"]
          [:th {:class "text-left"} "Birth Date"]
          [:th {:class "text-left"} "Adress"]
          [:th {:class "text-left"} "oms"]
          [:th {:class "text-left"} "Delete"]
          [:th {:class "text-left"} "Edit"]]
        (for [user users]
          [:tr {:class "text-left"}
           [:td {:class "text-left"} (:firstname user)]
           [:td {:class "text-left"} (:gender user)]
           [:td {:class "text-left"} (:bday user)]
           [:td {:class "text-left"} (:adress user)]
           [:td {:class "text-left"} (:oms user)]
           [:td {:class "text-left"}
            [:form {:action "/patient/delete" :method "post"}
             [:button {:type "submit"
                       :name "fname"
                       :class "btn effect01"
                       :value (:firstname user)} "delete"]]]
           [:td {:class "text-left"}
            [:form {:action "/patient/edit" :method "post"}
             [:button {:type "submit"
                       :name "fname"
                       :class "btn effect01"
                       :value (:firstname user)} "edit"]]]])]]]
   ))

(defn edit-patient
  [user]
  (page/html5
   (println (str "Gender M: " (if (= (:gender user) "F") "checked")))
   (gen-page-head "Edit user" "../form.css")
   [:div {:class "container"}
     [:form {:id "patient" :action "/patient/edited" :method "post"}
      [:h3 "Edit user"]
      [:p "Full name: " [:input {:class "in" :type "text" :name "fname" :value (:firstname user)}]]
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
      [:p "Date of birth: " [:input {:class "in" :type "date" :name "bday" :value (:bday user)}]]
      [:p "Adress: " [:input {:class "in" :type "text" :name "adress" :value (:adress user)}]]
      [:p "OMS: " [:input {:class "in" :type "number" :name "oms" :value (:oms user)}]]
      [:p [:input {:type "submit" "value" "Edit user"}]]]]
   ))

(def create-patient
  (page/html5
   (gen-page-head "Create user" "../form.css")
   [:div {:class "container"}
     [:form {:id "patient" :action "/patient/create" :method "post"}
      [:h3 "Create user"]
      [:p "Full name: " [:input {:class "in" :type "text" :name "fname" :required "required"}]]
      [:p "Gender: "
       [:span [:label [:input {:type "radio" :name "gender" :value "M" :checked "true"}] "Male"]
             [:label [:input {:type "radio" :name "gender" :value "F"}] "Female"]]]
      [:p "Date of birth: " [:input {:class "in" :type "date" :name "bday" :required "required"}]]
      [:p "Adress: " [:input {:class "in" :type "text" :name "adress" :required "required"}]]
      [:p "OMS: " [:input {:class "in" :type "number" :name "oms" :required "required" :maxlength "12" :minlength "12"}]]
      [:p [:input {:type "submit" "value" "Create user"}]]]]))

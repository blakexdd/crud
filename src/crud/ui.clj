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

(defn patient-form
  [user action error button-name]
  (println (str "Action: " action))
  (page/html5
   (gen-page-head "Edit user" "../form.css")
   [:div {:class "container"}
     [:form {:id "patient" :action action :method "post"}
      [:h3 "Edit user"]
      [:p "Full name: " [:input {:class "in"
                                 :type "text"
                                 :name "fname"
                                 :value (if (:firstname user) (:firstname user) (:fname user))}]]
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
      [:p "Date of birth: "
       [:input {:class "in" :type "date" :name "bday" :value (:bday user)}]]
      [:p "Adress: "
       [:input {:class "in" :type "text" :name "adress" :value (:adress user)}]]
      [:p "OMS: "
       [:input {:class "in" :type "text" :name "oms" :required "required" :pattern "\\d{16,16}" :value (:oms user)}]]
      (when (not (nil? error))
       [:div {:class "err"} error])
      [:input {:type "hidden" :name "id" :value (:id user)}]
      [:p [:input {:type "submit" :value button-name}]]]]
   ))

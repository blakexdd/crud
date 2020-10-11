(ns crud.ui
  (:require [re-frame.core :as r]
            [crud.events]
            [crud.subs]))

(defn main-page
  []
  (fn
    []
    [:div
     [:h1.main-title "Welcome"]
     [:a.btn-grad {:href "/patient/create"}
      [:span "Create patient"]]
     [:a.btn-grad {:href "/patient/edit"}
      [:span "List patients"]]]))

(defn edit-patient []
  (fn []
    [:h1 "Editing patient"]))

(defn list-patients [users]
  (fn [users]
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
                      :value (:firstname user)} "edit"]]]])]]]))

(defn create-patient
  []
  (fn []
    [:div {:class "container"}
     [:div#patient
      [:h3 "Creating patient"]
      [:p "Full name: "
       [:input {
                 :class "in"
                 :type "text"
                 :name "name"
                 :required "required"
                 :on-change (fn [e] (r/dispatch [:name-changed (-> e .-target .-value)]))
                 }]]
      [:p (str "name " @(r/subscribe [:name]))]
      [:p "Gender: "
       [:label
        [:input {
                  :type "radio"
                  :name "gender"
                  :value "M"
                  :on-change (fn [e] (r/dispatch [:gender-changed (-> e .-target .-value)]))
                  }
         ] "Male"]
       [:label
        [:input
         {
           :type "radio"
           :name "gender"
           :value "F"
           :on-change (fn [e] (r/dispatch [:gender-changed (-> e .-target .-value)]))
           }] "Female"]]
      [:p (str "gender " @(r/subscribe [:gender]))]
      [:p "Date of birth: "
       [:input
        {
          :class "in"
          :type "date"
          :name "bday"
          :required "required"
          :on-change (fn [e] (r/dispatch [:bday-changed (-> e .-target .-value)]))
          }]]
      [:p (str "bday " @(r/subscribe [:bday]))]
      [:p "Adress: "
       [:input
        {
          :class "in"
          :type "text"
          :name "adress"
          :required "required"
          :on-change (fn [e] (r/dispatch [:adress-changed (-> e .-target .-value)]))
          }]]
      [:p (str "adress " @(r/subscribe [:adress]))]
      [:p "OMS: "
       [:input
        {
          :class "in"
          :type "text"
          :name "oms"
          :required "required"
          :pattern "\\d{16,16}"
          :on-change (fn [e] (r/dispatch [:oms-changed (-> e .-target .-value)]))
          }]]
      [:p (str "oms " @(r/subscribe [:oms]))]
      [:p
       [:input
        {
          :type "submit"
          :on-click #(r/dispatch [:create-patient-event])
          }
        ]]]]))
(ns crud.ui
  (:require [re-frame.core :as r]
            [reagent.core :as reagent]
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
     [:a.btn-grad {:href "/patient/list"}
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
  (let [default {:name "" :gender "" :bday "" :adress "" :oms ""}
        patient-data (reagent/atom default)]
  (fn []
    (let [{:keys [name gender bday adress oms]} @patient-data
          error @(r/subscribe [:name-error])
          create (fn [event patient-data]
                   (.preventDefault event)
                   (r/dispatch [:create-patient-event patient-data]))]
    [:div {:class "container"}
     [:form#patient {:on-submit #(create % @patient-data)}
      [:h3 "Creating patient"]
      (when error
            [:p error])
      [:p "Full name: "
       [:input {
                 :class "in"
                 :type "text"
                 :name "name"
                 :required "required"
                 :on-change #(swap! patient-data assoc :name (-> % .-target .-value))
                 }]]
      [:p "Gender: "
       [:label
        [:input {
                  :type "radio"
                  :name "gender"
                  :value "M"
                  :on-change #(swap! patient-data assoc :gender (-> % .-target .-value))
                  }
         ] "Male"]
       [:label
        [:input
         {
           :type "radio"
           :name "gender"
           :value "F"
           :on-change #(swap! patient-data assoc :gender (-> % .-target .-value))
           }] "Female"]]
      [:p "Date of birth: "
       [:input
        {
          :class "in"
          :type "date"
          :name "bday"
          :required "required"
          :on-change #(swap! patient-data assoc :bday (-> % .-target .-value))
          }]]
      [:p "Adress: "
       [:input
        {
          :class "in"
          :type "text"
          :name "adress"
          :required "required"
          :on-change #(swap! patient-data assoc :adress (-> % .-target .-value))
          }]]
      [:p "OMS: "
       [:input
        {
          :class "in"
          :type "text"
          :name "oms"
          :required "required"
          :pattern "\\d{16,16}"
          :on-change #(swap! patient-data assoc :oms (-> % .-target .-value))
          }]]
      [:p
       [:input
        {
          :type "submit"
          }
        ]]]]))))
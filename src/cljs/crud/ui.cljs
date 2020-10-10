(ns crud.ui)

(defn main-page
  []
  [:div
   [:h1.main-title "Welcome"]
   [:a.btn-grad {:href "/patient/create"}
    [:span "Create patient"]]
   [:a.btn-grad {:href "/patient/list"}
    [:span "List patients"]]])
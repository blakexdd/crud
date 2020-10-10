(ns crud.core
  (:require
    [reagent.core :as reagent :refer [atom]]
    [reagent.dom :as rdom]
    [reagent.session :as session]
    [reitit.frontend :as reitit]
    [clerk.core :as clerk]
    [accountant.core :as accountant]
    [crud.ui :as ui]))

(def router
  (reitit/router
   [["/" :index]
    ["/patient"
     ["/create" :create-patient]
     ["/edit" :edit-patient]
     ["/list" :list-patients]]
    ]))

(defn path-for [route & [params]]
  (if params
    (:path (reitit/match-by-name router route params))
    (:path (reitit/match-by-name router route))))

(defn page-for [route]
  (case route
        :index #'ui/main-page
        :create-patient #'ui/create-patient
        :edit-patient #'ui/edit-patient
        :list-patients #'ui/list-patients))

(defn current-page []
  (fn []
    (let [page (:current-page (session/get :route))]
       [page])))

(defn mount-root []
  (rdom/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (clerk/initialize!)
  (accountant/configure-navigation!
   {:nav-handler
    (fn [path]
      (let [match (reitit/match-by-path router path)
            current-page (:name (:data  match))
            route-params (:path-params match)]
        (reagent/after-render clerk/after-render!)
        (session/put! :route {:current-page (page-for current-page)
                              :route-params route-params})
        (clerk/navigate-page! path)
        ))
    :path-exists?
    (fn [path]
      (boolean (reitit/match-by-path router path)))})
  (accountant/dispatch-current!)
  (mount-root))

;(ns crud.router
;  (:require    [reitit.frontend :as reitit]
;            [crud.ui :as ui]))
;
;(def router
;   (reitit/router
;    ["/" #'ui/main-page]
;    ["/patinet"
;     ["/create" #'ui/create-user]]
;    ))
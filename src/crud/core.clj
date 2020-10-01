(ns crud.core
  (:gen-class)
  (:require [reitit.ring :as ring]))

(defn app [_]
  (ring/handler
   (ring/router
    [["/" {:handler default}]
     ["/user"
      ["/list" {:handler list-users}]
      ["/create" {:handler create-user}]
      ["/edit" {:handler edit-user}]
      ["/delete" {:handler delete-user}]])))

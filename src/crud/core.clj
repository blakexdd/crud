(ns crud.core
  (:gen-class)
  (:require [ring.adapter.jetty :as jetty]
            [crud.router :as router]
            [crud.db :refer [db]]
            [crud.sql :as sql]))

(defn -main
  [& args]
  (println "Starting server")
  ;(sql/drop-patients-table db)
  (sql/create-patients-table db)
  ;(sql/add db)
  ;(clojure.pprint/pprint (sql/get-all db))
  (jetty/run-jetty #'router/app {:port 8080})
)

(ns crud.core
  (:gen-class)
  (:require [ring.adapter.jetty :as jetty]
            [crud.router :as router]))

(defn -main
  [& args]
  (println "Starting server")
  (jetty/run-jetty #'router/app {:port 8080})
)

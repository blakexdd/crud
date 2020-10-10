(ns crud.core
  (:gen-class)
  (:require [ring.adapter.jetty :as jetty]
            [crud.router :as router]
            [crud.db :refer [db]]
            [crud.sql :as sql]
            [integrant.core :as ig]
            [integrant.repl :refer [go halt]]))

(def config
  {:adapter/jetty {:handler (ig/ref :handler/run-app) :port 8080}
   :handler/run-app {:db (ig/ref :database/connection)}
   :database/connection {:dbname "users"}})

(defmethod ig/init-key :adapter/jetty [_ {:keys [handler] :as opts}]
  (jetty/run-jetty handler (-> opts
                               (dissoc handler)
                               (assoc :join? false))))

(defmethod ig/init-key :handler/run-app
  [_ {:keys [db]}]
  (router/app db))

(defmethod ig/init-key :database/connection
  [_ _]
  (sql/create-patients-table db)
  db
  )

(defmethod ig/halt-key! :adapter/jetty [_ server]
  (.stop server))

(defn -main
  [& args]
  (ig/init config)
  ((router/app db) {:request-method :get :uri "/"})
  (println "Server started")
)

(ns crud.db)

(def db
  {:classname "org.postgresql.Driver"
   :subprotocol "postgresql"
   :subname (str "//" (System/getenv "DB_HOST") ":" (System/getenv "DB_PORT") "/users")
   :user "postgres"
   :password (System/getenv "DB_PASSWORD")
   :sslmode "disable"
   })

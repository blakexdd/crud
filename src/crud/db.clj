(ns crud.db)

(def db
  {:classname "org.postgresql.Driver"
   :subprotocol "postgresql"
   :subname "//localhost:5432/users"
   :user "admin"
   :password "1234"
   :sslmode "require"
   })

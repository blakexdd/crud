(ns crud.db)

(def db
  {:classname "org.postgresql.Driver"
   :subprotocol "postgresql"
   :subname "//my_db:5432/users"
   :user "postgres"
   :password "1234"
   :sslmode "disable"
   })

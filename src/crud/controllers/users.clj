(ns crud.controllers.users)

(defn default
  [req]
  {
   :status 200
   :headers {"Content-Type" "text/html"}
   :body "Works"})

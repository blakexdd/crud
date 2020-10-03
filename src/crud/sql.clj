(ns crud.sql
  (:require [hugsql.core :as hugsql]))

(hugsql/def-db-fns "crud/sql/crud.sql")

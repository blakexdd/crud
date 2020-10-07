(defproject crud "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [metosin/reitit "0.5.6"]
                 [ring "1.8.1"]
                 [reagent "1.0.0-alpha2"]
                 [org.postgresql/postgresql "9.4.1207"]
                 [com.layerware/hugsql "0.4.5"]
                 [integrant "0.8.0"]
                 [integrant/repl "0.3.2"]
                 [environ "1.2.0"]]
  :plugins [[lein-cloverage "1.1.2"]]
  :main ^:skip-aot crud.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})

(defproject crud "0.1.0-SNAPSHOT"
  :description "Crud application"
  :url ".."
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :source-paths ["src/clj" "src/cljs"]
  :main crud.core

  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/clojurescript "1.10.773"]
                 [reagent "0.10.0"]
                 [reagent-utils "0.3.3"]
                 [hiccup "1.0.5"]
                 [metosin/jsonista "0.2.6"]
                 [pez/clerk "1.0.0"]
                 [re-frame "1.1.1"]
                 [metosin/reitit "0.5.6"]
                 [ring "1.8.1"]
                 [org.postgresql/postgresql "9.4.1207"]
                 [com.layerware/hugsql "0.4.5"]
                 [integrant "0.8.0"]
                 [integrant/repl "0.3.2"]
                 [cljs-ajax "0.7.3"]
                 [day8.re-frame/http-fx "0.2.1"]
                 [venantius/accountant "0.2.5"
                  :exclusions [org.clojure/tools.reader]]]

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.20"]]

  :clean-targets ^{:protect false}

                 [:target-path
                  [:cljsbuild :builds :app :compiler :output-dir]
                  [:cljsbuild :builds :app :compiler :output-to]]

  :resource-paths ["public"]

  :figwheel {:http-server-root "."
             :nrepl-port 7002
             :nrepl-middleware [cider.piggieback/wrap-cljs-repl]
             :css-dirs ["public/css"]}

  :cljsbuild {:builds {:app
                       {:source-paths ["src" "env/dev/cljs"]
                        :compiler
                        {:main "crud.dev"
                         :output-to "public/js/app.js"
                         :output-dir "public/js/out"
                         :asset-path "js/out"
                         :source-map true
                         :optimizations :none
                         :pretty-print  true}
                        :figwheel
                        {:on-jsload "crud.core/mount-root"
                         :open-urls ["http://localhost:3449"]}}
                       :release
                       {:source-paths ["src" "env/prod/cljs"]
                        :compiler
                        {:output-to "public/js/app.js"
                         :output-dir "target/release"
                         :optimizations :advanced
                         :infer-externs true
                         :pretty-print false}}}}

  :aliases {"package" ["do" "clean" ["cljsbuild" "once" "release"]]}

  :profiles {:dev {:source-paths ["src" "env/dev/clj"]
                   :dependencies [[binaryage/devtools "1.0.2"]
                                  [figwheel-sidecar "0.5.20"]
                                  [nrepl "0.7.0"]
                                  [cider/piggieback "0.5.0"]]}})

"use strict";

function imbalanced(){
    let data = [{"label": "0", "val":4987},{"label": "1", "val":393}];

    var vlSpec = {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "description": "A simple bar chart with embedded data.",
        "width":300,
        "data": {
            "values": data
        },
        "layer":[
            {
                "mark": "bar",
                "encoding": {
                    "x": {
                        "field": "label",
                    },

                    "y": {
                        "field": "val",
                        "type": "quantitative",
                    },
                    "color":{"field":'label'}
                }
            }
        ]
    }

    var vlOpts = {width: 280, height:280, actions:false};
    vegaEmbed("#imbalanced", vlSpec, vlOpts);
}
imbalanced()

function explore(){
    var vlSpec = {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "repeat": ["Customer_Type","P_Client","Educational_Level","Marital_Status","Number_Of_Dependant",
            "Prod_Sub_Category","Source", "is_closed_date"],
        "description": "A simple bar chart with embedded data.",
        "columns": 4,
        "spec": {
            "data": {
                "url": "/credit.csv"
            },
            "width":100,
            "mark": "bar",
            "encoding": {
                "x": {"field": {"repeat": "repeat"}},
                "y": {"aggregate": "count"},
                "color": {"field": "Y"}
            }
        }
    }


    var vlOpts = {width: 280, height:280, actions:false};
    vegaEmbed("#explore", vlSpec, vlOpts);
}

explore()

function result(){
    let data = [
        {"name":     "LogisticRegression", "rc" :  0.846154, "acc" :  0.893023},
        {"name":          "XGBClassifier", "rc" :  0.858974, "acc" :  0.880930},
        {"name": "RandomForestClassifier", "rc" :  0.833333, "acc" :  0.903256},
        {"name":          "MLPClassifier", "rc" :  0.910256, "acc" :  0.825116},
        {"name":     "AdaBoostClassifier", "rc" :  0.833333, "acc" :  0.890233},
        {"name":         "LGBMClassifier", "rc" :  0.910256, "acc" :  0.842791},
        {"name": "DecisionTreeClassifier", "rc" :  0.846154, "acc" :  0.906047},
    ];

    var vlSpec = {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "description": "A simple bar chart with embedded data.",
        "width":300,
        "data": {
            "values": data
        },
        "title":'recall score',
        "mark": "bar",
        "encoding": {
            "x": {
                "field": "name",
            },

            "y": {
                "field": "rc",
                "type": "quantitative",
            },
            "color":{"field":'name'}
        }
    }

    var vlOpts = {width: 280, height:280, actions:false};
    vegaEmbed("#result", vlSpec, vlOpts);
}
result()

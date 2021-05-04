---
author: Océane Koffi
title: Credit default prediction
date: 2021-04-07
description: predict credit default risk
tags:
- machine learning
categories: []
series: []
aliases: []
ShowToc: true
math: true
TocOpen: true
weight: "-20"
cover:
  image: "/images/default.png"
  alt: ''
  caption: 
  relative: false
  hidden: false
comments: false

---
{{< rawhtml >}}
<script src="https://cdn.jsdelivr.net/npm/vega@5.16.1"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-lite@4.16.7"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-embed@6.12.2"></script>
{{< /rawhtml >}}

In this work , I was trying to predict credit default risk. I was dealing with historical credit clients informations and are willing to predict whether or not a client will reimbursed his credit . First of all , I analyze and clean the data . Then , extract relevelant pattern in data . Choose /Train models and optimize the most promising . And at the end , Stacking them for having a strong predictor .

# 🎯 What?

The world is currently going through a health crisis, which is putting some people in difficulty. Indeed COVID-19, affects companies and people. In one way or another, there is an economic crisis linked to this pandemic. This unforeseen situation increases the risk of default by companies as well as individuals.

Credit risk is defined as the risk that a borrower will default on its commitments: that it will be unable to keep its promise to pay interest on time or to repay the principal when due.

Here we try to predict the risk for people to make default giving information about them.

# ⚙️ Difficulty

Most of the time the data we have to learn is unbalanced. In our case for example there are less than 10% of people who have made credits. This makes the training more complicated and leads us to use specialised training techniques for this kind of data.

<div class="col d-flex justify-content-center">
<div id="imbalanced"></div>
</div>

# 📈 The data description

* The dataset includes 5380 uniques clients with 19 differents informations .
* There are many (13) categorical variables ( Custuomer_Type , Education_level , Marital_status …)  and only 5 numerical data.
* Many of the explanatory variables are categorical. From then on we understand that one of the determining factors will be the encoding of these variable ,we will discuss this part in the feature engineering section.

**Exploration**

<div class="col d-flex justify-content-center">
<div id="explore"></div>
</div>

* The customer category type _”P_client”_ is an important factor in discriminating those who are most likely to default.
* We also notice that individuals with an _”is_closed_date”_ of the product are more likely to default than those who do not.
* Moreover the fact that he is in a _”Marital_status”_ couple gives him more chance to default than if he was not.

**Feature importance**

Features importances show that the new features are _relevants_, so we will use them in training our models to predict credit default.

# 🤖 Our models

**Sampling Methods**

We explore two sampling methods:

* Undersapling (Random and NearMiss)
* Oversampling (Random and SMOTE)

![sampling methods](https://raw.githubusercontent.com/rafjaa/machine_learning_fecib/master/src/static/img/resampling.png)

And the best the best sampling method was random over sampling.

**Model**

We train 5 models using this sampling model:

* XGBClassifier
* AdaboostClassifier
* LBGMClassifier
* LogisticRegression
* MLPClassifier
* RandomForestClassifier

# 🥊 Result

We train many models using this sampling methods and bellow is our result :

<div class="col d-flex justify-content-center">
<div id="result"></div>
</div>

<script src="/default.js"></script>
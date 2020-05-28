#!/bin/bash

dsbulk load -url /Users/maximrietveld/git/sdc/sdc-maxim/sdc-server/lib/data/cqlProductData.csv -k target_reviews -t products -h '127.0.0.1' -header true

dsbulk load -url /Users/maximrietveld/git/sdc/sdc-maxim/sdc-server/lib/data/cqlReviewData1.csv -k target_reviews -t reviews -h '127.0.0.1' -header true

dsbulk load -url /Users/maximrietveld/git/sdc/sdc-maxim/sdc-server/lib/data/cqlReviewData2.csv -k target_reviews -t reviews -h '127.0.0.1' -header true
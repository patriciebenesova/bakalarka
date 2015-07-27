$ awk '$1 ~ /J/' inventory-shipped
-| Jan  13  25  15 115
-| Jun  31  42  75 492
-| Jul  24  34  67 436
-| Jan  21  36  64 620

awk '{ if ($1 ~ /J/) print }'
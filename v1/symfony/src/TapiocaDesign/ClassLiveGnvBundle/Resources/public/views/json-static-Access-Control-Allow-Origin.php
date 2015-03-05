<?php
header("Access-Control-Allow-Origin: *");

$t = '[
[
{
"id": 104,
"work": {
"id": 61,
"name": "Chœurs de l’Armée rouge, une Nuit à l’Opéra",
"name_url": "coeur_armee_rouge_nuit_opera",
"interpreter": "Chœurs de l’Armée rouge"
},
"place": {
"id": 16,
"name_url": "arena_geneve",
"name_short": "Arena",
"name_fr": "Arena de Genève",
"name_en": "Geneva Arena"
},
"date_performance": "2015-11-06T20:00:00+0100",
"ticket_website": "http://www.opus-one.ch/artiste/index.lbl?u=69E616A6-C70D-45B1-84E2-8094B7FBA110&r=F975B646-F534-4402-9630-CDCCA3AC692C"
},
"2015-11-06T20:00:00+01:00"
],
[
{
"id": 103,
"work": {
"id": 60,
"name": "Angelo Branduardi",
"name_url": "angelobranduardi"
},
"place": {
"id": 3,
"name_url": "theatre_leman",
"name_short": "T. du Léman",
"name_fr": "Théâtre du Léman",
"name_en": "Leman theater",
"google_map_ref": "1991891"
},
"date_performance": "2015-10-28T20:30:00+0100",
"ticket_website": "http://www.opus-one.ch/artiste/index.lbl?u=700289F0-B25B-40C9-B4E5-EEA6498DDD9D&r=E0981E9C-F960-4D24-9BE4-0FEAB0653AC4"
},
"2015-10-28T20:30:00+01:00"
]
]';

echo $t;

?>
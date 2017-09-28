var h = 1000;
var w = 1450;

var radar_arcs = [
  {
    "name": "ADOPT",
    "r": 130
  },
  {
    "name": "TRIAL",
    "r": 220
  },
  {
    "name": "ASSESS",
    "r": 310
  },
  {
    "name": "HOLD",
    "r": 400
  }
];

// movement:
//   t = moved (triangle)
//   c = stayed put (circle)
//
// blipSize: 
//  This is optional, if you omit this property, then blip size will be 70.
//
// url:
//  This is optional, if you add it then blips will be clickable to some URL.
//
// pc: (polar coordinates)
//  r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//  t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
var radar_data = [
  { 
    "quadrant": "Techniques; Frameworks & Tools",
    "left" : 45,
    "top" : 188,
    "color" : "#8FA227",
    "items" : [
  {
    "name": "Guava",
    "pc": {
      "r": 90,
      "t": 165
    },
    "movement": "c"
  },
  {
    "name": "Maven",
    "pc": {
      "r": 82,
      "t": 152
    },
    "movement": "c"
  },
  {
    "name": "Akka (.Net)",
    "pc": {
      "r": 262,
      "t": 116
    },
    "movement": "c"
  },
  {
    "name": "BackboneJS",
    "pc": {
      "r": 244,
      "t": 106
    },
    "movement": "c"
  },
  {
    "name": "Gradle",
    "pc": {
      "r": 140,
      "t": 146
    },
    "movement": "c"
  },
  {
    "name": "jQuery",
    "pc": {
      "r": 159,
      "t": 122
    },
    "movement": "c"
  },
  {
    "name": "Node.js",
    "pc": {
      "r": 153,
      "t": 98
    },
    "movement": "c"
  },
  {
    "name": "OpenAPI (Swagger)",
    "pc": {
      "r": 152,
      "t": 110
    },
    "movement": "c"
  },
  {
    "name": "ReactJS",
    "pc": {
      "r": 154,
      "t": 134
    },
    "movement": "c"
  },
  {
    "name": "Redux",
    "pc": {
      "r": 188,
      "t": 170
    },
    "movement": "c"
  },
  {
    "name": "Sbt",
    "pc": {
      "r": 174,
      "t": 158
    },
    "movement": "c"
  },
  {
    "name": "Spray",
    "pc": {
      "r": 180,
      "t": 128
    },
    "movement": "c"
  }
]
  },
  { 
    "quadrant": "Data Management",
    "left": w-300+30,
    "top" : 188,
    "color" : "#587486",
    "items" : [
  {
    "name": "Aerospike",
    "pc": {
      "r": 276,
      "t": 6
    },
    "movement": "c"
  },
  {
    "name": "AWS Aurora",
    "pc": {
      "r": 256,
      "t": 26
    },
    "movement": "c"
  },
  {
    "name": "AWS DynamoDB",
    "pc": {
      "r": 285,
      "t": 16
    },
    "movement": "c"
  },
  {
    "name": "Azure CosmosDB",
    "pc": {
      "r": 258,
      "t": 66
    },
    "movement": "c"
  },
  {
    "name": "Azure EventHub",
    "pc": {
      "r": 261,
      "t": 46
    },
    "movement": "c"
  },
  {
    "name": "Azure SQL Data Warehouse",
    "pc": {
      "r": 270,
      "t": 76
    },
    "movement": "c"
  },
  {
    "name": "Azure Tables",
    "pc": {
      "r": 288,
      "t": 36
    },
    "movement": "c"
  },
  {
    "name": "ElasticSearch",
    "pc": {
      "r": 237,
      "t": 56
    },
    "movement": "c"
  },
  {
    "name": "Hadoop/HBase",
    "pc": {
      "r": 275,
      "t": 31
    },
    "movement": "c"
  },
  {
    "name": "MongoDB",
    "pc": {
      "r": 237,
      "t": 21
    },
    "movement": "c"
  },
  {
    "name": "MS SQL (on prem)",
    "pc": {
      "r": 244,
      "t": 11
    },
    "movement": "c"
  },
  {
    "name": "MySQL",
    "pc": {
      "r": 283,
      "t": 41
    },
    "movement": "c"
  },
  {
    "name": "Neo4j",
    "pc": {
      "r": 292,
      "t": 61
    },
    "movement": "c"
  },
  {
    "name": "Spark",
    "pc": {
      "r": 299,
      "t": 81
    },
    "movement": "c"
  },
  {
    "name": "Azure Stream Analytics",
    "pc": {
      "r": 323,
      "t": 44
    },
    "movement": "c"
  },
  {
    "name": "Algolia",
    "pc": {
      "r": 183,
      "t": 68
    },
    "movement": "c"
  },
  {
    "name": "Apache Drill",
    "pc": {
      "r": 144,
      "t": 8
    },
    "movement": "c"
  },
  {
    "name": "AWS RedShift",
    "pc": {
      "r": 168,
      "t": 32
    },
    "movement": "c"
  },
  {
    "name": "AWS S3",
    "pc": {
      "r": 194,
      "t": 80
    },
    "movement": "c"
  },
  {
    "name": "AWS SNS",
    "pc": {
      "r": 181,
      "t": 44
    },
    "movement": "c"
  },
  {
    "name": "AWS SQS",
    "pc": {
      "r": 194,
      "t": 56
    },
    "movement": "c"
  },
  {
    "name": "Azure Blobs",
    "pc": {
      "r": 164,
      "t": 20
    },
    "movement": "c"
  },
  {
    "name": "Azure Service Bus",
    "pc": {
      "r": 209,
      "t": 50
    },
    "movement": "c"
  },
  {
    "name": "Azure SQL",
    "pc": {
      "r": 198,
      "t": 26
    },
    "movement": "c"
  },
  {
    "name": "Flink",
    "pc": {
      "r": 187,
      "t": 38
    },
    "movement": "c"
  },
  {
    "name": "Hadoop/HDFS",
    "pc": {
      "r": 174,
      "t": 14
    },
    "movement": "c"
  }
]
  },
  {   
    "quadrant": "Platforms & Infrastructure",
    "left" :45,
    "top" : (h/2 + 38),
    "color" : "#DC6F1D",
    "items" : [
  {
    "name": "AWS EC2",
    "pc": {
      "r": 71,
      "t": 203
    },
    "movement": "c"
  },
  {
    "name": "NewRelic",
    "pc": {
      "r": 62,
      "t": 242
    },
    "movement": "c"
  },
  {
    "name": "Pingdom",
    "pc": {
      "r": 65,
      "t": 216
    },
    "movement": "c"
  },
  {
    "name": "slf4j",
    "pc": {
      "r": 72,
      "t": 229
    },
    "movement": "c"
  },
  {
    "name": "AWS ELB",
    "pc": {
      "r": 253,
      "t": 246
    },
    "movement": "c"
  },
  {
    "name": "Google cloud VMs",
    "pc": {
      "r": 296,
      "t": 206
    },
    "movement": "c"
  },
  {
    "name": "Graphana",
    "pc": {
      "r": 244,
      "t": 226
    },
    "movement": "c"
  },
  {
    "name": "Kubernetes",
    "pc": {
      "r": 294,
      "t": 256
    },
    "movement": "c"
  },
  {
    "name": "log4j",
    "pc": {
      "r": 235,
      "t": 216
    },
    "movement": "c"
  },
  {
    "name": "Prometheus",
    "pc": {
      "r": 297,
      "t": 186
    },
    "movement": "c"
  },
  {
    "name": "Rancher",
    "pc": {
      "r": 253,
      "t": 196
    },
    "movement": "c"
  },
  {
    "name": "saltstack",
    "pc": {
      "r": 239,
      "t": 236
    },
    "movement": "c"
  },
  {
    "name": "Takipi",
    "pc": {
      "r": 288,
      "t": 231
    },
    "movement": "c"
  },
  {
    "name": "Soasta",
    "pc": {
      "r": 374,
      "t": 216
    },
    "movement": "c"
  },
  {
    "name": "AWS ALB",
    "pc": {
      "r": 146,
      "t": 212
    },
    "movement": "c"
  },
  {
    "name": "AWS Lambda",
    "pc": {
      "r": 167,
      "t": 248
    },
    "movement": "c"
  },
  {
    "name": "Azure Automation",
    "pc": {
      "r": 149,
      "t": 236
    },
    "movement": "c"
  },
  {
    "name": "Azure cloud VMs",
    "pc": {
      "r": 158,
      "t": 188
    },
    "movement": "c"
  },
  {
    "name": "Azure functions",
    "pc": {
      "r": 148,
      "t": 200
    },
    "movement": "c"
  },
  {
    "name": "Azure ML",
    "pc": {
      "r": 149,
      "t": 224
    },
    "movement": "c"
  },
  {
    "name": "Consul",
    "pc": {
      "r": 185,
      "t": 260
    },
    "movement": "c"
  },
  {
    "name": "Docker",
    "pc": {
      "r": 149,
      "t": 254
    },
    "movement": "c"
  },
  {
    "name": "log4j2",
    "pc": {
      "r": 155,
      "t": 230
    },
    "movement": "c"
  },
  {
    "name": "Nginx",
    "pc": {
      "r": 203,
      "t": 218
    },
    "movement": "c"
  },
  {
    "name": "PagerDuty",
    "pc": {
      "r": 145,
      "t": 242
    },
    "movement": "c"
  },
  {
    "name": "Twilio",
    "pc": {
      "r": 153,
      "t": 206
    },
    "movement": "c"
  }
]
  },
  { 
    "quadrant": "Languages",
    "color" : "#B70062",
    "left"  : (w-300+30),
    "top" :   (h/2 + 38),
    "items" : [
  {
    "name": ".NET 4.x/ languages",
    "pc": {
      "r": 57,
      "t": 306
    },
    "movement": "c"
  },
  {
    "name": "Javascript",
    "pc": {
      "r": 92,
      "t": 319
    },
    "movement": "c"
  },
  {
    "name": "Julia",
    "pc": {
      "r": 258,
      "t": 336
    },
    "movement": "c"
  },
  {
    "name": "Python",
    "pc": {
      "r": 274,
      "t": 296
    },
    "movement": "c"
  },
  {
    "name": "R",
    "pc": {
      "r": 273,
      "t": 316
    },
    "movement": "c"
  },
  {
    "name": "Typescript",
    "pc": {
      "r": 251,
      "t": 306
    },
    "movement": "c"
  },
  {
    "name": ".NET Core/ languages",
    "pc": {
      "r": 186,
      "t": 350
    },
    "movement": "c"
  },
  {
    "name": "Swift",
    "pc": {
      "r": 200,
      "t": 290
    },
    "movement": "c"
  }
]
  }
];

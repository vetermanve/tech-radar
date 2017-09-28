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
      "r": 93,
      "t": 139
    },
    "movement": "c"
  },
  {
    "name": "Maven",
    "pc": {
      "r": 107,
      "t": 152
    },
    "movement": "c"
  },
  {
    "name": "Akka (.Net)",
    "pc": {
      "r": 244,
      "t": 116
    },
    "movement": "c"
  },
  {
    "name": "BackboneJS",
    "pc": {
      "r": 245,
      "t": 156
    },
    "movement": "c"
  },
  {
    "name": "Gradle",
    "pc": {
      "r": 161,
      "t": 110
    },
    "movement": "c"
  },
  {
    "name": "jQuery",
    "pc": {
      "r": 162,
      "t": 122
    },
    "movement": "c"
  },
  {
    "name": "Node.js",
    "pc": {
      "r": 163,
      "t": 146
    },
    "movement": "c"
  },
  {
    "name": "OpenAPI (Swagger)",
    "pc": {
      "r": 188,
      "t": 170
    },
    "movement": "c"
  },
  {
    "name": "ReactJS",
    "pc": {
      "r": 193,
      "t": 98
    },
    "movement": "c"
  },
  {
    "name": "Redux",
    "pc": {
      "r": 172,
      "t": 134
    },
    "movement": "c"
  },
  {
    "name": "Sbt",
    "pc": {
      "r": 192,
      "t": 158
    },
    "movement": "c"
  },
  {
    "name": "Spray",
    "pc": {
      "r": 173,
      "t": 152
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
      "r": 297,
      "t": 36
    },
    "movement": "c"
  },
  {
    "name": "AWS Aurora",
    "pc": {
      "r": 267,
      "t": 76
    },
    "movement": "c"
  },
  {
    "name": "AWS DynamoDB",
    "pc": {
      "r": 278,
      "t": 46
    },
    "movement": "c"
  },
  {
    "name": "Azure CosmosDB",
    "pc": {
      "r": 286,
      "t": 66
    },
    "movement": "c"
  },
  {
    "name": "Azure EventHub",
    "pc": {
      "r": 249,
      "t": 26
    },
    "movement": "c"
  },
  {
    "name": "Azure SQL Data Warehouse",
    "pc": {
      "r": 255,
      "t": 56
    },
    "movement": "c"
  },
  {
    "name": "Azure Tables",
    "pc": {
      "r": 261,
      "t": 16
    },
    "movement": "c"
  },
  {
    "name": "ElasticSearch",
    "pc": {
      "r": 299,
      "t": 6
    },
    "movement": "c"
  },
  {
    "name": "Hadoop/HBase",
    "pc": {
      "r": 261,
      "t": 61
    },
    "movement": "c"
  },
  {
    "name": "MongoDB",
    "pc": {
      "r": 263,
      "t": 21
    },
    "movement": "c"
  },
  {
    "name": "MS SQL (on prem)",
    "pc": {
      "r": 299,
      "t": 81
    },
    "movement": "c"
  },
  {
    "name": "MySQL",
    "pc": {
      "r": 234,
      "t": 31
    },
    "movement": "c"
  },
  {
    "name": "Neo4j",
    "pc": {
      "r": 233,
      "t": 11
    },
    "movement": "c"
  },
  {
    "name": "Spark",
    "pc": {
      "r": 286,
      "t": 71
    },
    "movement": "c"
  },
  {
    "name": "Azure Stream Analytics",
    "pc": {
      "r": 326,
      "t": 28
    },
    "movement": "c"
  },
  {
    "name": "Algolia",
    "pc": {
      "r": 170,
      "t": 20
    },
    "movement": "c"
  },
  {
    "name": "Apache Drill",
    "pc": {
      "r": 152,
      "t": 8
    },
    "movement": "c"
  },
  {
    "name": "AWS RedShift",
    "pc": {
      "r": 157,
      "t": 68
    },
    "movement": "c"
  },
  {
    "name": "AWS S3",
    "pc": {
      "r": 162,
      "t": 56
    },
    "movement": "c"
  },
  {
    "name": "AWS SNS",
    "pc": {
      "r": 168,
      "t": 44
    },
    "movement": "c"
  },
  {
    "name": "AWS SQS",
    "pc": {
      "r": 169,
      "t": 80
    },
    "movement": "c"
  },
  {
    "name": "Azure Blobs",
    "pc": {
      "r": 199,
      "t": 32
    },
    "movement": "c"
  },
  {
    "name": "Azure Service Bus",
    "pc": {
      "r": 159,
      "t": 38
    },
    "movement": "c"
  },
  {
    "name": "Azure SQL",
    "pc": {
      "r": 140,
      "t": 26
    },
    "movement": "c"
  },
  {
    "name": "Flink",
    "pc": {
      "r": 204,
      "t": 14
    },
    "movement": "c"
  },
  {
    "name": "Hadoop/HDFS",
    "pc": {
      "r": 155,
      "t": 74
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
      "r": 96,
      "t": 255
    },
    "movement": "c"
  },
  {
    "name": "NewRelic",
    "pc": {
      "r": 64,
      "t": 203
    },
    "movement": "c"
  },
  {
    "name": "Pingdom",
    "pc": {
      "r": 53,
      "t": 229
    },
    "movement": "c"
  },
  {
    "name": "slf4j",
    "pc": {
      "r": 70,
      "t": 242
    },
    "movement": "c"
  },
  {
    "name": "AWS ELB",
    "pc": {
      "r": 247,
      "t": 236
    },
    "movement": "c"
  },
  {
    "name": "Google cloud VMs",
    "pc": {
      "r": 296,
      "t": 186
    },
    "movement": "c"
  },
  {
    "name": "Graphana",
    "pc": {
      "r": 242,
      "t": 196
    },
    "movement": "c"
  },
  {
    "name": "Kubernetes",
    "pc": {
      "r": 277,
      "t": 206
    },
    "movement": "c"
  },
  {
    "name": "log4j",
    "pc": {
      "r": 240,
      "t": 246
    },
    "movement": "c"
  },
  {
    "name": "Prometheus",
    "pc": {
      "r": 277,
      "t": 256
    },
    "movement": "c"
  },
  {
    "name": "Rancher",
    "pc": {
      "r": 242,
      "t": 226
    },
    "movement": "c"
  },
  {
    "name": "saltstack",
    "pc": {
      "r": 250,
      "t": 216
    },
    "movement": "c"
  },
  {
    "name": "Takipi",
    "pc": {
      "r": 269,
      "t": 211
    },
    "movement": "c"
  },
  {
    "name": "Soasta",
    "pc": {
      "r": 327,
      "t": 184
    },
    "movement": "c"
  },
  {
    "name": "AWS ALB",
    "pc": {
      "r": 172,
      "t": 200
    },
    "movement": "c"
  },
  {
    "name": "AWS Lambda",
    "pc": {
      "r": 178,
      "t": 248
    },
    "movement": "c"
  },
  {
    "name": "Azure Automation",
    "pc": {
      "r": 199,
      "t": 224
    },
    "movement": "c"
  },
  {
    "name": "Azure cloud VMs",
    "pc": {
      "r": 185,
      "t": 236
    },
    "movement": "c"
  },
  {
    "name": "Azure functions",
    "pc": {
      "r": 203,
      "t": 212
    },
    "movement": "c"
  },
  {
    "name": "Azure ML",
    "pc": {
      "r": 205,
      "t": 260
    },
    "movement": "c"
  },
  {
    "name": "Consul",
    "pc": {
      "r": 173,
      "t": 188
    },
    "movement": "c"
  },
  {
    "name": "Docker",
    "pc": {
      "r": 167,
      "t": 230
    },
    "movement": "c"
  },
  {
    "name": "log4j2",
    "pc": {
      "r": 180,
      "t": 218
    },
    "movement": "c"
  },
  {
    "name": "Nginx",
    "pc": {
      "r": 208,
      "t": 206
    },
    "movement": "c"
  },
  {
    "name": "PagerDuty",
    "pc": {
      "r": 209,
      "t": 242
    },
    "movement": "c"
  },
  {
    "name": "Twilio",
    "pc": {
      "r": 180,
      "t": 194
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
      "r": 73,
      "t": 293
    },
    "movement": "c"
  },
  {
    "name": "Javascript",
    "pc": {
      "r": 59,
      "t": 280
    },
    "movement": "c"
  },
  {
    "name": "Julia",
    "pc": {
      "r": 255,
      "t": 346
    },
    "movement": "c"
  },
  {
    "name": "Python",
    "pc": {
      "r": 292,
      "t": 306
    },
    "movement": "c"
  },
  {
    "name": "R",
    "pc": {
      "r": 264,
      "t": 276
    },
    "movement": "c"
  },
  {
    "name": "Typescript",
    "pc": {
      "r": 234,
      "t": 296
    },
    "movement": "c"
  },
  {
    "name": ".NET Core/ languages",
    "pc": {
      "r": 210,
      "t": 290
    },
    "movement": "c"
  },
  {
    "name": "Swift",
    "pc": {
      "r": 153,
      "t": 350
    },
    "movement": "c"
  }
]
  }
];

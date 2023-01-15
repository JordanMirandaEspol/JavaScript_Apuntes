const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
      "artist": "Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }
  ];
myMusic[0]["Vendido"]=true;
  console.log(myMusic[0]);
  console.log(myMusic[0].artist);
  console.log(myMusic[0].formats);
  console.log(myMusic[0].hasOwnProperty("gold"));
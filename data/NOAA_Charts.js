var charts = {
  "profile": "mercator",
  "attribution": "NOAA",
  "name": "50000_1",
  "grids": [
    "//tileservice.charts.noaa.gov/tiles/50000_1/{z}/{x}/{y}.json"
  ],
  "format": "png",
  "basename": "50000_1",
  "bounds": [
    -170,
    20,
    -60,
    70
  ],
  "minzoom": 3,
  "version": "1",
  "template": "{{#__teaser__}}
 {{name}} {{kap}}   NTM Date: {{ntm_date}} Scale: {{scale}} Units: {{units}} {{path}}    {{/__teaser__}}",
  "maxzoom": 19,
  "tilejson": "2.0.0",
  "scheme": "xyz",
  "type": "overlay",
  "description": "NOAA QUILTED TILESET"
}

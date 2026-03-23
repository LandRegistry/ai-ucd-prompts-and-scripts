---
layout: page
title: Create Land Parcel data (GeoJSON)
---

## Land Parcel GeoJSON Generator

Create GeoSJON data for putting realistic parcels of land on a map for a prototype.

This has been used for rapid prototyping and illustrating concepts.  For example, on a map in the GOV.UK prototype, on a map running on a web service, or output as a kml file to be loaded into Google Earth.

To use the prompt just swap out the bracketed values. For example:

```[NUMBER]``` → 10
```[DISTANCE]``` → 10
```[PLACE NAME, COUNTRY]``` → Dorchester, UK
```[MIN] to [MAX]``` hectares → 1.2 to 9.5
```[land use mix]``` → majority agricultural or unbuilt, some woodland, no urban parcels

To visualise the GeoJSON, copy and paste into your prototype map, or try it online somewhere such as [geojson.io](https://geojson.io/)


```
# Land Parcel GeoJSON Generator

Generate a GeoJSON FeatureCollection of **[NUMBER]** land parcels within **[DISTANCE]** miles of **[PLACE NAME, COUNTRY]**.

---

## Geometry Requirements

- All polygons must be irregular and realistic — no rectangular or symmetrical shapes
- Boundaries should follow natural features (rivers, escarpments, woodland edges) or historic boundaries (hedgerows, ancient trackways, parish limits)
- No two parcels should overlap
- Polygons must be closed (first and last coordinate identical)
- No fill — boundary lines only

---

## Parcel Specifications

- **Area range:** [MIN] to [MAX] hectares
- **Land use mix:** [e.g. majority agricultural/unbuilt, some woodland edge, one or two meadows]
- **Naming:** names must reflect the local history, geography, and place-name tradition of the area

---

## Required Properties for Each Feature

| Property | Description |
|---|---|
| `id` | Unique identifier (e.g. `XXX-001`) |
| `name` | Historically and geographically grounded descriptive name |
| `area_ha` | Area in hectares (decimal, within specified range) |
| `description` | Approximate location relative to [PLACE], and notes on shape rationale |
| `land_use` | Primary land use type |

---

## Output

- Valid GeoJSON only
- `FeatureCollection` wrapping all features

```

### Script history

This script originated in a simple question to claude.ai: ```can you give me geojson for 10 fields between 1 and 10 hectares big, the fields should be within 10 miles of dorchester, uk```.

The resulting response and follow up conversation, led to refinement of a good set of data for a prototype.  I then asked claude to codify the result/conversation into a re-usable script for Ai.

The script did contain a rule for vertex count 
```- Vary vertex count (5–12 nodes) to reflect different parcel shapes``` but I found this produced a lot of simlar looking shapes and tended towards lots of 'rounded' shapes that did not look natural.

### Possible improvements, things to explore

- did the original simple query and follow up conversation create a more natural set of data than this script?
- parcels to look more natural, reflecting better existing property boundaries
- parcels to be more rectangular - fewer vertexes, many tend to the 'round', the vertexes are spaced out to reguarly
- some of the parcel shapes look very similar, looking artifical, need more variety?
- briefer description


This script has been tested on claude.ai, chatgpt and Copilot.

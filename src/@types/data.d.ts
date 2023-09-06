export interface Data {
  nhits: number
  parameters: Parameters
  records: Record[]
  facet_groups: FacetGroup[]
}

export interface Parameters {
  dataset: string
  rows: number
  start: number
  facet: string[]
  format: string
  timezone: string
}

export interface Record {
  datasetid: string
  recordid: string
  fields: Fields
  geometry: Geometry
  record_timestamp: string
}

export interface Fields {
  geolocalisation_latlong: number[]
  latitude: number
  nomoff: string
  adrl1_m: string
  autnom?: string
  artiste?: string
  hist: string
  categ?: string
  prot_bat?: string
  dompal: string
  dpt: string
  lieu_m?: string
  tel_m: string
  ville_m: string
  atout: string
  interet?: string
  longitude: number
  ref: string
  region: string
  url_m: string
  phare?: string
  dmaj: string
  cp_m: string
  refmer?: string
  themes: string
  an_creat?: string
  prot_esp?: string
}

export interface Geometry {
  type: string
  coordinates: number[]
}

export interface FacetGroup {
  name: string
  facets: Facet[]
}

export interface Facet {
  name: string
  count: number
  state: string
  path: string
}

export interface MuseumState {
  records: Record[],
  regions: Facet[],
  domains: Facet[],
  filtered_regions: string[],
  loading: boolean,
  error:boolean,
}

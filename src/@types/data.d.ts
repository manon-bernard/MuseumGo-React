export interface Data {
  nhits: number;
  parameters: Parameters;
  records: Record[];
  facet_groups: FacetGroup[];
}

export interface Parameters {
  dataset: string;
  rows: number;
  start: number;
  facet: string[];
  format: string;
  timezone: string;
}

export interface Record {
  datasetid: string;
  recordid: string;
  fields: Fields;
  geometry: Geometry;
  record_timestamp: string;
}

export interface Fields {
  adresse: string;
  annee_creation: string;
  atout: string;
  code_postal: string;
  coordonnees: number[];
  date_de_mise_a_jour: string;
  departement: string;
  domaine_thematique: string;
  histoire: string;
  identifiant: string;
  lieu: string;
  nom_officiel: string;
  refmer: string;
  region: string;
  telephone: string;
  themes: string;
  url: string;
  ville: string;
}

export interface Geometry {
  type: string;
  coordinates: number[];
}

export interface FacetGroup {
  name: string;
  facets: Facet[];
}

export interface Facet {
  name: string;
  count: number;
  state: string;
  path: string;
}

export interface MuseumState {
  records: Record[];
  regions: Facet[];
  domains: Facet[];
  filtered_regions: string[];
  searched_records: Record[];
  searchValue: string;
  loading: boolean;
  error: boolean;
  loadedResults: number;
}

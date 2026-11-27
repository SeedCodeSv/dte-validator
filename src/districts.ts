/**
 * CAT-008 — Catálogo oficial de distritos del MH (El Salvador), 263 filas.
 *
 * Los códigos solo son únicos dentro de un municipio: 5 nombres se repiten
 * (EL ROSARIO x3, SAN LORENZO, SAN FERNANDO, EL CARMEN, SAN ISIDRO), así que la
 * clave única es (departamento, municipio, nombre): nunca resolver por nombre a
 * secas. La última fila es el caso especial "Otro (Para extranjeros)", código 00.
 */

export interface DistrictRecord {
  id: number;
  distrito: string;
  codigo_distrito: string;
  municipio: string;
  codigo_municipio: string;
  departamento: string;
  codigo_departamento: string;
  label: string;
}

export const DISTRITOS_SV: DistrictRecord[] = [
  {
    "id": 1,
    "distrito": "ATIQUIZAYA",
    "codigo_distrito": "03",
    "municipio": "AHUACHAPAN NORTE",
    "codigo_municipio": "13",
    "departamento": "Ahuachapán",
    "codigo_departamento": "01",
    "label": "ATIQUIZAYA (AHUACHAPAN NORTE)"
  },
  {
    "id": 2,
    "distrito": "EL REFUGIO",
    "codigo_distrito": "05",
    "municipio": "AHUACHAPAN NORTE",
    "codigo_municipio": "13",
    "departamento": "Ahuachapán",
    "codigo_departamento": "01",
    "label": "EL REFUGIO (AHUACHAPAN NORTE)"
  },
  {
    "id": 3,
    "distrito": "SAN LORENZO",
    "codigo_distrito": "09",
    "municipio": "AHUACHAPAN NORTE",
    "codigo_municipio": "13",
    "departamento": "Ahuachapán",
    "codigo_departamento": "01",
    "label": "SAN LORENZO (AHUACHAPAN NORTE)"
  },
  {
    "id": 4,
    "distrito": "TURÍN",
    "codigo_distrito": "12",
    "municipio": "AHUACHAPAN NORTE",
    "codigo_municipio": "13",
    "departamento": "Ahuachapán",
    "codigo_departamento": "01",
    "label": "TURÍN (AHUACHAPAN NORTE)"
  },
  {
    "id": 5,
    "distrito": "AHUACHAPÁN",
    "codigo_distrito": "01",
    "municipio": "AHUACHAPAN CENTRO",
    "codigo_municipio": "14",
    "departamento": "Ahuachapán",
    "codigo_departamento": "01",
    "label": "AHUACHAPÁN (AHUACHAPAN CENTRO)"
  },
  {
    "id": 6,
    "distrito": "APANECA",
    "codigo_distrito": "02",
    "municipio": "AHUACHAPAN CENTRO",
    "codigo_municipio": "14",
    "departamento": "Ahuachapán",
    "codigo_departamento": "01",
    "label": "APANECA (AHUACHAPAN CENTRO)"
  },
  {
    "id": 7,
    "distrito": "CONCEPCIÓN DE ATACO",
    "codigo_distrito": "04",
    "municipio": "AHUACHAPAN CENTRO",
    "codigo_municipio": "14",
    "departamento": "Ahuachapán",
    "codigo_departamento": "01",
    "label": "CONCEPCIÓN DE ATACO (AHUACHAPAN CENTRO)"
  },
  {
    "id": 8,
    "distrito": "TACUBA",
    "codigo_distrito": "11",
    "municipio": "AHUACHAPAN CENTRO",
    "codigo_municipio": "14",
    "departamento": "Ahuachapán",
    "codigo_departamento": "01",
    "label": "TACUBA (AHUACHAPAN CENTRO)"
  },
  {
    "id": 9,
    "distrito": "GUAYMANGO",
    "codigo_distrito": "06",
    "municipio": "AHUACHAPAN SUR",
    "codigo_municipio": "15",
    "departamento": "Ahuachapán",
    "codigo_departamento": "01",
    "label": "GUAYMANGO (AHUACHAPAN SUR)"
  },
  {
    "id": 10,
    "distrito": "JUJUTLA",
    "codigo_distrito": "07",
    "municipio": "AHUACHAPAN SUR",
    "codigo_municipio": "15",
    "departamento": "Ahuachapán",
    "codigo_departamento": "01",
    "label": "JUJUTLA (AHUACHAPAN SUR)"
  },
  {
    "id": 11,
    "distrito": "SAN FRANCISCO MENÉNDEZ",
    "codigo_distrito": "08",
    "municipio": "AHUACHAPAN SUR",
    "codigo_municipio": "15",
    "departamento": "Ahuachapán",
    "codigo_departamento": "01",
    "label": "SAN FRANCISCO MENÉNDEZ (AHUACHAPAN SUR)"
  },
  {
    "id": 12,
    "distrito": "SAN PEDRO PUXTLA",
    "codigo_distrito": "10",
    "municipio": "AHUACHAPAN SUR",
    "codigo_municipio": "15",
    "departamento": "Ahuachapán",
    "codigo_departamento": "01",
    "label": "SAN PEDRO PUXTLA (AHUACHAPAN SUR)"
  },
  {
    "id": 13,
    "distrito": "MASAHUAT",
    "codigo_distrito": "06",
    "municipio": "SANTA ANA NORTE",
    "codigo_municipio": "14",
    "departamento": "Santa Ana",
    "codigo_departamento": "02",
    "label": "MASAHUAT (SANTA ANA NORTE)"
  },
  {
    "id": 14,
    "distrito": "METAPÁN",
    "codigo_distrito": "07",
    "municipio": "SANTA ANA NORTE",
    "codigo_municipio": "14",
    "departamento": "Santa Ana",
    "codigo_departamento": "02",
    "label": "METAPÁN (SANTA ANA NORTE)"
  },
  {
    "id": 15,
    "distrito": "SANTA ROSA GUACHIPILÍN",
    "codigo_distrito": "11",
    "municipio": "SANTA ANA NORTE",
    "codigo_municipio": "14",
    "departamento": "Santa Ana",
    "codigo_departamento": "02",
    "label": "SANTA ROSA GUACHIPILÍN (SANTA ANA NORTE)"
  },
  {
    "id": 16,
    "distrito": "TEXISTEPEQUE",
    "codigo_distrito": "13",
    "municipio": "SANTA ANA NORTE",
    "codigo_municipio": "14",
    "departamento": "Santa Ana",
    "codigo_departamento": "02",
    "label": "TEXISTEPEQUE (SANTA ANA NORTE)"
  },
  {
    "id": 17,
    "distrito": "SANTA ANA",
    "codigo_distrito": "10",
    "municipio": "SANTA ANA CENTRO",
    "codigo_municipio": "15",
    "departamento": "Santa Ana",
    "codigo_departamento": "02",
    "label": "SANTA ANA (SANTA ANA CENTRO)"
  },
  {
    "id": 18,
    "distrito": "COATEPEQUE",
    "codigo_distrito": "02",
    "municipio": "SANTA ANA ESTE",
    "codigo_municipio": "16",
    "departamento": "Santa Ana",
    "codigo_departamento": "02",
    "label": "COATEPEQUE (SANTA ANA ESTE)"
  },
  {
    "id": 19,
    "distrito": "EL CONGO",
    "codigo_distrito": "04",
    "municipio": "SANTA ANA ESTE",
    "codigo_municipio": "16",
    "departamento": "Santa Ana",
    "codigo_departamento": "02",
    "label": "EL CONGO (SANTA ANA ESTE)"
  },
  {
    "id": 20,
    "distrito": "CANDELARIA DE LA FRONTERA",
    "codigo_distrito": "01",
    "municipio": "SANTA ANA OESTE",
    "codigo_municipio": "17",
    "departamento": "Santa Ana",
    "codigo_departamento": "02",
    "label": "CANDELARIA DE LA FRONTERA (SANTA ANA OESTE)"
  },
  {
    "id": 21,
    "distrito": "CHALCHUAPA",
    "codigo_distrito": "03",
    "municipio": "SANTA ANA OESTE",
    "codigo_municipio": "17",
    "departamento": "Santa Ana",
    "codigo_departamento": "02",
    "label": "CHALCHUAPA (SANTA ANA OESTE)"
  },
  {
    "id": 22,
    "distrito": "EL PORVENIR",
    "codigo_distrito": "05",
    "municipio": "SANTA ANA OESTE",
    "codigo_municipio": "17",
    "departamento": "Santa Ana",
    "codigo_departamento": "02",
    "label": "EL PORVENIR (SANTA ANA OESTE)"
  },
  {
    "id": 23,
    "distrito": "SAN ANTONIO PAJONAL",
    "codigo_distrito": "08",
    "municipio": "SANTA ANA OESTE",
    "codigo_municipio": "17",
    "departamento": "Santa Ana",
    "codigo_departamento": "02",
    "label": "SAN ANTONIO PAJONAL (SANTA ANA OESTE)"
  },
  {
    "id": 24,
    "distrito": "SAN SEBASTIÁN SALITRILLO",
    "codigo_distrito": "09",
    "municipio": "SANTA ANA OESTE",
    "codigo_municipio": "17",
    "departamento": "Santa Ana",
    "codigo_departamento": "02",
    "label": "SAN SEBASTIÁN SALITRILLO (SANTA ANA OESTE)"
  },
  {
    "id": 25,
    "distrito": "SANTIAGO DE LA FRONTERA",
    "codigo_distrito": "12",
    "municipio": "SANTA ANA OESTE",
    "codigo_municipio": "17",
    "departamento": "Santa Ana",
    "codigo_departamento": "02",
    "label": "SANTIAGO DE LA FRONTERA (SANTA ANA OESTE)"
  },
  {
    "id": 26,
    "distrito": "JUAYÚA",
    "codigo_distrito": "07",
    "municipio": "SONSONATE NORTE",
    "codigo_municipio": "17",
    "departamento": "Sonsonate",
    "codigo_departamento": "03",
    "label": "JUAYÚA (SONSONATE NORTE)"
  },
  {
    "id": 27,
    "distrito": "NAHUIZALCO",
    "codigo_distrito": "08",
    "municipio": "SONSONATE NORTE",
    "codigo_municipio": "17",
    "departamento": "Sonsonate",
    "codigo_departamento": "03",
    "label": "NAHUIZALCO (SONSONATE NORTE)"
  },
  {
    "id": 28,
    "distrito": "SALCOATITÁN",
    "codigo_distrito": "10",
    "municipio": "SONSONATE NORTE",
    "codigo_municipio": "17",
    "departamento": "Sonsonate",
    "codigo_departamento": "03",
    "label": "SALCOATITÁN (SONSONATE NORTE)"
  },
  {
    "id": 29,
    "distrito": "SANTA CATARINA MASAHUAT",
    "codigo_distrito": "13",
    "municipio": "SONSONATE NORTE",
    "codigo_municipio": "17",
    "departamento": "Sonsonate",
    "codigo_departamento": "03",
    "label": "SANTA CATARINA MASAHUAT (SONSONATE NORTE)"
  },
  {
    "id": 30,
    "distrito": "SONSONATE",
    "codigo_distrito": "15",
    "municipio": "SONSONATE CENTRO",
    "codigo_municipio": "18",
    "departamento": "Sonsonate",
    "codigo_departamento": "03",
    "label": "SONSONATE (SONSONATE CENTRO)"
  },
  {
    "id": 31,
    "distrito": "SONZACATE",
    "codigo_distrito": "16",
    "municipio": "SONSONATE CENTRO",
    "codigo_municipio": "18",
    "departamento": "Sonsonate",
    "codigo_departamento": "03",
    "label": "SONZACATE (SONSONATE CENTRO)"
  },
  {
    "id": 32,
    "distrito": "NAHULINGO",
    "codigo_distrito": "09",
    "municipio": "SONSONATE CENTRO",
    "codigo_municipio": "18",
    "departamento": "Sonsonate",
    "codigo_departamento": "03",
    "label": "NAHULINGO (SONSONATE CENTRO)"
  },
  {
    "id": 33,
    "distrito": "SAN ANTONIO DEL MONTE",
    "codigo_distrito": "11",
    "municipio": "SONSONATE CENTRO",
    "codigo_municipio": "18",
    "departamento": "Sonsonate",
    "codigo_departamento": "03",
    "label": "SAN ANTONIO DEL MONTE (SONSONATE CENTRO)"
  },
  {
    "id": 34,
    "distrito": "SANTO DOMINGO GUZMÁN",
    "codigo_distrito": "14",
    "municipio": "SONSONATE CENTRO",
    "codigo_municipio": "18",
    "departamento": "Sonsonate",
    "codigo_departamento": "03",
    "label": "SANTO DOMINGO GUZMÁN (SONSONATE CENTRO)"
  },
  {
    "id": 35,
    "distrito": "IZALCO",
    "codigo_distrito": "06",
    "municipio": "SONSONATE ESTE",
    "codigo_municipio": "19",
    "departamento": "Sonsonate",
    "codigo_departamento": "03",
    "label": "IZALCO (SONSONATE ESTE)"
  },
  {
    "id": 36,
    "distrito": "ARMENIA",
    "codigo_distrito": "02",
    "municipio": "SONSONATE ESTE",
    "codigo_municipio": "19",
    "departamento": "Sonsonate",
    "codigo_departamento": "03",
    "label": "ARMENIA (SONSONATE ESTE)"
  },
  {
    "id": 37,
    "distrito": "CALUCO",
    "codigo_distrito": "03",
    "municipio": "SONSONATE ESTE",
    "codigo_municipio": "19",
    "departamento": "Sonsonate",
    "codigo_departamento": "03",
    "label": "CALUCO (SONSONATE ESTE)"
  },
  {
    "id": 38,
    "distrito": "SAN JULIÁN",
    "codigo_distrito": "12",
    "municipio": "SONSONATE ESTE",
    "codigo_municipio": "19",
    "departamento": "Sonsonate",
    "codigo_departamento": "03",
    "label": "SAN JULIÁN (SONSONATE ESTE)"
  },
  {
    "id": 39,
    "distrito": "CUISNAHUAT",
    "codigo_distrito": "04",
    "municipio": "SONSONATE ESTE",
    "codigo_municipio": "19",
    "departamento": "Sonsonate",
    "codigo_departamento": "03",
    "label": "CUISNAHUAT (SONSONATE ESTE)"
  },
  {
    "id": 40,
    "distrito": "SANTA ISABEL ISHUATÁN",
    "codigo_distrito": "05",
    "municipio": "SONSONATE ESTE",
    "codigo_municipio": "19",
    "departamento": "Sonsonate",
    "codigo_departamento": "03",
    "label": "SANTA ISABEL ISHUATÁN (SONSONATE ESTE)"
  },
  {
    "id": 41,
    "distrito": "ACAJUTLA",
    "codigo_distrito": "01",
    "municipio": "SONSONATE OESTE",
    "codigo_municipio": "20",
    "departamento": "Sonsonate",
    "codigo_departamento": "03",
    "label": "ACAJUTLA (SONSONATE OESTE)"
  },
  {
    "id": 42,
    "distrito": "AGUILARES",
    "codigo_distrito": "01",
    "municipio": "SAN SALVADOR NORTE",
    "codigo_municipio": "20",
    "departamento": "San Salvador",
    "codigo_departamento": "06",
    "label": "AGUILARES (SAN SALVADOR NORTE)"
  },
  {
    "id": 43,
    "distrito": "EL PAISNAL",
    "codigo_distrito": "05",
    "municipio": "SAN SALVADOR NORTE",
    "codigo_municipio": "20",
    "departamento": "San Salvador",
    "codigo_departamento": "06",
    "label": "EL PAISNAL (SAN SALVADOR NORTE)"
  },
  {
    "id": 44,
    "distrito": "GUAZAPA",
    "codigo_distrito": "06",
    "municipio": "SAN SALVADOR NORTE",
    "codigo_municipio": "20",
    "departamento": "San Salvador",
    "codigo_departamento": "06",
    "label": "GUAZAPA (SAN SALVADOR NORTE)"
  },
  {
    "id": 45,
    "distrito": "APOPA",
    "codigo_distrito": "02",
    "municipio": "SAN SALVADOR OESTE",
    "codigo_municipio": "21",
    "departamento": "San Salvador",
    "codigo_departamento": "06",
    "label": "APOPA (SAN SALVADOR OESTE)"
  },
  {
    "id": 46,
    "distrito": "NEJAPA",
    "codigo_distrito": "09",
    "municipio": "SAN SALVADOR OESTE",
    "codigo_municipio": "21",
    "departamento": "San Salvador",
    "codigo_departamento": "06",
    "label": "NEJAPA (SAN SALVADOR OESTE)"
  },
  {
    "id": 47,
    "distrito": "ILOPANGO",
    "codigo_distrito": "07",
    "municipio": "SAN SALVADOR ESTE",
    "codigo_municipio": "22",
    "departamento": "San Salvador",
    "codigo_departamento": "06",
    "label": "ILOPANGO (SAN SALVADOR ESTE)"
  },
  {
    "id": 48,
    "distrito": "SAN MARTIN",
    "codigo_distrito": "13",
    "municipio": "SAN SALVADOR ESTE",
    "codigo_municipio": "22",
    "departamento": "San Salvador",
    "codigo_departamento": "06",
    "label": "SAN MARTIN (SAN SALVADOR ESTE)"
  },
  {
    "id": 49,
    "distrito": "SOYAPANGO",
    "codigo_distrito": "17",
    "municipio": "SAN SALVADOR ESTE",
    "codigo_municipio": "22",
    "departamento": "San Salvador",
    "codigo_departamento": "06",
    "label": "SOYAPANGO (SAN SALVADOR ESTE)"
  },
  {
    "id": 50,
    "distrito": "TONACATEPEQUE",
    "codigo_distrito": "18",
    "municipio": "SAN SALVADOR ESTE",
    "codigo_municipio": "22",
    "departamento": "San Salvador",
    "codigo_departamento": "06",
    "label": "TONACATEPEQUE (SAN SALVADOR ESTE)"
  },
  {
    "id": 51,
    "distrito": "AYUTUXTEPEQUE",
    "codigo_distrito": "03",
    "municipio": "SAN SALVADOR CENTRO",
    "codigo_municipio": "23",
    "departamento": "San Salvador",
    "codigo_departamento": "06",
    "label": "AYUTUXTEPEQUE (SAN SALVADOR CENTRO)"
  },
  {
    "id": 52,
    "distrito": "MEJICANOS",
    "codigo_distrito": "08",
    "municipio": "SAN SALVADOR CENTRO",
    "codigo_municipio": "23",
    "departamento": "San Salvador",
    "codigo_departamento": "06",
    "label": "MEJICANOS (SAN SALVADOR CENTRO)"
  },
  {
    "id": 53,
    "distrito": "SAN SALVADOR",
    "codigo_distrito": "14",
    "municipio": "SAN SALVADOR CENTRO",
    "codigo_municipio": "23",
    "departamento": "San Salvador",
    "codigo_departamento": "06",
    "label": "SAN SALVADOR (SAN SALVADOR CENTRO)"
  },
  {
    "id": 54,
    "distrito": "CUSCATANCINGO",
    "codigo_distrito": "04",
    "municipio": "SAN SALVADOR CENTRO",
    "codigo_municipio": "23",
    "departamento": "San Salvador",
    "codigo_departamento": "06",
    "label": "CUSCATANCINGO (SAN SALVADOR CENTRO)"
  },
  {
    "id": 55,
    "distrito": "CIUDAD DELGADO",
    "codigo_distrito": "19",
    "municipio": "SAN SALVADOR CENTRO",
    "codigo_municipio": "23",
    "departamento": "San Salvador",
    "codigo_departamento": "06",
    "label": "CIUDAD DELGADO (SAN SALVADOR CENTRO)"
  },
  {
    "id": 56,
    "distrito": "PANCHIMALCO",
    "codigo_distrito": "10",
    "municipio": "SAN SALVADOR SUR",
    "codigo_municipio": "24",
    "departamento": "San Salvador",
    "codigo_departamento": "06",
    "label": "PANCHIMALCO (SAN SALVADOR SUR)"
  },
  {
    "id": 57,
    "distrito": "ROSARIO DE MORA",
    "codigo_distrito": "11",
    "municipio": "SAN SALVADOR SUR",
    "codigo_municipio": "24",
    "departamento": "San Salvador",
    "codigo_departamento": "06",
    "label": "ROSARIO DE MORA (SAN SALVADOR SUR)"
  },
  {
    "id": 58,
    "distrito": "SAN MARCOS",
    "codigo_distrito": "12",
    "municipio": "SAN SALVADOR SUR",
    "codigo_municipio": "24",
    "departamento": "San Salvador",
    "codigo_departamento": "06",
    "label": "SAN MARCOS (SAN SALVADOR SUR)"
  },
  {
    "id": 59,
    "distrito": "SANTO TOMAS",
    "codigo_distrito": "16",
    "municipio": "SAN SALVADOR SUR",
    "codigo_municipio": "24",
    "departamento": "San Salvador",
    "codigo_departamento": "06",
    "label": "SANTO TOMAS (SAN SALVADOR SUR)"
  },
  {
    "id": 60,
    "distrito": "SANTIAGO TEXACUANGOS",
    "codigo_distrito": "15",
    "municipio": "SAN SALVADOR SUR",
    "codigo_municipio": "24",
    "departamento": "San Salvador",
    "codigo_departamento": "06",
    "label": "SANTIAGO TEXACUANGOS (SAN SALVADOR SUR)"
  },
  {
    "id": 61,
    "distrito": "QUEZALTEPEQUE",
    "codigo_distrito": "12",
    "municipio": "LA LIBERTAD NORTE",
    "codigo_municipio": "23",
    "departamento": "La Libertad",
    "codigo_departamento": "05",
    "label": "QUEZALTEPEQUE (LA LIBERTAD NORTE)"
  },
  {
    "id": 62,
    "distrito": "SAN MATÍAS",
    "codigo_distrito": "16",
    "municipio": "LA LIBERTAD NORTE",
    "codigo_municipio": "23",
    "departamento": "La Libertad",
    "codigo_departamento": "05",
    "label": "SAN MATÍAS (LA LIBERTAD NORTE)"
  },
  {
    "id": 63,
    "distrito": "SAN PABLO TACACHICO",
    "codigo_distrito": "17",
    "municipio": "LA LIBERTAD NORTE",
    "codigo_municipio": "23",
    "departamento": "La Libertad",
    "codigo_departamento": "05",
    "label": "SAN PABLO TACACHICO (LA LIBERTAD NORTE)"
  },
  {
    "id": 64,
    "distrito": "SAN JUAN OPICO",
    "codigo_distrito": "15",
    "municipio": "LA LIBERTAD CENTRO",
    "codigo_municipio": "24",
    "departamento": "La Libertad",
    "codigo_departamento": "05",
    "label": "SAN JUAN OPICO (LA LIBERTAD CENTRO)"
  },
  {
    "id": 65,
    "distrito": "CIUDAD ARCE",
    "codigo_distrito": "02",
    "municipio": "LA LIBERTAD CENTRO",
    "codigo_municipio": "24",
    "departamento": "La Libertad",
    "codigo_departamento": "05",
    "label": "CIUDAD ARCE (LA LIBERTAD CENTRO)"
  },
  {
    "id": 66,
    "distrito": "COLON",
    "codigo_distrito": "03",
    "municipio": "LA LIBERTAD OESTE",
    "codigo_municipio": "25",
    "departamento": "La Libertad",
    "codigo_departamento": "05",
    "label": "COLON (LA LIBERTAD OESTE)"
  },
  {
    "id": 67,
    "distrito": "JAYAQUE",
    "codigo_distrito": "07",
    "municipio": "LA LIBERTAD OESTE",
    "codigo_municipio": "25",
    "departamento": "La Libertad",
    "codigo_departamento": "05",
    "label": "JAYAQUE (LA LIBERTAD OESTE)"
  },
  {
    "id": 68,
    "distrito": "SACACOYO",
    "codigo_distrito": "13",
    "municipio": "LA LIBERTAD OESTE",
    "codigo_municipio": "25",
    "departamento": "La Libertad",
    "codigo_departamento": "05",
    "label": "SACACOYO (LA LIBERTAD OESTE)"
  },
  {
    "id": 69,
    "distrito": "TEPECOYO",
    "codigo_distrito": "21",
    "municipio": "LA LIBERTAD OESTE",
    "codigo_municipio": "25",
    "departamento": "La Libertad",
    "codigo_departamento": "05",
    "label": "TEPECOYO (LA LIBERTAD OESTE)"
  },
  {
    "id": 70,
    "distrito": "TALNIQUE",
    "codigo_distrito": "19",
    "municipio": "LA LIBERTAD OESTE",
    "codigo_municipio": "25",
    "departamento": "La Libertad",
    "codigo_departamento": "05",
    "label": "TALNIQUE (LA LIBERTAD OESTE)"
  },
  {
    "id": 71,
    "distrito": "ANTIGUO CUSCATLÁN",
    "codigo_distrito": "01",
    "municipio": "LA LIBERTAD ESTE",
    "codigo_municipio": "26",
    "departamento": "La Libertad",
    "codigo_departamento": "05",
    "label": "ANTIGUO CUSCATLÁN (LA LIBERTAD ESTE)"
  },
  {
    "id": 72,
    "distrito": "HUIZÚCAR",
    "codigo_distrito": "06",
    "municipio": "LA LIBERTAD ESTE",
    "codigo_municipio": "26",
    "departamento": "La Libertad",
    "codigo_departamento": "05",
    "label": "HUIZÚCAR (LA LIBERTAD ESTE)"
  },
  {
    "id": 73,
    "distrito": "NUEVO CUSCATLÁN",
    "codigo_distrito": "10",
    "municipio": "LA LIBERTAD ESTE",
    "codigo_municipio": "26",
    "departamento": "La Libertad",
    "codigo_departamento": "05",
    "label": "NUEVO CUSCATLÁN (LA LIBERTAD ESTE)"
  },
  {
    "id": 74,
    "distrito": "SAN JOSÉ VILLANUEVA",
    "codigo_distrito": "14",
    "municipio": "LA LIBERTAD ESTE",
    "codigo_municipio": "26",
    "departamento": "La Libertad",
    "codigo_departamento": "05",
    "label": "SAN JOSÉ VILLANUEVA (LA LIBERTAD ESTE)"
  },
  {
    "id": 75,
    "distrito": "ZARAGOZA",
    "codigo_distrito": "22",
    "municipio": "LA LIBERTAD ESTE",
    "codigo_municipio": "26",
    "departamento": "La Libertad",
    "codigo_departamento": "05",
    "label": "ZARAGOZA (LA LIBERTAD ESTE)"
  },
  {
    "id": 76,
    "distrito": "CHILTIUPAN",
    "codigo_distrito": "05",
    "municipio": "LA LIBERTAD COSTA",
    "codigo_municipio": "27",
    "departamento": "La Libertad",
    "codigo_departamento": "05",
    "label": "CHILTIUPAN (LA LIBERTAD COSTA)"
  },
  {
    "id": 77,
    "distrito": "JICALAPA",
    "codigo_distrito": "08",
    "municipio": "LA LIBERTAD COSTA",
    "codigo_municipio": "27",
    "departamento": "La Libertad",
    "codigo_departamento": "05",
    "label": "JICALAPA (LA LIBERTAD COSTA)"
  },
  {
    "id": 78,
    "distrito": "LA LIBERTAD",
    "codigo_distrito": "09",
    "municipio": "LA LIBERTAD COSTA",
    "codigo_municipio": "27",
    "departamento": "La Libertad",
    "codigo_departamento": "05",
    "label": "LA LIBERTAD (LA LIBERTAD COSTA)"
  },
  {
    "id": 79,
    "distrito": "TAMANIQUE",
    "codigo_distrito": "18",
    "municipio": "LA LIBERTAD COSTA",
    "codigo_municipio": "27",
    "departamento": "La Libertad",
    "codigo_departamento": "05",
    "label": "TAMANIQUE (LA LIBERTAD COSTA)"
  },
  {
    "id": 80,
    "distrito": "TEOTEPEQUE",
    "codigo_distrito": "20",
    "municipio": "LA LIBERTAD COSTA",
    "codigo_municipio": "27",
    "departamento": "La Libertad",
    "codigo_departamento": "05",
    "label": "TEOTEPEQUE (LA LIBERTAD COSTA)"
  },
  {
    "id": 81,
    "distrito": "COMASAGUA",
    "codigo_distrito": "04",
    "municipio": "LA LIBERTAD SUR",
    "codigo_municipio": "28",
    "departamento": "La Libertad",
    "codigo_departamento": "05",
    "label": "COMASAGUA (LA LIBERTAD SUR)"
  },
  {
    "id": 82,
    "distrito": "SANTA TECLA",
    "codigo_distrito": "11",
    "municipio": "LA LIBERTAD SUR",
    "codigo_municipio": "28",
    "departamento": "La Libertad",
    "codigo_departamento": "05",
    "label": "SANTA TECLA (LA LIBERTAD SUR)"
  },
  {
    "id": 83,
    "distrito": "LA PALMA",
    "codigo_distrito": "12",
    "municipio": "CHALATENANGO NORTE",
    "codigo_municipio": "34",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "LA PALMA (CHALATENANGO NORTE)"
  },
  {
    "id": 84,
    "distrito": "CITALÁ",
    "codigo_distrito": "04",
    "municipio": "CHALATENANGO NORTE",
    "codigo_municipio": "34",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "CITALÁ (CHALATENANGO NORTE)"
  },
  {
    "id": 85,
    "distrito": "SAN IGNACIO",
    "codigo_distrito": "25",
    "municipio": "CHALATENANGO NORTE",
    "codigo_municipio": "34",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "SAN IGNACIO (CHALATENANGO NORTE)"
  },
  {
    "id": 86,
    "distrito": "NUEVA CONCEPCIÓN",
    "codigo_distrito": "16",
    "municipio": "CHALATENANGO CENTRO",
    "codigo_municipio": "35",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "NUEVA CONCEPCIÓN (CHALATENANGO CENTRO)"
  },
  {
    "id": 87,
    "distrito": "TEJUTLA",
    "codigo_distrito": "33",
    "municipio": "CHALATENANGO CENTRO",
    "codigo_municipio": "35",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "TEJUTLA (CHALATENANGO CENTRO)"
  },
  {
    "id": 88,
    "distrito": "LA REINA",
    "codigo_distrito": "13",
    "municipio": "CHALATENANGO CENTRO",
    "codigo_municipio": "35",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "LA REINA (CHALATENANGO CENTRO)"
  },
  {
    "id": 89,
    "distrito": "AGUA CALIENTE",
    "codigo_distrito": "01",
    "municipio": "CHALATENANGO CENTRO",
    "codigo_municipio": "35",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "AGUA CALIENTE (CHALATENANGO CENTRO)"
  },
  {
    "id": 90,
    "distrito": "DULCE NOMBRE DE MARÍA",
    "codigo_distrito": "08",
    "municipio": "CHALATENANGO CENTRO",
    "codigo_municipio": "35",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "DULCE NOMBRE DE MARÍA (CHALATENANGO CENTRO)"
  },
  {
    "id": 91,
    "distrito": "EL PARAÍSO",
    "codigo_distrito": "10",
    "municipio": "CHALATENANGO CENTRO",
    "codigo_municipio": "35",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "EL PARAÍSO (CHALATENANGO CENTRO)"
  },
  {
    "id": 92,
    "distrito": "SAN FERNANDO",
    "codigo_distrito": "22",
    "municipio": "CHALATENANGO CENTRO",
    "codigo_municipio": "35",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "SAN FERNANDO (CHALATENANGO CENTRO)"
  },
  {
    "id": 93,
    "distrito": "SAN FRANCISCO MORAZÁN",
    "codigo_distrito": "24",
    "municipio": "CHALATENANGO CENTRO",
    "codigo_municipio": "35",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "SAN FRANCISCO MORAZÁN (CHALATENANGO CENTRO)"
  },
  {
    "id": 94,
    "distrito": "SAN RAFAEL",
    "codigo_distrito": "31",
    "municipio": "CHALATENANGO CENTRO",
    "codigo_municipio": "35",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "SAN RAFAEL (CHALATENANGO CENTRO)"
  },
  {
    "id": 95,
    "distrito": "SANTA RITA",
    "codigo_distrito": "32",
    "municipio": "CHALATENANGO CENTRO",
    "codigo_municipio": "35",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "SANTA RITA (CHALATENANGO CENTRO)"
  },
  {
    "id": 96,
    "distrito": "CHALATENANGO",
    "codigo_distrito": "07",
    "municipio": "CHALATENANGO SUR",
    "codigo_municipio": "36",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "CHALATENANGO (CHALATENANGO SUR)"
  },
  {
    "id": 97,
    "distrito": "ARCATAO",
    "codigo_distrito": "02",
    "municipio": "CHALATENANGO SUR",
    "codigo_municipio": "36",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "ARCATAO (CHALATENANGO SUR)"
  },
  {
    "id": 98,
    "distrito": "AZACUALPA",
    "codigo_distrito": "03",
    "municipio": "CHALATENANGO SUR",
    "codigo_municipio": "36",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "AZACUALPA (CHALATENANGO SUR)"
  },
  {
    "id": 99,
    "distrito": "COMALAPA",
    "codigo_distrito": "05",
    "municipio": "CHALATENANGO SUR",
    "codigo_municipio": "36",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "COMALAPA (CHALATENANGO SUR)"
  },
  {
    "id": 100,
    "distrito": "CONCEPCIÓN QUEZALTEPEQUE",
    "codigo_distrito": "06",
    "municipio": "CHALATENANGO SUR",
    "codigo_municipio": "36",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "CONCEPCIÓN QUEZALTEPEQUE (CHALATENANGO SUR)"
  },
  {
    "id": 101,
    "distrito": "EL CARRIZAL",
    "codigo_distrito": "09",
    "municipio": "CHALATENANGO SUR",
    "codigo_municipio": "36",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "EL CARRIZAL (CHALATENANGO SUR)"
  },
  {
    "id": 102,
    "distrito": "LA LAGUNA",
    "codigo_distrito": "11",
    "municipio": "CHALATENANGO SUR",
    "codigo_municipio": "36",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "LA LAGUNA (CHALATENANGO SUR)"
  },
  {
    "id": 103,
    "distrito": "LAS VUELTAS",
    "codigo_distrito": "14",
    "municipio": "CHALATENANGO SUR",
    "codigo_municipio": "36",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "LAS VUELTAS (CHALATENANGO SUR)"
  },
  {
    "id": 104,
    "distrito": "NOMBRE DE JESUS",
    "codigo_distrito": "15",
    "municipio": "CHALATENANGO SUR",
    "codigo_municipio": "36",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "NOMBRE DE JESUS (CHALATENANGO SUR)"
  },
  {
    "id": 105,
    "distrito": "NUEVA TRINIDAD",
    "codigo_distrito": "17",
    "municipio": "CHALATENANGO SUR",
    "codigo_municipio": "36",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "NUEVA TRINIDAD (CHALATENANGO SUR)"
  },
  {
    "id": 106,
    "distrito": "OJOS DE AGUA",
    "codigo_distrito": "18",
    "municipio": "CHALATENANGO SUR",
    "codigo_municipio": "36",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "OJOS DE AGUA (CHALATENANGO SUR)"
  },
  {
    "id": 107,
    "distrito": "POTONICO",
    "codigo_distrito": "19",
    "municipio": "CHALATENANGO SUR",
    "codigo_municipio": "36",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "POTONICO (CHALATENANGO SUR)"
  },
  {
    "id": 108,
    "distrito": "SAN ANTONIO DE LA CRUZ",
    "codigo_distrito": "20",
    "municipio": "CHALATENANGO SUR",
    "codigo_municipio": "36",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "SAN ANTONIO DE LA CRUZ (CHALATENANGO SUR)"
  },
  {
    "id": 109,
    "distrito": "SAN ANTONIO LOS RANCHOS",
    "codigo_distrito": "21",
    "municipio": "CHALATENANGO SUR",
    "codigo_municipio": "36",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "SAN ANTONIO LOS RANCHOS (CHALATENANGO SUR)"
  },
  {
    "id": 110,
    "distrito": "SAN FRANCISCO LEMPA",
    "codigo_distrito": "23",
    "municipio": "CHALATENANGO SUR",
    "codigo_municipio": "36",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "SAN FRANCISCO LEMPA (CHALATENANGO SUR)"
  },
  {
    "id": 111,
    "distrito": "SAN ISIDRO LABRADOR",
    "codigo_distrito": "26",
    "municipio": "CHALATENANGO SUR",
    "codigo_municipio": "36",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "SAN ISIDRO LABRADOR (CHALATENANGO SUR)"
  },
  {
    "id": 112,
    "distrito": "SAN JOSÉ CANCASQUE",
    "codigo_distrito": "27",
    "municipio": "CHALATENANGO SUR",
    "codigo_municipio": "36",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "SAN JOSÉ CANCASQUE (CHALATENANGO SUR)"
  },
  {
    "id": 113,
    "distrito": "SAN MIGUEL DE MERCEDES",
    "codigo_distrito": "30",
    "municipio": "CHALATENANGO SUR",
    "codigo_municipio": "36",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "SAN MIGUEL DE MERCEDES (CHALATENANGO SUR)"
  },
  {
    "id": 114,
    "distrito": "SAN JOSÉ LAS FLORES",
    "codigo_distrito": "28",
    "municipio": "CHALATENANGO SUR",
    "codigo_municipio": "36",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "SAN JOSÉ LAS FLORES (CHALATENANGO SUR)"
  },
  {
    "id": 115,
    "distrito": "SAN LUIS DEL CARMEN",
    "codigo_distrito": "29",
    "municipio": "CHALATENANGO SUR",
    "codigo_municipio": "36",
    "departamento": "Chalatenango",
    "codigo_departamento": "04",
    "label": "SAN LUIS DEL CARMEN (CHALATENANGO SUR)"
  },
  {
    "id": 116,
    "distrito": "SUCHITOTO",
    "codigo_distrito": "15",
    "municipio": "CUSCATLAN NORTE",
    "codigo_municipio": "17",
    "departamento": "Cuscatlán",
    "codigo_departamento": "07",
    "label": "SUCHITOTO (CUSCATLAN NORTE)"
  },
  {
    "id": 117,
    "distrito": "SAN JOSÉ GUAYABAL",
    "codigo_distrito": "09",
    "municipio": "CUSCATLAN NORTE",
    "codigo_municipio": "17",
    "departamento": "Cuscatlán",
    "codigo_departamento": "07",
    "label": "SAN JOSÉ GUAYABAL (CUSCATLAN NORTE)"
  },
  {
    "id": 118,
    "distrito": "ORATORIO DE CONCEPCIÓN",
    "codigo_distrito": "06",
    "municipio": "CUSCATLAN NORTE",
    "codigo_municipio": "17",
    "departamento": "Cuscatlán",
    "codigo_departamento": "07",
    "label": "ORATORIO DE CONCEPCIÓN (CUSCATLAN NORTE)"
  },
  {
    "id": 119,
    "distrito": "SAN BARTOLOMÉ PERULAPÍA",
    "codigo_distrito": "07",
    "municipio": "CUSCATLAN NORTE",
    "codigo_municipio": "17",
    "departamento": "Cuscatlán",
    "codigo_departamento": "07",
    "label": "SAN BARTOLOMÉ PERULAPÍA (CUSCATLAN NORTE)"
  },
  {
    "id": 120,
    "distrito": "SAN PEDRO PERULAPÁN",
    "codigo_distrito": "10",
    "municipio": "CUSCATLAN NORTE",
    "codigo_municipio": "17",
    "departamento": "Cuscatlán",
    "codigo_departamento": "07",
    "label": "SAN PEDRO PERULAPÁN (CUSCATLAN NORTE)"
  },
  {
    "id": 121,
    "distrito": "COJUTEPEQUE",
    "codigo_distrito": "02",
    "municipio": "CUSCATLAN SUR",
    "codigo_municipio": "18",
    "departamento": "Cuscatlán",
    "codigo_departamento": "07",
    "label": "COJUTEPEQUE (CUSCATLAN SUR)"
  },
  {
    "id": 122,
    "distrito": "SAN RAFAEL CEDROS",
    "codigo_distrito": "11",
    "municipio": "CUSCATLAN SUR",
    "codigo_municipio": "18",
    "departamento": "Cuscatlán",
    "codigo_departamento": "07",
    "label": "SAN RAFAEL CEDROS (CUSCATLAN SUR)"
  },
  {
    "id": 123,
    "distrito": "CANDELARIA",
    "codigo_distrito": "01",
    "municipio": "CUSCATLAN SUR",
    "codigo_municipio": "18",
    "departamento": "Cuscatlán",
    "codigo_departamento": "07",
    "label": "CANDELARIA (CUSCATLAN SUR)"
  },
  {
    "id": 124,
    "distrito": "MONTE SAN JUAN",
    "codigo_distrito": "05",
    "municipio": "CUSCATLAN SUR",
    "codigo_municipio": "18",
    "departamento": "Cuscatlán",
    "codigo_departamento": "07",
    "label": "MONTE SAN JUAN (CUSCATLAN SUR)"
  },
  {
    "id": 125,
    "distrito": "EL CARMEN",
    "codigo_distrito": "03",
    "municipio": "CUSCATLAN SUR",
    "codigo_municipio": "18",
    "departamento": "Cuscatlán",
    "codigo_departamento": "07",
    "label": "EL CARMEN (CUSCATLAN SUR)"
  },
  {
    "id": 126,
    "distrito": "SAN CRISTÓBAL",
    "codigo_distrito": "08",
    "municipio": "CUSCATLAN SUR",
    "codigo_municipio": "18",
    "departamento": "Cuscatlán",
    "codigo_departamento": "07",
    "label": "SAN CRISTÓBAL (CUSCATLAN SUR)"
  },
  {
    "id": 127,
    "distrito": "SANTA CRUZ MICHAPA",
    "codigo_distrito": "14",
    "municipio": "CUSCATLAN SUR",
    "codigo_municipio": "18",
    "departamento": "Cuscatlán",
    "codigo_departamento": "07",
    "label": "SANTA CRUZ MICHAPA (CUSCATLAN SUR)"
  },
  {
    "id": 128,
    "distrito": "SAN RAMON",
    "codigo_distrito": "12",
    "municipio": "CUSCATLAN SUR",
    "codigo_municipio": "18",
    "departamento": "Cuscatlán",
    "codigo_departamento": "07",
    "label": "SAN RAMON (CUSCATLAN SUR)"
  },
  {
    "id": 129,
    "distrito": "EL ROSARIO",
    "codigo_distrito": "04",
    "municipio": "CUSCATLAN SUR",
    "codigo_municipio": "18",
    "departamento": "Cuscatlán",
    "codigo_departamento": "07",
    "label": "EL ROSARIO (CUSCATLAN SUR)"
  },
  {
    "id": 130,
    "distrito": "SANTA CRUZ ANALQUITO",
    "codigo_distrito": "13",
    "municipio": "CUSCATLAN SUR",
    "codigo_municipio": "18",
    "departamento": "Cuscatlán",
    "codigo_departamento": "07",
    "label": "SANTA CRUZ ANALQUITO (CUSCATLAN SUR)"
  },
  {
    "id": 131,
    "distrito": "TENANCINGO",
    "codigo_distrito": "16",
    "municipio": "CUSCATLAN SUR",
    "codigo_municipio": "18",
    "departamento": "Cuscatlán",
    "codigo_departamento": "07",
    "label": "TENANCINGO (CUSCATLAN SUR)"
  },
  {
    "id": 132,
    "distrito": "SENSUNTEPEQUE",
    "codigo_distrito": "06",
    "municipio": "CABAÑAS ESTE",
    "codigo_municipio": "10",
    "departamento": "Cabañas",
    "codigo_departamento": "09",
    "label": "SENSUNTEPEQUE (CABAÑAS ESTE)"
  },
  {
    "id": 133,
    "distrito": "VICTORIA",
    "codigo_distrito": "08",
    "municipio": "CABAÑAS ESTE",
    "codigo_municipio": "10",
    "departamento": "Cabañas",
    "codigo_departamento": "09",
    "label": "VICTORIA (CABAÑAS ESTE)"
  },
  {
    "id": 134,
    "distrito": "DOLORES",
    "codigo_distrito": "09",
    "municipio": "CABAÑAS ESTE",
    "codigo_municipio": "10",
    "departamento": "Cabañas",
    "codigo_departamento": "09",
    "label": "DOLORES (CABAÑAS ESTE)"
  },
  {
    "id": 135,
    "distrito": "GUACOTECTI",
    "codigo_distrito": "02",
    "municipio": "CABAÑAS ESTE",
    "codigo_municipio": "10",
    "departamento": "Cabañas",
    "codigo_departamento": "09",
    "label": "GUACOTECTI (CABAÑAS ESTE)"
  },
  {
    "id": 136,
    "distrito": "SAN ISIDRO",
    "codigo_distrito": "05",
    "municipio": "CABAÑAS ESTE",
    "codigo_municipio": "10",
    "departamento": "Cabañas",
    "codigo_departamento": "09",
    "label": "SAN ISIDRO (CABAÑAS ESTE)"
  },
  {
    "id": 137,
    "distrito": "ILOBASCO",
    "codigo_distrito": "03",
    "municipio": "CABAÑAS OESTE",
    "codigo_municipio": "11",
    "departamento": "Cabañas",
    "codigo_departamento": "09",
    "label": "ILOBASCO (CABAÑAS OESTE)"
  },
  {
    "id": 138,
    "distrito": "TEJUTEPEQUE",
    "codigo_distrito": "07",
    "municipio": "CABAÑAS OESTE",
    "codigo_municipio": "11",
    "departamento": "Cabañas",
    "codigo_departamento": "09",
    "label": "TEJUTEPEQUE (CABAÑAS OESTE)"
  },
  {
    "id": 139,
    "distrito": "JUTIAPA",
    "codigo_distrito": "04",
    "municipio": "CABAÑAS OESTE",
    "codigo_municipio": "11",
    "departamento": "Cabañas",
    "codigo_departamento": "09",
    "label": "JUTIAPA (CABAÑAS OESTE)"
  },
  {
    "id": 140,
    "distrito": "CINQUERA",
    "codigo_distrito": "01",
    "municipio": "CABAÑAS OESTE",
    "codigo_municipio": "11",
    "departamento": "Cabañas",
    "codigo_departamento": "09",
    "label": "CINQUERA (CABAÑAS OESTE)"
  },
  {
    "id": 141,
    "distrito": "CUYULTITÁN",
    "codigo_distrito": "01",
    "municipio": "LA PAZ OESTE",
    "codigo_municipio": "23",
    "departamento": "La Paz",
    "codigo_departamento": "08",
    "label": "CUYULTITÁN (LA PAZ OESTE)"
  },
  {
    "id": 142,
    "distrito": "OLOCUILTA",
    "codigo_distrito": "05",
    "municipio": "LA PAZ OESTE",
    "codigo_municipio": "23",
    "departamento": "La Paz",
    "codigo_departamento": "08",
    "label": "OLOCUILTA (LA PAZ OESTE)"
  },
  {
    "id": 143,
    "distrito": "SAN JUAN TALPA",
    "codigo_distrito": "11",
    "municipio": "LA PAZ OESTE",
    "codigo_municipio": "23",
    "departamento": "La Paz",
    "codigo_departamento": "08",
    "label": "SAN JUAN TALPA (LA PAZ OESTE)"
  },
  {
    "id": 144,
    "distrito": "SAN LUIS TALPA",
    "codigo_distrito": "13",
    "municipio": "LA PAZ OESTE",
    "codigo_municipio": "23",
    "departamento": "La Paz",
    "codigo_departamento": "08",
    "label": "SAN LUIS TALPA (LA PAZ OESTE)"
  },
  {
    "id": 145,
    "distrito": "SAN PEDRO MASAHUAT",
    "codigo_distrito": "15",
    "municipio": "LA PAZ OESTE",
    "codigo_municipio": "23",
    "departamento": "La Paz",
    "codigo_departamento": "08",
    "label": "SAN PEDRO MASAHUAT (LA PAZ OESTE)"
  },
  {
    "id": 146,
    "distrito": "TAPALHUACA",
    "codigo_distrito": "20",
    "municipio": "LA PAZ OESTE",
    "codigo_municipio": "23",
    "departamento": "La Paz",
    "codigo_departamento": "08",
    "label": "TAPALHUACA (LA PAZ OESTE)"
  },
  {
    "id": 147,
    "distrito": "SAN FRANCISCO CHINAMECA",
    "codigo_distrito": "09",
    "municipio": "LA PAZ OESTE",
    "codigo_municipio": "23",
    "departamento": "La Paz",
    "codigo_departamento": "08",
    "label": "SAN FRANCISCO CHINAMECA (LA PAZ OESTE)"
  },
  {
    "id": 148,
    "distrito": "EL ROSARIO",
    "codigo_distrito": "02",
    "municipio": "LA PAZ CENTRO",
    "codigo_municipio": "24",
    "departamento": "La Paz",
    "codigo_departamento": "08",
    "label": "EL ROSARIO (LA PAZ CENTRO)"
  },
  {
    "id": 149,
    "distrito": "JERUSALÉN",
    "codigo_distrito": "03",
    "municipio": "LA PAZ CENTRO",
    "codigo_municipio": "24",
    "departamento": "La Paz",
    "codigo_departamento": "08",
    "label": "JERUSALÉN (LA PAZ CENTRO)"
  },
  {
    "id": 150,
    "distrito": "MERCEDES LA CEIBA",
    "codigo_distrito": "04",
    "municipio": "LA PAZ CENTRO",
    "codigo_municipio": "24",
    "departamento": "La Paz",
    "codigo_departamento": "08",
    "label": "MERCEDES LA CEIBA (LA PAZ CENTRO)"
  },
  {
    "id": 151,
    "distrito": "PARAÍSO OSORIO",
    "codigo_distrito": "06",
    "municipio": "LA PAZ CENTRO",
    "codigo_municipio": "24",
    "departamento": "La Paz",
    "codigo_departamento": "08",
    "label": "PARAÍSO OSORIO (LA PAZ CENTRO)"
  },
  {
    "id": 152,
    "distrito": "SAN ANTONIO MASAHUAT",
    "codigo_distrito": "07",
    "municipio": "LA PAZ CENTRO",
    "codigo_municipio": "24",
    "departamento": "La Paz",
    "codigo_departamento": "08",
    "label": "SAN ANTONIO MASAHUAT (LA PAZ CENTRO)"
  },
  {
    "id": 153,
    "distrito": "SAN EMIGDIO",
    "codigo_distrito": "08",
    "municipio": "LA PAZ CENTRO",
    "codigo_municipio": "24",
    "departamento": "La Paz",
    "codigo_departamento": "08",
    "label": "SAN EMIGDIO (LA PAZ CENTRO)"
  },
  {
    "id": 154,
    "distrito": "SAN JUAN TEPEZONTES",
    "codigo_distrito": "12",
    "municipio": "LA PAZ CENTRO",
    "codigo_municipio": "24",
    "departamento": "La Paz",
    "codigo_departamento": "08",
    "label": "SAN JUAN TEPEZONTES (LA PAZ CENTRO)"
  },
  {
    "id": 155,
    "distrito": "SN LUIS LA HERR",
    "codigo_distrito": "22",
    "municipio": "LA PAZ CENTRO",
    "codigo_municipio": "24",
    "departamento": "La Paz",
    "codigo_departamento": "08",
    "label": "SN LUIS LA HERR (LA PAZ CENTRO)"
  },
  {
    "id": 156,
    "distrito": "SAN MIGUEL TEPEZONTES",
    "codigo_distrito": "14",
    "municipio": "LA PAZ CENTRO",
    "codigo_municipio": "24",
    "departamento": "La Paz",
    "codigo_departamento": "08",
    "label": "SAN MIGUEL TEPEZONTES (LA PAZ CENTRO)"
  },
  {
    "id": 157,
    "distrito": "SAN PEDRO NONUALCO",
    "codigo_distrito": "16",
    "municipio": "LA PAZ CENTRO",
    "codigo_municipio": "24",
    "departamento": "La Paz",
    "codigo_departamento": "08",
    "label": "SAN PEDRO NONUALCO (LA PAZ CENTRO)"
  },
  {
    "id": 158,
    "distrito": "SANTA MARÍA OSTUMA",
    "codigo_distrito": "18",
    "municipio": "LA PAZ CENTRO",
    "codigo_municipio": "24",
    "departamento": "La Paz",
    "codigo_departamento": "08",
    "label": "SANTA MARÍA OSTUMA (LA PAZ CENTRO)"
  },
  {
    "id": 159,
    "distrito": "SANTIAGO NONUALCO",
    "codigo_distrito": "19",
    "municipio": "LA PAZ CENTRO",
    "codigo_municipio": "24",
    "departamento": "La Paz",
    "codigo_departamento": "08",
    "label": "SANTIAGO NONUALCO (LA PAZ CENTRO)"
  },
  {
    "id": 160,
    "distrito": "SAN JUAN NONUALCO",
    "codigo_distrito": "10",
    "municipio": "LA PAZ ESTE",
    "codigo_municipio": "25",
    "departamento": "La Paz",
    "codigo_departamento": "08",
    "label": "SAN JUAN NONUALCO (LA PAZ ESTE)"
  },
  {
    "id": 161,
    "distrito": "SAN RAFAEL OBRAJUELO",
    "codigo_distrito": "17",
    "municipio": "LA PAZ ESTE",
    "codigo_municipio": "25",
    "departamento": "La Paz",
    "codigo_departamento": "08",
    "label": "SAN RAFAEL OBRAJUELO (LA PAZ ESTE)"
  },
  {
    "id": 162,
    "distrito": "ZACATECOLUCA",
    "codigo_distrito": "21",
    "municipio": "LA PAZ ESTE",
    "codigo_municipio": "25",
    "departamento": "La Paz",
    "codigo_departamento": "08",
    "label": "ZACATECOLUCA (LA PAZ ESTE)"
  },
  {
    "id": 163,
    "distrito": "ANAMOROS",
    "codigo_distrito": "01",
    "municipio": "LA UNION NORTE",
    "codigo_municipio": "19",
    "departamento": "La Unión",
    "codigo_departamento": "14",
    "label": "ANAMOROS (LA UNION NORTE)"
  },
  {
    "id": 164,
    "distrito": "BOLÍVAR",
    "codigo_distrito": "02",
    "municipio": "LA UNION NORTE",
    "codigo_municipio": "19",
    "departamento": "La Unión",
    "codigo_departamento": "14",
    "label": "BOLÍVAR (LA UNION NORTE)"
  },
  {
    "id": 165,
    "distrito": "CONCEPCIÓN DE ORIENTE",
    "codigo_distrito": "03",
    "municipio": "LA UNION NORTE",
    "codigo_municipio": "19",
    "departamento": "La Unión",
    "codigo_departamento": "14",
    "label": "CONCEPCIÓN DE ORIENTE (LA UNION NORTE)"
  },
  {
    "id": 166,
    "distrito": "EL SAUCE",
    "codigo_distrito": "06",
    "municipio": "LA UNION NORTE",
    "codigo_municipio": "19",
    "departamento": "La Unión",
    "codigo_departamento": "14",
    "label": "EL SAUCE (LA UNION NORTE)"
  },
  {
    "id": 167,
    "distrito": "LISLIQUE",
    "codigo_distrito": "09",
    "municipio": "LA UNION NORTE",
    "codigo_municipio": "19",
    "departamento": "La Unión",
    "codigo_departamento": "14",
    "label": "LISLIQUE (LA UNION NORTE)"
  },
  {
    "id": 168,
    "distrito": "NUEVA ESPARTA",
    "codigo_distrito": "11",
    "municipio": "LA UNION NORTE",
    "codigo_municipio": "19",
    "departamento": "La Unión",
    "codigo_departamento": "14",
    "label": "NUEVA ESPARTA (LA UNION NORTE)"
  },
  {
    "id": 169,
    "distrito": "PASAQUINA",
    "codigo_distrito": "12",
    "municipio": "LA UNION NORTE",
    "codigo_municipio": "19",
    "departamento": "La Unión",
    "codigo_departamento": "14",
    "label": "PASAQUINA (LA UNION NORTE)"
  },
  {
    "id": 170,
    "distrito": "POLORÓS",
    "codigo_distrito": "13",
    "municipio": "LA UNION NORTE",
    "codigo_municipio": "19",
    "departamento": "La Unión",
    "codigo_departamento": "14",
    "label": "POLORÓS (LA UNION NORTE)"
  },
  {
    "id": 171,
    "distrito": "SAN JOSÉ LA FUENTE",
    "codigo_distrito": "15",
    "municipio": "LA UNION NORTE",
    "codigo_municipio": "19",
    "departamento": "La Unión",
    "codigo_departamento": "14",
    "label": "SAN JOSÉ LA FUENTE (LA UNION NORTE)"
  },
  {
    "id": 172,
    "distrito": "SANTA ROSA DE LIMA",
    "codigo_distrito": "16",
    "municipio": "LA UNION NORTE",
    "codigo_municipio": "19",
    "departamento": "La Unión",
    "codigo_departamento": "14",
    "label": "SANTA ROSA DE LIMA (LA UNION NORTE)"
  },
  {
    "id": 173,
    "distrito": "CONCHAGUA",
    "codigo_distrito": "04",
    "municipio": "LA UNION SUR",
    "codigo_municipio": "20",
    "departamento": "La Unión",
    "codigo_departamento": "14",
    "label": "CONCHAGUA (LA UNION SUR)"
  },
  {
    "id": 174,
    "distrito": "EL CARMEN",
    "codigo_distrito": "05",
    "municipio": "LA UNION SUR",
    "codigo_municipio": "20",
    "departamento": "La Unión",
    "codigo_departamento": "14",
    "label": "EL CARMEN (LA UNION SUR)"
  },
  {
    "id": 175,
    "distrito": "INTIPUCÁ",
    "codigo_distrito": "07",
    "municipio": "LA UNION SUR",
    "codigo_municipio": "20",
    "departamento": "La Unión",
    "codigo_departamento": "14",
    "label": "INTIPUCÁ (LA UNION SUR)"
  },
  {
    "id": 176,
    "distrito": "LA UNIÓN",
    "codigo_distrito": "08",
    "municipio": "LA UNION SUR",
    "codigo_municipio": "20",
    "departamento": "La Unión",
    "codigo_departamento": "14",
    "label": "LA UNIÓN (LA UNION SUR)"
  },
  {
    "id": 177,
    "distrito": "MEANGUERA DEL GOLFO",
    "codigo_distrito": "10",
    "municipio": "LA UNION SUR",
    "codigo_municipio": "20",
    "departamento": "La Unión",
    "codigo_departamento": "14",
    "label": "MEANGUERA DEL GOLFO (LA UNION SUR)"
  },
  {
    "id": 178,
    "distrito": "SAN ALEJO",
    "codigo_distrito": "14",
    "municipio": "LA UNION SUR",
    "codigo_municipio": "20",
    "departamento": "La Unión",
    "codigo_departamento": "14",
    "label": "SAN ALEJO (LA UNION SUR)"
  },
  {
    "id": 179,
    "distrito": "YAYANTIQUE",
    "codigo_distrito": "17",
    "municipio": "LA UNION SUR",
    "codigo_municipio": "20",
    "departamento": "La Unión",
    "codigo_departamento": "14",
    "label": "YAYANTIQUE (LA UNION SUR)"
  },
  {
    "id": 180,
    "distrito": "YUCUAIQUÍN",
    "codigo_distrito": "18",
    "municipio": "LA UNION SUR",
    "codigo_municipio": "20",
    "departamento": "La Unión",
    "codigo_departamento": "14",
    "label": "YUCUAIQUÍN (LA UNION SUR)"
  },
  {
    "id": 181,
    "distrito": "SANTIAGO DE MARÍA",
    "codigo_distrito": "21",
    "municipio": "USULUTAN NORTE",
    "codigo_municipio": "24",
    "departamento": "Usulután",
    "codigo_departamento": "11",
    "label": "SANTIAGO DE MARÍA (USULUTAN NORTE)"
  },
  {
    "id": 182,
    "distrito": "ALEGRÍA",
    "codigo_distrito": "01",
    "municipio": "USULUTAN NORTE",
    "codigo_municipio": "24",
    "departamento": "Usulután",
    "codigo_departamento": "11",
    "label": "ALEGRÍA (USULUTAN NORTE)"
  },
  {
    "id": 183,
    "distrito": "BERLÍN",
    "codigo_distrito": "02",
    "municipio": "USULUTAN NORTE",
    "codigo_municipio": "24",
    "departamento": "Usulután",
    "codigo_departamento": "11",
    "label": "BERLÍN (USULUTAN NORTE)"
  },
  {
    "id": 184,
    "distrito": "MERCEDES UMAÑA",
    "codigo_distrito": "11",
    "municipio": "USULUTAN NORTE",
    "codigo_municipio": "24",
    "departamento": "Usulután",
    "codigo_departamento": "11",
    "label": "MERCEDES UMAÑA (USULUTAN NORTE)"
  },
  {
    "id": 185,
    "distrito": "JUCUAPA",
    "codigo_distrito": "09",
    "municipio": "USULUTAN NORTE",
    "codigo_municipio": "24",
    "departamento": "Usulután",
    "codigo_departamento": "11",
    "label": "JUCUAPA (USULUTAN NORTE)"
  },
  {
    "id": 186,
    "distrito": "EL TRIUNFO",
    "codigo_distrito": "05",
    "municipio": "USULUTAN NORTE",
    "codigo_municipio": "24",
    "departamento": "Usulután",
    "codigo_departamento": "11",
    "label": "EL TRIUNFO (USULUTAN NORTE)"
  },
  {
    "id": 187,
    "distrito": "ESTANZUELAS",
    "codigo_distrito": "07",
    "municipio": "USULUTAN NORTE",
    "codigo_municipio": "24",
    "departamento": "Usulután",
    "codigo_departamento": "11",
    "label": "ESTANZUELAS (USULUTAN NORTE)"
  },
  {
    "id": 188,
    "distrito": "SAN BUENAVENTURA",
    "codigo_distrito": "16",
    "municipio": "USULUTAN NORTE",
    "codigo_municipio": "24",
    "departamento": "Usulután",
    "codigo_departamento": "11",
    "label": "SAN BUENAVENTURA (USULUTAN NORTE)"
  },
  {
    "id": 189,
    "distrito": "NUEVA GRANADA",
    "codigo_distrito": "12",
    "municipio": "USULUTAN NORTE",
    "codigo_municipio": "24",
    "departamento": "Usulután",
    "codigo_departamento": "11",
    "label": "NUEVA GRANADA (USULUTAN NORTE)"
  },
  {
    "id": 190,
    "distrito": "USULUTÁN",
    "codigo_distrito": "23",
    "municipio": "USULUTAN ESTE",
    "codigo_municipio": "25",
    "departamento": "Usulután",
    "codigo_departamento": "11",
    "label": "USULUTÁN (USULUTAN ESTE)"
  },
  {
    "id": 191,
    "distrito": "JUCUARÁN",
    "codigo_distrito": "10",
    "municipio": "USULUTAN ESTE",
    "codigo_municipio": "25",
    "departamento": "Usulután",
    "codigo_departamento": "11",
    "label": "JUCUARÁN (USULUTAN ESTE)"
  },
  {
    "id": 192,
    "distrito": "SAN DIONISIO",
    "codigo_distrito": "17",
    "municipio": "USULUTAN ESTE",
    "codigo_municipio": "25",
    "departamento": "Usulután",
    "codigo_departamento": "11",
    "label": "SAN DIONISIO (USULUTAN ESTE)"
  },
  {
    "id": 193,
    "distrito": "CONCEP BATRES",
    "codigo_distrito": "04",
    "municipio": "USULUTAN ESTE",
    "codigo_municipio": "25",
    "departamento": "Usulután",
    "codigo_departamento": "11",
    "label": "CONCEP BATRES (USULUTAN ESTE)"
  },
  {
    "id": 194,
    "distrito": "SANTA MARÍA",
    "codigo_distrito": "20",
    "municipio": "USULUTAN ESTE",
    "codigo_municipio": "25",
    "departamento": "Usulután",
    "codigo_departamento": "11",
    "label": "SANTA MARÍA (USULUTAN ESTE)"
  },
  {
    "id": 195,
    "distrito": "OZATLÁN",
    "codigo_distrito": "13",
    "municipio": "USULUTAN ESTE",
    "codigo_municipio": "25",
    "departamento": "Usulután",
    "codigo_departamento": "11",
    "label": "OZATLÁN (USULUTAN ESTE)"
  },
  {
    "id": 196,
    "distrito": "TECAPÁN",
    "codigo_distrito": "22",
    "municipio": "USULUTAN ESTE",
    "codigo_municipio": "25",
    "departamento": "Usulután",
    "codigo_departamento": "11",
    "label": "TECAPÁN (USULUTAN ESTE)"
  },
  {
    "id": 197,
    "distrito": "SANTA ELENA",
    "codigo_distrito": "18",
    "municipio": "USULUTAN ESTE",
    "codigo_municipio": "25",
    "departamento": "Usulután",
    "codigo_departamento": "11",
    "label": "SANTA ELENA (USULUTAN ESTE)"
  },
  {
    "id": 198,
    "distrito": "CALIFORNIA",
    "codigo_distrito": "03",
    "municipio": "USULUTAN ESTE",
    "codigo_municipio": "25",
    "departamento": "Usulután",
    "codigo_departamento": "11",
    "label": "CALIFORNIA (USULUTAN ESTE)"
  },
  {
    "id": 199,
    "distrito": "EREGUAYQUÍN",
    "codigo_distrito": "06",
    "municipio": "USULUTAN ESTE",
    "codigo_municipio": "25",
    "departamento": "Usulután",
    "codigo_departamento": "11",
    "label": "EREGUAYQUÍN (USULUTAN ESTE)"
  },
  {
    "id": 200,
    "distrito": "JIQUILISCO",
    "codigo_distrito": "08",
    "municipio": "USULUTAN OESTE",
    "codigo_municipio": "26",
    "departamento": "Usulután",
    "codigo_departamento": "11",
    "label": "JIQUILISCO (USULUTAN OESTE)"
  },
  {
    "id": 201,
    "distrito": "PTO EL TRIUNFO",
    "codigo_distrito": "14",
    "municipio": "USULUTAN OESTE",
    "codigo_municipio": "26",
    "departamento": "Usulután",
    "codigo_departamento": "11",
    "label": "PTO EL TRIUNFO (USULUTAN OESTE)"
  },
  {
    "id": 202,
    "distrito": "SAN AGUSTÍN",
    "codigo_distrito": "15",
    "municipio": "USULUTAN OESTE",
    "codigo_municipio": "26",
    "departamento": "Usulután",
    "codigo_departamento": "11",
    "label": "SAN AGUSTÍN (USULUTAN OESTE)"
  },
  {
    "id": 203,
    "distrito": "SAN FCO JAVIER",
    "codigo_distrito": "19",
    "municipio": "USULUTAN OESTE",
    "codigo_municipio": "26",
    "departamento": "Usulután",
    "codigo_departamento": "11",
    "label": "SAN FCO JAVIER (USULUTAN OESTE)"
  },
  {
    "id": 204,
    "distrito": "APASTEPEQUE",
    "codigo_distrito": "01",
    "municipio": "SAN VICENTE NORTE",
    "codigo_municipio": "14",
    "departamento": "San Vicente",
    "codigo_departamento": "10",
    "label": "APASTEPEQUE (SAN VICENTE NORTE)"
  },
  {
    "id": 205,
    "distrito": "SANTA CLARA",
    "codigo_distrito": "04",
    "municipio": "SAN VICENTE NORTE",
    "codigo_municipio": "14",
    "departamento": "San Vicente",
    "codigo_departamento": "10",
    "label": "SANTA CLARA (SAN VICENTE NORTE)"
  },
  {
    "id": 206,
    "distrito": "SAN ILDEFONSO",
    "codigo_distrito": "07",
    "municipio": "SAN VICENTE NORTE",
    "codigo_municipio": "14",
    "departamento": "San Vicente",
    "codigo_departamento": "10",
    "label": "SAN ILDEFONSO (SAN VICENTE NORTE)"
  },
  {
    "id": 207,
    "distrito": "SN EST CATARINA",
    "codigo_distrito": "06",
    "municipio": "SAN VICENTE NORTE",
    "codigo_municipio": "14",
    "departamento": "San Vicente",
    "codigo_departamento": "10",
    "label": "SN EST CATARINA (SAN VICENTE NORTE)"
  },
  {
    "id": 208,
    "distrito": "SAN SEBASTIÁN",
    "codigo_distrito": "09",
    "municipio": "SAN VICENTE NORTE",
    "codigo_municipio": "14",
    "departamento": "San Vicente",
    "codigo_departamento": "10",
    "label": "SAN SEBASTIÁN (SAN VICENTE NORTE)"
  },
  {
    "id": 209,
    "distrito": "SAN LORENZO",
    "codigo_distrito": "08",
    "municipio": "SAN VICENTE NORTE",
    "codigo_municipio": "14",
    "departamento": "San Vicente",
    "codigo_departamento": "10",
    "label": "SAN LORENZO (SAN VICENTE NORTE)"
  },
  {
    "id": 210,
    "distrito": "SANTO DOMINGO",
    "codigo_distrito": "05",
    "municipio": "SAN VICENTE NORTE",
    "codigo_municipio": "14",
    "departamento": "San Vicente",
    "codigo_departamento": "10",
    "label": "SANTO DOMINGO (SAN VICENTE NORTE)"
  },
  {
    "id": 211,
    "distrito": "SAN VICENTE",
    "codigo_distrito": "10",
    "municipio": "SAN VICENTE SUR",
    "codigo_municipio": "15",
    "departamento": "San Vicente",
    "codigo_departamento": "10",
    "label": "SAN VICENTE (SAN VICENTE SUR)"
  },
  {
    "id": 212,
    "distrito": "GUADALUPE",
    "codigo_distrito": "02",
    "municipio": "SAN VICENTE SUR",
    "codigo_municipio": "15",
    "departamento": "San Vicente",
    "codigo_departamento": "10",
    "label": "GUADALUPE (SAN VICENTE SUR)"
  },
  {
    "id": 213,
    "distrito": "VERAPAZ",
    "codigo_distrito": "13",
    "municipio": "SAN VICENTE SUR",
    "codigo_municipio": "15",
    "departamento": "San Vicente",
    "codigo_departamento": "10",
    "label": "VERAPAZ (SAN VICENTE SUR)"
  },
  {
    "id": 214,
    "distrito": "TEPETITÁN",
    "codigo_distrito": "12",
    "municipio": "SAN VICENTE SUR",
    "codigo_municipio": "15",
    "departamento": "San Vicente",
    "codigo_departamento": "10",
    "label": "TEPETITÁN (SAN VICENTE SUR)"
  },
  {
    "id": 215,
    "distrito": "TECOLUCA",
    "codigo_distrito": "11",
    "municipio": "SAN VICENTE SUR",
    "codigo_municipio": "15",
    "departamento": "San Vicente",
    "codigo_departamento": "10",
    "label": "TECOLUCA (SAN VICENTE SUR)"
  },
  {
    "id": 216,
    "distrito": "SAN CAY ISTEPEQ",
    "codigo_distrito": "03",
    "municipio": "SAN VICENTE SUR",
    "codigo_municipio": "15",
    "departamento": "San Vicente",
    "codigo_departamento": "10",
    "label": "SAN CAY ISTEPEQ (SAN VICENTE SUR)"
  },
  {
    "id": 217,
    "distrito": "CIUDAD BARRIOS",
    "codigo_distrito": "02",
    "municipio": "SAN MIGUEL NORTE",
    "codigo_municipio": "21",
    "departamento": "San Miguel",
    "codigo_departamento": "12",
    "label": "CIUDAD BARRIOS (SAN MIGUEL NORTE)"
  },
  {
    "id": 218,
    "distrito": "SESORI",
    "codigo_distrito": "19",
    "municipio": "SAN MIGUEL NORTE",
    "codigo_municipio": "21",
    "departamento": "San Miguel",
    "codigo_departamento": "12",
    "label": "SESORI (SAN MIGUEL NORTE)"
  },
  {
    "id": 219,
    "distrito": "NVO EDÉN S JUAN",
    "codigo_distrito": "11",
    "municipio": "SAN MIGUEL NORTE",
    "codigo_municipio": "21",
    "departamento": "San Miguel",
    "codigo_departamento": "12",
    "label": "NVO EDÉN S JUAN (SAN MIGUEL NORTE)"
  },
  {
    "id": 220,
    "distrito": "SAN GERARDO",
    "codigo_distrito": "14",
    "municipio": "SAN MIGUEL NORTE",
    "codigo_municipio": "21",
    "departamento": "San Miguel",
    "codigo_departamento": "12",
    "label": "SAN GERARDO (SAN MIGUEL NORTE)"
  },
  {
    "id": 221,
    "distrito": "SAN LUIS REINA",
    "codigo_distrito": "16",
    "municipio": "SAN MIGUEL NORTE",
    "codigo_municipio": "21",
    "departamento": "San Miguel",
    "codigo_departamento": "12",
    "label": "SAN LUIS REINA (SAN MIGUEL NORTE)"
  },
  {
    "id": 222,
    "distrito": "CAROLINA",
    "codigo_distrito": "01",
    "municipio": "SAN MIGUEL NORTE",
    "codigo_municipio": "21",
    "departamento": "San Miguel",
    "codigo_departamento": "12",
    "label": "CAROLINA (SAN MIGUEL NORTE)"
  },
  {
    "id": 223,
    "distrito": "SAN ANT D MOSCO",
    "codigo_distrito": "13",
    "municipio": "SAN MIGUEL NORTE",
    "codigo_municipio": "21",
    "departamento": "San Miguel",
    "codigo_departamento": "12",
    "label": "SAN ANT D MOSCO (SAN MIGUEL NORTE)"
  },
  {
    "id": 224,
    "distrito": "CHAPELTIQUE",
    "codigo_distrito": "04",
    "municipio": "SAN MIGUEL NORTE",
    "codigo_municipio": "21",
    "departamento": "San Miguel",
    "codigo_departamento": "12",
    "label": "CHAPELTIQUE (SAN MIGUEL NORTE)"
  },
  {
    "id": 225,
    "distrito": "SAN MIGUEL",
    "codigo_distrito": "17",
    "municipio": "SAN MIGUEL CENTRO",
    "codigo_municipio": "22",
    "departamento": "San Miguel",
    "codigo_departamento": "12",
    "label": "SAN MIGUEL (SAN MIGUEL CENTRO)"
  },
  {
    "id": 226,
    "distrito": "COMACARÁN",
    "codigo_distrito": "03",
    "municipio": "SAN MIGUEL CENTRO",
    "codigo_municipio": "22",
    "departamento": "San Miguel",
    "codigo_departamento": "12",
    "label": "COMACARÁN (SAN MIGUEL CENTRO)"
  },
  {
    "id": 227,
    "distrito": "ULUAZAPA",
    "codigo_distrito": "20",
    "municipio": "SAN MIGUEL CENTRO",
    "codigo_municipio": "22",
    "departamento": "San Miguel",
    "codigo_departamento": "12",
    "label": "ULUAZAPA (SAN MIGUEL CENTRO)"
  },
  {
    "id": 228,
    "distrito": "MONCAGUA",
    "codigo_distrito": "09",
    "municipio": "SAN MIGUEL CENTRO",
    "codigo_municipio": "22",
    "departamento": "San Miguel",
    "codigo_departamento": "12",
    "label": "MONCAGUA (SAN MIGUEL CENTRO)"
  },
  {
    "id": 229,
    "distrito": "QUELEPA",
    "codigo_distrito": "12",
    "municipio": "SAN MIGUEL CENTRO",
    "codigo_municipio": "22",
    "departamento": "San Miguel",
    "codigo_departamento": "12",
    "label": "QUELEPA (SAN MIGUEL CENTRO)"
  },
  {
    "id": 230,
    "distrito": "CHIRILAGUA",
    "codigo_distrito": "06",
    "municipio": "SAN MIGUEL CENTRO",
    "codigo_municipio": "22",
    "departamento": "San Miguel",
    "codigo_departamento": "12",
    "label": "CHIRILAGUA (SAN MIGUEL CENTRO)"
  },
  {
    "id": 231,
    "distrito": "CHINAMECA",
    "codigo_distrito": "05",
    "municipio": "SAN MIGUEL OESTE",
    "codigo_municipio": "23",
    "departamento": "San Miguel",
    "codigo_departamento": "12",
    "label": "CHINAMECA (SAN MIGUEL OESTE)"
  },
  {
    "id": 232,
    "distrito": "NUEVA GUADALUPE",
    "codigo_distrito": "10",
    "municipio": "SAN MIGUEL OESTE",
    "codigo_municipio": "23",
    "departamento": "San Miguel",
    "codigo_departamento": "12",
    "label": "NUEVA GUADALUPE (SAN MIGUEL OESTE)"
  },
  {
    "id": 233,
    "distrito": "LOLOTIQUE",
    "codigo_distrito": "08",
    "municipio": "SAN MIGUEL OESTE",
    "codigo_municipio": "23",
    "departamento": "San Miguel",
    "codigo_departamento": "12",
    "label": "LOLOTIQUE (SAN MIGUEL OESTE)"
  },
  {
    "id": 234,
    "distrito": "SAN JORGE",
    "codigo_distrito": "15",
    "municipio": "SAN MIGUEL OESTE",
    "codigo_municipio": "23",
    "departamento": "San Miguel",
    "codigo_departamento": "12",
    "label": "SAN JORGE (SAN MIGUEL OESTE)"
  },
  {
    "id": 235,
    "distrito": "SAN RAF ORIENTE",
    "codigo_distrito": "18",
    "municipio": "SAN MIGUEL OESTE",
    "codigo_municipio": "23",
    "departamento": "San Miguel",
    "codigo_departamento": "12",
    "label": "SAN RAF ORIENTE (SAN MIGUEL OESTE)"
  },
  {
    "id": 236,
    "distrito": "EL TRANSITO",
    "codigo_distrito": "07",
    "municipio": "SAN MIGUEL OESTE",
    "codigo_municipio": "23",
    "departamento": "San Miguel",
    "codigo_departamento": "12",
    "label": "EL TRANSITO (SAN MIGUEL OESTE)"
  },
  {
    "id": 237,
    "distrito": "ARAMBALA",
    "codigo_distrito": "01",
    "municipio": "MORAZAN NORTE",
    "codigo_municipio": "27",
    "departamento": "Morazán",
    "codigo_departamento": "13",
    "label": "ARAMBALA (MORAZAN NORTE)"
  },
  {
    "id": 238,
    "distrito": "CACAOPERA",
    "codigo_distrito": "02",
    "municipio": "MORAZAN NORTE",
    "codigo_municipio": "27",
    "departamento": "Morazán",
    "codigo_departamento": "13",
    "label": "CACAOPERA (MORAZAN NORTE)"
  },
  {
    "id": 239,
    "distrito": "CORINTO",
    "codigo_distrito": "03",
    "municipio": "MORAZAN NORTE",
    "codigo_municipio": "27",
    "departamento": "Morazán",
    "codigo_departamento": "13",
    "label": "CORINTO (MORAZAN NORTE)"
  },
  {
    "id": 240,
    "distrito": "EL ROSARIO",
    "codigo_distrito": "07",
    "municipio": "MORAZAN NORTE",
    "codigo_municipio": "27",
    "departamento": "Morazán",
    "codigo_departamento": "13",
    "label": "EL ROSARIO (MORAZAN NORTE)"
  },
  {
    "id": 241,
    "distrito": "JOATECA",
    "codigo_distrito": "10",
    "municipio": "MORAZAN NORTE",
    "codigo_municipio": "27",
    "departamento": "Morazán",
    "codigo_departamento": "13",
    "label": "JOATECA (MORAZAN NORTE)"
  },
  {
    "id": 242,
    "distrito": "JOCOAITIQUE",
    "codigo_distrito": "11",
    "municipio": "MORAZAN NORTE",
    "codigo_municipio": "27",
    "departamento": "Morazán",
    "codigo_departamento": "13",
    "label": "JOCOAITIQUE (MORAZAN NORTE)"
  },
  {
    "id": 243,
    "distrito": "MEANGUERA",
    "codigo_distrito": "14",
    "municipio": "MORAZAN NORTE",
    "codigo_municipio": "27",
    "departamento": "Morazán",
    "codigo_departamento": "13",
    "label": "MEANGUERA (MORAZAN NORTE)"
  },
  {
    "id": 244,
    "distrito": "PERQUÍN",
    "codigo_distrito": "16",
    "municipio": "MORAZAN NORTE",
    "codigo_municipio": "27",
    "departamento": "Morazán",
    "codigo_departamento": "13",
    "label": "PERQUÍN (MORAZAN NORTE)"
  },
  {
    "id": 245,
    "distrito": "SAN FERNANDO",
    "codigo_distrito": "18",
    "municipio": "MORAZAN NORTE",
    "codigo_municipio": "27",
    "departamento": "Morazán",
    "codigo_departamento": "13",
    "label": "SAN FERNANDO (MORAZAN NORTE)"
  },
  {
    "id": 246,
    "distrito": "SAN ISIDRO",
    "codigo_distrito": "20",
    "municipio": "MORAZAN NORTE",
    "codigo_municipio": "27",
    "departamento": "Morazán",
    "codigo_departamento": "13",
    "label": "SAN ISIDRO (MORAZAN NORTE)"
  },
  {
    "id": 247,
    "distrito": "TOROLA",
    "codigo_distrito": "24",
    "municipio": "MORAZAN NORTE",
    "codigo_municipio": "27",
    "departamento": "Morazán",
    "codigo_departamento": "13",
    "label": "TOROLA (MORAZAN NORTE)"
  },
  {
    "id": 248,
    "distrito": "CHILANGA",
    "codigo_distrito": "04",
    "municipio": "MORAZAN SUR",
    "codigo_municipio": "28",
    "departamento": "Morazán",
    "codigo_departamento": "13",
    "label": "CHILANGA (MORAZAN SUR)"
  },
  {
    "id": 249,
    "distrito": "DELIC DE CONCEP",
    "codigo_distrito": "05",
    "municipio": "MORAZAN SUR",
    "codigo_municipio": "28",
    "departamento": "Morazán",
    "codigo_departamento": "13",
    "label": "DELIC DE CONCEP (MORAZAN SUR)"
  },
  {
    "id": 250,
    "distrito": "EL DIVISADERO",
    "codigo_distrito": "06",
    "municipio": "MORAZAN SUR",
    "codigo_municipio": "28",
    "departamento": "Morazán",
    "codigo_departamento": "13",
    "label": "EL DIVISADERO (MORAZAN SUR)"
  },
  {
    "id": 251,
    "distrito": "GUALOCOCTI",
    "codigo_distrito": "08",
    "municipio": "MORAZAN SUR",
    "codigo_municipio": "28",
    "departamento": "Morazán",
    "codigo_departamento": "13",
    "label": "GUALOCOCTI (MORAZAN SUR)"
  },
  {
    "id": 252,
    "distrito": "GUATAJIAGUA",
    "codigo_distrito": "09",
    "municipio": "MORAZAN SUR",
    "codigo_municipio": "28",
    "departamento": "Morazán",
    "codigo_departamento": "13",
    "label": "GUATAJIAGUA (MORAZAN SUR)"
  },
  {
    "id": 253,
    "distrito": "JOCORO",
    "codigo_distrito": "12",
    "municipio": "MORAZAN SUR",
    "codigo_municipio": "28",
    "departamento": "Morazán",
    "codigo_departamento": "13",
    "label": "JOCORO (MORAZAN SUR)"
  },
  {
    "id": 254,
    "distrito": "LOLOTIQUILLO",
    "codigo_distrito": "13",
    "municipio": "MORAZAN SUR",
    "codigo_municipio": "28",
    "departamento": "Morazán",
    "codigo_departamento": "13",
    "label": "LOLOTIQUILLO (MORAZAN SUR)"
  },
  {
    "id": 255,
    "distrito": "OSICALA",
    "codigo_distrito": "15",
    "municipio": "MORAZAN SUR",
    "codigo_municipio": "28",
    "departamento": "Morazán",
    "codigo_departamento": "13",
    "label": "OSICALA (MORAZAN SUR)"
  },
  {
    "id": 256,
    "distrito": "SAN CARLOS",
    "codigo_distrito": "17",
    "municipio": "MORAZAN SUR",
    "codigo_municipio": "28",
    "departamento": "Morazán",
    "codigo_departamento": "13",
    "label": "SAN CARLOS (MORAZAN SUR)"
  },
  {
    "id": 257,
    "distrito": "SAN FCO GOTERA",
    "codigo_distrito": "19",
    "municipio": "MORAZAN SUR",
    "codigo_municipio": "28",
    "departamento": "Morazán",
    "codigo_departamento": "13",
    "label": "SAN FCO GOTERA (MORAZAN SUR)"
  },
  {
    "id": 258,
    "distrito": "SAN SIMÓN",
    "codigo_distrito": "21",
    "municipio": "MORAZAN SUR",
    "codigo_municipio": "28",
    "departamento": "Morazán",
    "codigo_departamento": "13",
    "label": "SAN SIMÓN (MORAZAN SUR)"
  },
  {
    "id": 259,
    "distrito": "SENSEMBRA",
    "codigo_distrito": "22",
    "municipio": "MORAZAN SUR",
    "codigo_municipio": "28",
    "departamento": "Morazán",
    "codigo_departamento": "13",
    "label": "SENSEMBRA (MORAZAN SUR)"
  },
  {
    "id": 260,
    "distrito": "SOCIEDAD",
    "codigo_distrito": "23",
    "municipio": "MORAZAN SUR",
    "codigo_municipio": "28",
    "departamento": "Morazán",
    "codigo_departamento": "13",
    "label": "SOCIEDAD (MORAZAN SUR)"
  },
  {
    "id": 261,
    "distrito": "YAMABAL",
    "codigo_distrito": "25",
    "municipio": "MORAZAN SUR",
    "codigo_municipio": "28",
    "departamento": "Morazán",
    "codigo_departamento": "13",
    "label": "YAMABAL (MORAZAN SUR)"
  },
  {
    "id": 262,
    "distrito": "YOLOAIQUÍN",
    "codigo_distrito": "26",
    "municipio": "MORAZAN SUR",
    "codigo_municipio": "28",
    "departamento": "Morazán",
    "codigo_departamento": "13",
    "label": "YOLOAIQUÍN (MORAZAN SUR)"
  },
  {
    "id": 263,
    "distrito": "Otro (Para extranjeros)",
    "codigo_distrito": "00",
    "municipio": "Otro (Para extranjeros)",
    "codigo_municipio": "00",
    "departamento": "Otro (Para extranjeros)",
    "codigo_departamento": "00",
    "label": "Otro (Para extranjeros) (Otro (Para extranjeros))"
  }
];

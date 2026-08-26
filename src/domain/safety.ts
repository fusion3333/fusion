export type CrimeCategory =
  | 'murder'
  | 'robbery'
  | 'sexual_violence'
  | 'theft'
  | 'violence';

export type DataStatus = 'published' | 'provisional';

export interface CrimeStat {
  regionCode: string;
  regionName: string;
  policeStation?: string;
  period: string;
  category: CrimeCategory;
  incidents: number;
  arrests?: number;
  source: string;
  sourceUpdatedAt?: string;
  status?: DataStatus;
}

export interface PopulationStat {
  regionCode: string;
  regionName: string;
  period: string;
  totalPopulation?: number;
  foreignResidents: number;
  foreignResidentRatio?: number;
  source: string;
  populationSource?: string;
  denominatorPeriodMismatch?: boolean;
  sourceUpdatedAt?: string;
}

export interface NeighborhoodSafetySnapshot {
  regionCode: string;
  regionName: string;
  period: string;
  crimes: CrimeStat[];
  population?: PopulationStat;
  generatedAt: string;
}

export function calculateForeignResidentRatio(
  foreignResidents: number,
  totalPopulation?: number,
): number | undefined {
  if (!totalPopulation || totalPopulation <= 0) return undefined;
  return (foreignResidents / totalPopulation) * 100;
}

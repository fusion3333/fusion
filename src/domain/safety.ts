export type CrimeCategory =
  | 'murder'
  | 'robbery'
  | 'sexual_violence'
  | 'theft'
  | 'violence';

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
}

export interface PopulationStat {
  regionCode: string;
  regionName: string;
  period: string;
  totalPopulation: number;
  foreignResidents: number;
  foreignResidentRatio: number;
  source: string;
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
  totalPopulation: number,
): number {
  if (totalPopulation <= 0) return 0;
  return (foreignResidents / totalPopulation) * 100;
}

export interface RegionOption {
  code: string;
  name: string;
  shortName: string;
  policeStation?: string;
}

export const REGIONS: RegionOption[] = [
  {
    code: '4163000000',
    name: '경기도 양주시',
    shortName: '양주',
    policeStation: '양주경찰서',
  },
  { code: '4115000000', name: '경기도 의정부시', shortName: '의정부', policeStation: '의정부경찰서' },
  { code: '4165000000', name: '경기도 포천시', shortName: '포천', policeStation: '포천경찰서' },
  { code: '4180000000', name: '경기도 연천군', shortName: '연천', policeStation: '연천경찰서' },
  { code: '4128000000', name: '경기도 고양시', shortName: '고양' },
  { code: '4148000000', name: '경기도 파주시', shortName: '파주', policeStation: '파주경찰서' },
  { code: '4131000000', name: '경기도 구리시', shortName: '구리', policeStation: '구리경찰서' },
  { code: '4136000000', name: '경기도 남양주시', shortName: '남양주' },
];

export const DEFAULT_REGION = REGIONS[0];

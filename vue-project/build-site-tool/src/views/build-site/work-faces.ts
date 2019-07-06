export interface workListRequiredFace {
  id: number;
  name: string;
  workComponentName: string;
  configComponentName: string;
}

export interface workListFace extends workListRequiredFace {
  value: object;
}

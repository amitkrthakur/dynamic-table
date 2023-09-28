export interface SourceData {
  title: string;
  groupRowBy?: string;
  tabData: Array<TableData>
}

export interface TableData {
  [key: string]: string | number
}

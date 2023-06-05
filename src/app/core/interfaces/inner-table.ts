export interface InnerTableHeader {
  name: string;
  key: string;
  image?: boolean;
}

export interface InnerTableData {
  [key: string]: any;
  view?: boolean;
  upload?: boolean;
  checked?: boolean;
  edit?: boolean;
  delete?: boolean;
}

export interface InnerTableOptions {
  inlineActions?: boolean;
  checkboxes?: boolean;
  edit?: boolean;
  view?: boolean;
  upload?: boolean;
  delete?: boolean;
  customColumns?: InnerTableCustomColumn[];
  form?: boolean;
  accordian?: boolean;
}

export interface InnerTableCustomColumnAction {
  type: "button" | "link";
  classes: string;
  text: string;
  onClick: (e: any) => void;
  condition: (e: any) => boolean;
}

export interface InnerTableCustomColumn {
  header: string;
  actions?: InnerTableCustomColumnAction[];
}

export interface InnerTable {
  headers: InnerTableHeader[];
  data: InnerTableData[];
  options?: InnerTableOptions;
}

export interface StateUi {
  modal: StateUiModal;
  mask: StateUiMask;
  faldon: StateUiFaldon;
  /** nombre de la sección actual (se incluye en la top bar) */
  section: string;
}

export interface StateUiModal {
  open: boolean;
  component: any;
  props: any;
}

export interface StateUiMask {
  show: boolean;
  text: string;
}

export interface StateUiFaldon {
  show: boolean;
}

export const test = '3'

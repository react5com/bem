export type Bem = (element?: string, modifier?: string) => (string);

export function bemResolve(block: string, element?: string, modifier?: string): string;

export function bem(block: string): Bem;

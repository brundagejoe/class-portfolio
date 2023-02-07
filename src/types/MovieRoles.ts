type Role = {
  character: string;
  role: string;
  note?: string;
};

export type Movie = {
  title: string;
  subtitle?: string;
  roles: Role[];
};

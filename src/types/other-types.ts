interface ISetActiveLink {
  isActive: boolean;
}

interface IButtonProps {
  text: string;
  clickHandler: () => void;
}

export type { ISetActiveLink, IButtonProps };

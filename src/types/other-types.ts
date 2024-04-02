interface ISetActiveLink {
  isActive: boolean;
}

interface IButtonProps {
  text: string;
  clickHandler: () => void;
}

interface IAdditionalNavItem {
  value: string;
  title: string;
}

export type { ISetActiveLink, IButtonProps, IAdditionalNavItem };

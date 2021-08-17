import SearchIcon from "../assets/search.png";
import AccountIcon from "../assets/profileIcon.png";
import NotificationIcon from "../assets/notificationsIcon.png";

interface INavbarLeftLinks {
  link: string;
  id: number;
}

interface INavbarRightLink {
  id: number;
  link: string;
  icon: string;
}

export const NavbarLeftSideLinks: INavbarLeftLinks[] = [
  {
    link: 'Pack',
    id: 0
  },
  {
    link: 'Marketplace',
    id: 1
  },
  {
    link: 'community',
    id: 2
  }
]

export const NavbarRightSideLinks: INavbarRightLink[] = [
  {
    id: 3,
    link: 'search',
    icon: SearchIcon,
  },
  {
    id: 4,
    link: 'account',
    icon: AccountIcon,
  },
  {
    id: 5,
    link: 'notifications',
    icon: NotificationIcon,
  }
]
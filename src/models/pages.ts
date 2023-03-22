export enum PagePath {
  Home = '/',
  About = '/about',
}

export enum Page {
  Home = 'Home',
  About = 'About',
}

export const PagePathToName = {
  [PagePath.Home]: Page.Home,
  [PagePath.About]: Page.About,
};

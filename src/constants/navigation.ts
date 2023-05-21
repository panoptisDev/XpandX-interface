import { routes } from "@/constants/routes";

type Navigation = {
  title: string;
  href: routes;
  feature: string;
  isComingSoon?: boolean;
};

export const NAVIGATION: Navigation[] = [
  {
    title: "swap",
    href: routes.Swap,
    feature: "/swap",
  },
  {
    title: "tokens",
    href: routes.Tokens,
    feature: "/token",
  },
  {
    title: "pools",
    href: routes.Pools,
    feature: "/pools",
  },
];

export const NAVIGATION_MORE: Navigation[] = [
  {
    title: "referral",
    href: routes.Referral,
    feature: "/referral",
    isComingSoon: true,
  },
  {
    title: "analytics",
    href: routes.Analytics,
    feature: "/analytics",
    isComingSoon: false,
  },
  {
    title: "earning_dashboard",
    href: routes.Earning,
    feature: "/earning-dashboard",
    isComingSoon: false,
  },
  {
    title: "launchpad",
    href: routes.Launchpad,
    feature: "/launchpad",
    isComingSoon: false,
  },
  {
    title: "dividend",
    href: routes.Dividend,
    feature: "/dividend",
    isComingSoon: false,
  },
];

export const MORE = [
  routes.Referral,
  routes.Analytics,
  routes.Earning,
  routes.Launchpad,
  routes.Dividend,
] as string[];

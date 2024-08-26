import { NavitemProps } from "../components/Navitem";
import { HomeIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { UserROles } from "../types/urls";
export interface Navitems {
  section: {
    title: string;
    items: NavitemProps[];
  };
}
export interface RecentesData {
  title: string;
  description: string;
  hour: string;
  date: string;
}
export const NavbarItems: Navitems[] = [
  {
    section: {
      title: "Workspace",
      items: [
        {
          icon: HomeIcon,
          text: UserROles.HOME,
          url: "/",
        },
        {
          icon: ClockIcon,
          text: UserROles.RECENTS,
          url: "/recentes",
        },
        {
          icon: StarIcon,
          text: UserROles.FAVORITES,
          url: "/favorites",
        },
      ],
    },
  },
  {
    section: {
      title: "Configurações",
      items: [
        {
          icon: UserCircleIcon,
          text: UserROles.CONTA,
          url: "/conta",
        },
        {
          icon: ChatBubbleLeftRightIcon,
          text: UserROles.SUPORTE,
          url: "/",
        },
      ],
    },
  },
  {
    section: {
      title: "Bônus",
      items: [
        {
          icon: BanknotesIcon,
          text: UserROles.AFILIAR_SE,
          url: "/",
        },
        {
          icon: RocketLaunchIcon,
          text: UserROles.KIT_DROPSHIPPING,
          url: "/",
        },
      ],
    },
  },
];

export interface NewsDataProps {
  category: string;
  description: string[];
}
export const newsData: NewsDataProps[] = [
  {
    category: "Introdução",
    description: [
      " Liberte-se das amarras dos fones de ouvido tradicionais! Apresentamos os A6s Freedom Buds Pro, a revolução em experiência auditiva sem fio. Desperte sua atenção para a liberdade demovimento, qualidade de som estéreo e design ideal para quem vive em movimento.Ighor",
      "Liberte-se das amarras dos fones de ouvido tradicionais! Apresentamos os A6s Freedom Buds Pro, a revolução em experiência auditiva sem fio. Desperte sua atenção para a liberdade demovimento, qualidade de som estéreo e design ideal para quem vive em movimento.",
    ],
  },
  {
    category: "Características",
    description: [
      "Imagine-se imerso em um som claro e envolvente, sem limitações. Com os A6s Freedom Buds Pro, a qualidade estéreo eleva sua música,filmes e jogos a um patamar superior. Projetados especialmente para os apaixonados por esportes, esses fones de ouvido garantem um ajuste seguro, permanecendo firmes mesmo nos treinos mais  intensos.",
      "Imagine-se imerso em um som claro e envolvente, sem limitações. Com os A6s Freedom Buds Pro, a qualidade estéreo eleva sua música,filmes e jogos a um patamar superior. Projetados especialmente para os apaixonados por esportes, esses fones de ouvido garantem um ajuste seguro, permanecendo firmes mesmo nos treinos mais  intensos.",
    ],
  },
  {
    category: "Características",
    description: [
      "Imagine-se imerso em um som claro e envolvente, sem limitações.Com os A6s Freedom Buds Pro, a qualidade estéreo eleva sua música,filmes e jogos a um patamar superior. Projetados especialmente para os apaixonados por esportes, esses fones de ouvido garantem um ajuste seguro, permanecendo firmes mesmo nos treinos mais intensos.",
      "   Imagine-se imerso em um som claro e envolvente, sem limitações. Com os A6s Freedom Buds Pro, a qualidade estéreo eleva sua música, filmes e jogos a um patamar superior. Projetados especialmente para os apaixonados por esportes, esses fones de ouvido garantem  um ajuste seguro, permanecendo firmes mesmo nos treinos mais  intensos.",
    ],
  },
];

export const recentesData: RecentesData[] = [
  {
    title: "EcoSound Freedom Buds",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incid...",
    date: "02/02/2024",
    hour: " 15:09",
  },
  {
    title: "EcoSound Freedom Buds",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incid...",
    date: "02/02/2024",
    hour: "15:09",
  },
  {
    title: "EcoSound Freedom Buds",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incid...",
    date: "02/02/2024",
    hour: "5:09",
  },
];

export const favoritesData: RecentesData[] = [
  {
    title: "EcoSound Freedom Buds",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incid...",
    date: "02/02/2024",
    hour: " 15:09",
  },
  {
    title: "EcoSound Freedom Buds",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incid...",
    date: "02/02/2024",
    hour: "15:09",
  },
];
import { ReactNode } from "react";
import { NavigationScreenProp } from "react-navigation";

export type Result = {
  score: number;
  show: {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime: any;
    averageRuntime: number;
    premiered: string;
    ended: any;
    officialSite: string;
    schedule: {
      time: string;
      days: string[];
    };
    rating: {
      average: any;
    };
    weight: number;
    network: any;
    webChannel: {
      id: number;
      name: string;
      country: {
        name: string;
        code: string;
        timezone: string;
      };
      officialSite: any;
    };
    dvdCountry: any;
    externals: {
      tvrage: any;
      thetvdb: any;
      imdb: any;
    };
    image: null | {
      medium: string;
      original: string;
    };
    summary: string;
    updated: number;
    _links: {
      self: {
        href: string;
      };
      previousepisode: {
        href: string;
      };
    };
  };
};

export type ContainerProps = {
  children?: ReactNode;
};

export type OpenURLButtonProps = {
  url: string;
  children: string;
};

export type IndexScreenProps = {
  navigation: NavigationScreenProp<any>;
};

export type DetailScreenProps = {
  navigation: NavigationScreenProp<Result>;
};

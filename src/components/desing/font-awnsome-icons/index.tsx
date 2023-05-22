"use client";

import type { ListedIcons } from "../../entities/icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHome } from "@fortawesome/free-solid-svg-icons";

const IconsMap: Record<ListedIcons, JSX.Element> = {
  home: <FontAwesomeIcon icon={faHome} />,
  plus: <FontAwesomeIcon icon={faPlus} />,
};

export const Icon = ({ use }: { use?: keyof typeof IconsMap }) => {
  if (!use) return null;
  return IconsMap[use];
};

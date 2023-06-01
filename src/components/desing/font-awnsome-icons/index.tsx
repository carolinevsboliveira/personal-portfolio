"use client";

import type { ListedIcons } from "../../entities/icons";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import type { SizeProp } from "@fortawesome/fontawesome-svg-core";
import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faHouse,
  faUser,
  faMugSaucer,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const IconsMap: Record<ListedIcons, IconDefinition> = {
  home: faHouse,
  plus: faPlus,
  person: faUser,
  blog: faMugSaucer,
  phone: faPhone,
};

interface IconProps extends Omit<FontAwesomeIconProps, "icon"> {
  use?: keyof typeof IconsMap;
  size: SizeProp;
}
export const Icon = ({ use, size, ...restProps }: IconProps) => {
  if (!use) return null;
  return <FontAwesomeIcon icon={IconsMap[use]} size={size} {...restProps} />;
};

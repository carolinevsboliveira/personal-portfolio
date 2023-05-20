"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

const IconsMap = {
  plusSquare: <FontAwesomeIcon icon={faPlusSquare} />,
};

export const Icon = ({ use }: { use: keyof typeof IconsMap }) => {
  return IconsMap[use];
};

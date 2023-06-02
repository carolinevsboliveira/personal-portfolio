import { client } from "./client";
import type { AboutMeResponse } from "./entities";

export const fetchAboutMeSection = async () => {
  const result = await client.get<AboutMeResponse>("api/homes", {
    params: {
      populate: {
        aboutMe: {
          populate: "*",
        },
      },
    },
  });

  return result.data.data[0].attributes;
};

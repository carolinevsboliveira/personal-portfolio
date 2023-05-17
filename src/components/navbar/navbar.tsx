import { ClickableLinks } from "./clicable-navbar";

export async function Navbar() {
  const jokes = await fetch("https://api.api-ninjas.com/v1/dadjokes?limit=3", {
    headers: { "x-api-key": "" },
  });

  const jsonJokes = await jokes.json();
  console.log("🚀 ~ file: navbar.tsx:9 ~ Navbar ~ jsonJokes:", jsonJokes);
  return (
    <>
      {jsonJokes.map((joke, index) => (
        <ClickableLinks linkName={joke.joke.split("")[1]} key={index} />
      ))}
    </>
  );
}

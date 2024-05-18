import { Iterable } from "effect";

import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";

export default function Home() {
  let _items = Iterable.replicate(1, 10);

  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}

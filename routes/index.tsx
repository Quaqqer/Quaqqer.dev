import Markdown from "@components/Markdown.tsx";
import { dedent } from "@qnighy/dedent";

export default function Home() {
  const md = dedent`
    ## Hello world

    [Asd](https://asd.com)
    
    My name is Emanuel, what is yours?
`;
  return (
    <>
      <Markdown src={md} />
    </>
  );
}

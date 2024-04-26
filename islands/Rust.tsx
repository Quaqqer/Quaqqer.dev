import { useEffect, useMemo } from "preact/hooks";
import { instantiate } from "../lib/rs_lib.generated.js";

export default function Rust() {
  const wasm = useMemo(() => instantiate(), []);

  useEffect(() => {
    if (wasm === undefined) return;

    const greeter = new wasm.Greeter("Emanuel");
    console.log(greeter.greet());
    console.log(`3 + 5 = ${wasm.add(3, 5)}`);
  }, [wasm]);

  return <div></div>;
}

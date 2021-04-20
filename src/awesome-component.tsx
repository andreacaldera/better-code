import React, { useEffect, useState } from "react";
import { useDemoHook } from "./useDemoHook";

const NAUGHTY_DEVELOPER = false;

export const AwesomeComponent: React.FunctionComponent = () => {
  const { demoPromise } = useDemoHook();
  const [state, setState] = useState<string>();

  useEffect(() => {
    demoPromise().then(setState);
  }, []);

  if (NAUGHTY_DEVELOPER) {
    return null;
    /** catch error faster by using Typescript, the following line is incorrect and will immediately give you an error instead of failing at runtime */
    // return undefined
  }
  return <h1>Typescript is awesome: {state}</h1>;
};

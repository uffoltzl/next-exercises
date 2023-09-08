import React from "react";

import { readFile, writeFile } from "../helpers/file-helpers";
import CensoredButton from "./censoredButton";

const DATABASE_PATH = "/src/database.json";

/*
`readFile` takes 1 argument:
• the path to the file:

readFile('/path/to/file');

`writeFile` takes 2 arguments:
• The path to the file
• The new contents for the file

writeFile(
  '/path/to/file',
  '{ "hello": "world" }'
);
*/

async function Home() {
  const databaseStringify = readFile(DATABASE_PATH);
  const database = JSON.parse(databaseStringify);
  const value = database.hits;
  console.log(value);
  writeFile(DATABASE_PATH, `{ "hits": ${value + 1} }`);
  return (
    <main>
      <h1>Welcome!</h1>
      <p>
        You are visitor number <CensoredButton value={value} />.
      </p>
    </main>
  );
}

export default Home;

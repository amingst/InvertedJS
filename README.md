# InvertedJS

## Provides an Interface to interact with an Inverted Tech backend in reactjs

### Usage

#### Installation

```
npm install invertedtech
```

or

```
yarn add invertedtech
```

#### js

```
const invertedtech = require('invertedtech');

const apiUrl = "http://my.api.url",
const token = "Inverted Tech Auth Token"

const client = new invertedtech.InvertedClient(apiUrl, token);
```

#### ts

```
import { InvertedClient } from 'invertedtech';

const apiUrl = "http://my.api.url",
const token = "Inverted Tech Auth Token"

const client: InvertedClient = new InvertedClient(apiUrl, token);
```

#### react

```
// App.tsx (Or Your Entrypoint)
import React from 'react'
import { InvertedProvider } from 'invertedtech';

export default function App({children}: React.PropsWithChildren<{}>) {
    const apiUrl = "path-to-api"
    const token = "Bearer Token"
    ... // Omitted for brevity

    return (
        <InvertedProvider baseUrl={apiUrl}, token={token}>
            {children}
        </InvertedProvider>
    )
}

// Other.tsx (Any Component You Want To Call The Inverted Client From)
import { useInverted } from 'invertedtech';

export default function OtherComponent(...props) {
    const { client } = useInverted();

    ... // Omitted for brevity
}
```

# Braze ChatGPT App Demo

This README assumes you are using `pnpm`, but you can replace `pnpm` with the package manager of your choice (`yarn`, `npm`, etc).

## UI Setup

Run the following commands from the root folder

To install dependencies:

```bash
pnpm install
```

To build:

```bash
pnpm run build
```

To test the frontend component locally:

```bash
pnpm run serve # starts a server at http://localhost:4444
```

## Server Setup

Run the following commands from the server folder

To install dependencies:

```bash
pnpm install
```

To run:

```bash
pnpm start
```

Optionally, host the MCP server so that ChatGPT can access it:

```bash
ngrok http 8000
```

### MCP Inspector

To inspect with the MCP inspector:

```bash
npx @modelcontextprotocol/inspector http://localhost:8000/mcp
```

Copy the output URL with the proxy token into your browser and enter the following inputs to connect:

Transport Type: `Streamable HTTP`
URL: `http://localhost:8000/mcp`

You can then preview the UI widget under the Resources tab and the tool itself under the Tools tab. Note that ChatGPT is able to display the UI widget from the tool, but the MCP insepctor cannot.

### Tracking events on the MCP server

To track events from your MCP server, use the [Braze REST API](https://www.braze.com/docs/api/home)

## Connecting to ChatGPT

Note that ChatGPT apps are not currently enabled for Business accounts. This must be done on a Plus or Pro account.

### Create the app

1. Click on your account on the bottom left and go to Settings
2. Go to the Apps & Connectors section
  - If you have not already done so, enable Developer Mode by scrolling to the bottom of this section and clicking on `Advanced settings`
3. Click Create at the top right and enter the name, the `ngrok` URL provided by the command above, and use no authentication

### Use the app

1. Make sure you have Developer Mode enabled (the main ChatGPT input should have an orange outline)
2. Click the `+` button, expand the `More` option, and choose the app you created above
3. Ask ChatGPT to invoke your tool (e.g. `Show me my current deals`)

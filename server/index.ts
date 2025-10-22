import express from "express";

import { readFile } from "node:fs/promises";

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";

const server = new McpServer({
  name: "My MCP Server",
  version: "1.0.0",
  description: "A simple MCP server",
});

const meta = {
  "openai/outputTemplate": "ui://widget/current-deals.html",
  "openai/toolInvocation/invoking": "Getting your deals...",
  "openai/toolInvocation/invoked": "Got your deals",
  "openai/widgetAccessible": true,
  "openai/resultCanProduceWidget": true,
  "openai/widgetCSP": {
    connect_domains: ["REPLACE_WITH_YOUR_BASE_URL"],
    resource_domains: [
      "https://appboy-images.com",
      "https://braze-images.com",
      "https://cdn.braze.eu",
      "https://persistent.oaistatic.com",
      "https://use.fontawesome.com"
    ],
  },
}

server.registerResource(
  "current-deals-widget",
  "ui://widget/current-deals.html",
  {},
  async () => ({
    contents: [
      {
        uri: "ui://widget/current-deals.html",
        mimeType: "text/html+skybridge",
        text: `<div id="inbox-root"></div>
<script type="module">${await readFile(new URL("../assets/inbox.js", import.meta.url), "utf8")}</script>`.trim(),
        _meta: meta,
      },
    ],
  })
);

server.registerTool(
  "current-deals",
  {
    title: "Current Deals",
    _meta: meta,
  },
  async () => ({
    content: [{ type: "text", text: "Here are your current deals" }],
    structuredContent: {},
  })
)

const app = express();
app.use(express.json());

app.post('/mcp', async (req, res) => {
  // Create a new transport for each request to prevent request ID collisions
  const transport = new StreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
    enableJsonResponse: true
  });

  res.on('close', () => {
    transport.close();
  });

  await server.connect(transport);
  await transport.handleRequest(req, res, req.body);
});

app.get("/health", (_, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() })
});

const port = parseInt(process.env.PORT || '8000');
app.listen(port, () => {
  console.log(`Demo MCP Server running on http://localhost:${port}/mcp`);
}).on('error', error => {
  console.error('Server error:', error);
  process.exit(1);
});

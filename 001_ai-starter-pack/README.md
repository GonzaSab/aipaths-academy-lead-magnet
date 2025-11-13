# AI Development Starter Pack - Setup Guide

Welcome to the AI Development Starter Pack! This guide will walk you through setting up your AI-powered development environment.

## What's Inside

```
001_ai-starter-pack/
├── .cursor/              # Cursor IDE configuration
│   └── config.json       # Main Cursor settings
├── .continue/            # Continue extension config
│   └── config.json       # Continue settings and models
├── mcp-configs/          # MCP server configurations
│   └── config.json       # MCP server definitions
└── README.md             # This file
```

## Prerequisites

Before you begin, ensure you have:

- [ ] **Cursor IDE** or **VS Code** installed
- [ ] **Node.js 18+** installed (`node --version` to check)
- [ ] **Git** installed (for version control features)
- [ ] Basic familiarity with your operating system's terminal

## Installation Instructions

### Step 1: Extract the Files

Unzip the downloaded package to a convenient location:

```bash
# Example on macOS/Linux
unzip ai-starter-pack.zip -d ~/Downloads/ai-starter-pack
cd ~/Downloads/ai-starter-pack
```

### Step 2: Backup Existing Configurations (Optional but Recommended)

If you have existing configurations, back them up first:

```bash
# Backup Cursor config
cp -r ~/.cursor ~/.cursor.backup

# Backup Continue config
cp -r ~/.continue ~/.continue.backup

# Backup MCP config (if exists)
cp -r ~/.mcp ~/.mcp.backup
```

### Step 3: Install Cursor Configuration

Copy the Cursor configuration to your home directory:

```bash
# On macOS/Linux
cp -r .cursor ~/.cursor

# On Windows (PowerShell)
Copy-Item -Path .cursor -Destination $env:USERPROFILE\.cursor -Recurse
```

### Step 4: Install Continue Configuration

Copy the Continue configuration:

```bash
# On macOS/Linux
mkdir -p ~/.continue
cp -r .continue/* ~/.continue/

# On Windows (PowerShell)
New-Item -ItemType Directory -Force -Path $env:USERPROFILE\.continue
Copy-Item -Path .continue\* -Destination $env:USERPROFILE\.continue -Recurse
```

### Step 5: Install MCP Server Configurations

Copy the MCP configurations:

```bash
# On macOS/Linux
mkdir -p ~/.mcp
cp -r mcp-configs/* ~/.mcp/

# On Windows (PowerShell)
New-Item -ItemType Directory -Force -Path $env:USERPROFILE\.mcp
Copy-Item -Path mcp-configs\* -Destination $env:USERPROFILE\.mcp -Recurse
```

### Step 6: Install MCP Server Dependencies

Navigate to the MCP config directory and install required packages:

```bash
cd ~/.mcp
npm install
```

### Step 7: Restart Your IDE

Close and completely restart Cursor or VS Code for changes to take effect.

## Verification Checklist

After restarting your IDE, verify the setup:

- [ ] **Cursor/VS Code Opens**: IDE starts without errors
- [ ] **AI Commands Work**: Try using AI code completion (Cmd/Ctrl + K)
- [ ] **Continue Extension Active**: Check the Continue icon in your sidebar
- [ ] **MCP Servers Running**: Check status in Cursor settings or Continue panel
- [ ] **Keyboard Shortcuts**: Test custom shortcuts (see below)

## Key Features & Usage

### Cursor IDE

**Custom Keyboard Shortcuts:**
- `Cmd/Ctrl + K` - AI code generation
- `Cmd/Ctrl + L` - Open AI chat
- `Cmd/Ctrl + Shift + K` - Inline AI edit
- `Cmd/Ctrl + I` - Quick AI command

**Settings Configured:**
- Context window: 16K tokens
- Preferred model: GPT-4 Turbo
- Privacy mode: Enabled (no data sharing)
- Auto-suggestions: Enabled

### Continue Extension

**Slash Commands:**
- `/edit` - Edit selected code with AI
- `/comment` - Generate code comments
- `/test` - Generate unit tests
- `/fix` - Fix bugs in selected code
- `/explain` - Explain code functionality

**Model Configuration:**
- Primary: GPT-4 Turbo
- Fallback: Claude 3 Opus
- Local option: Configured for Ollama

### MCP Servers

**Available Servers:**
1. **File System** - Read/write local files
2. **Web Browser** - Fetch web content
3. **GitHub** - Repository operations
4. **PostgreSQL** - Database queries (configure credentials)
5. **Custom Tools** - Your own MCP tools

## Customization Guide

### Changing AI Models

Edit `~/.continue/config.json`:

```json
{
  "models": [
    {
      "title": "GPT-4",
      "provider": "openai",
      "model": "gpt-4-turbo-preview",
      "apiKey": "YOUR_API_KEY"
    }
  ]
}
```

### Adjusting Context Window

Edit `~/.cursor/config.json`:

```json
{
  "ai": {
    "contextWindow": 32000,  // Increase for larger context
    "maxTokens": 4096
  }
}
```

### Adding Custom Prompts

Add to `~/.continue/config.json`:

```json
{
  "customCommands": [
    {
      "name": "mycommand",
      "prompt": "Your custom prompt here",
      "description": "What your command does"
    }
  ]
}
```

## Troubleshooting

### Problem: MCP Servers Won't Start

**Solution:**
1. Check Node.js version: `node --version` (must be 18+)
2. Reinstall dependencies: `cd ~/.mcp && npm install`
3. Check logs: `~/.mcp/logs/mcp.log`

### Problem: Cursor Not Using New Config

**Solution:**
1. Completely quit Cursor (Cmd/Ctrl + Q)
2. Clear cache: Delete `~/Library/Application Support/Cursor/Cache` (macOS)
3. Restart Cursor

### Problem: Continue Extension Not Working

**Solution:**
1. Check extension is installed: Extensions panel → Search "Continue"
2. Update to latest version
3. Reload VS Code window (Cmd/Ctrl + Shift + P → "Reload Window")

### Problem: API Keys Not Working

**Solution:**
1. Verify keys are set in `~/.continue/config.json`
2. Check key format (no quotes, no extra spaces)
3. Ensure billing is active on your OpenAI/Anthropic account

## API Keys Setup

The configurations support multiple AI providers. Add your API keys:

### OpenAI (GPT-4)
```bash
# Option 1: Environment variable
export OPENAI_API_KEY="sk-..."

# Option 2: In config file
# Edit ~/.continue/config.json and add your key
```

### Anthropic (Claude)
```bash
export ANTHROPIC_API_KEY="sk-ant-..."
```

### Local Models (Ollama)
```bash
# Install Ollama first
curl -fsSL https://ollama.ai/install.sh | sh

# Pull a model
ollama pull codellama
```

## Performance Tips

1. **Start with Smaller Context**: Use 8K-16K context for faster responses
2. **Disable Unused MCP Servers**: Comment out servers you don't need
3. **Use Local Models**: For fast, private coding assistance
4. **Selective File Indexing**: Exclude `node_modules`, `dist`, etc.

## Security Best Practices

1. **Never commit API keys**: Keep them in environment variables
2. **Review AI suggestions**: Always verify generated code
3. **Use privacy mode**: Prevent code sharing with AI providers
4. **Limit file access**: Configure MCP servers with restricted paths

## Next Steps

Now that you're set up, explore these resources:

1. **[Cursor Documentation](https://cursor.sh/docs)** - Official Cursor guides
2. **[Continue Docs](https://continue.dev/docs)** - Continue extension manual
3. **[MCP Specification](https://modelcontextprotocol.io)** - Learn about MCP
4. **[AIPaths Academy](https://aipaths.academy)** - More AI development courses

## Need Help?

- **Email**: support@aipaths.academy
- **Discord**: [Join our community](https://discord.gg/aipaths)
- **Documentation**: Check `/en/docs` on our website
- **Video Tutorials**: Available at `/en/videos`

## Updates

This starter pack is regularly updated with new features and improvements. To get updates:

1. Subscribe to our newsletter
2. Follow us on social media
3. Check the downloads page for new versions

## License

This configuration pack is provided by AIPaths Academy for educational purposes. Feel free to modify and adapt to your needs.

---

**Enjoy your supercharged AI development environment!**

If you found this useful, please share it with other developers and consider leaving feedback.
